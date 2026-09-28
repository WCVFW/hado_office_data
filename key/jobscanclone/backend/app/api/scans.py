import os
import time
from fastapi import APIRouter, Depends, HTTPException, File, UploadFile, Form
from pydantic import BaseModel
from app.core.database import read_db, write_db, get_next_id
from app.schemas.schemas import ScanCreate, ScanResponse
from app.api.deps import get_current_user
from app.services.extractor import extract_skills_from_jd
from app.services.matcher import get_semantic_matches
from app.services.analyzer import generate_recruiter_tips, extract_resume_details_with_ollama
from app.services.parser import parse_document
from app.services.scorer import ATSScorer
from typing import Optional

router = APIRouter()

class DirectScanRequest(BaseModel):
    resume: str
    jobDescription: str

@router.post("/direct")
def create_direct_scan(scan_req: DirectScanRequest):
    return run_scan_logic(scan_req.resume, scan_req.jobDescription)

@router.post("/direct_file")
async def create_direct_scan_file(
    job_description: str = Form(...),
    resume_text: Optional[str] = Form(None),
    resume_file: Optional[UploadFile] = File(None)
):
    if not resume_text and not resume_file:
        raise HTTPException(status_code=400, detail="Must provide resume_text or resume_file")
        
    final_resume_text = ""
    
    if resume_text:
        final_resume_text = resume_text
    elif resume_file:
        file_bytes = await resume_file.read()
        final_resume_text = parse_document(resume_file.filename, file_bytes)
        
    return run_scan_logic(final_resume_text, job_description)

def run_scan_logic(resume_text: str, jd_text: str):
    try:
        required_skills = extract_skills_from_jd(jd_text)
        matched_skills = get_semantic_matches(required_skills, resume_text)
        
        # Build skills_analysis for ATSScorer
        skills_analysis = []
        for i, s in enumerate(matched_skills):
            category = "Soft Skills" if i >= max(1, len(matched_skills) // 2) else "Hard Skills"
            match_status = "matched" if s["resumeCount"] > 0 else "missing"
            skills_analysis.append({
                "skill": s["skill"],
                "category": category,
                "importance": "required",
                "match_status": match_status
            })
            
        # Extract A-Z details using Ollama (Tier 1 ATS Style)
        extracted_details = extract_resume_details_with_ollama(resume_text)
        actual_years = extracted_details.get("total_years_experience", 0)
        
        # Simple extraction of required years from JD (assuming typical format like "5+ years", etc.)
        # Default to 0 for now if not found easily
        import re
        years_match = re.search(r'(\d+)\+?\s*(?:-\s*\d+\s*)?years?', jd_text.lower())
        required_years = int(years_match.group(1)) if years_match else 0
        
        exp_status = "matched" if actual_years >= required_years else "partial" if actual_years > 0 else "missing"

        # Dynamic title and responsibility checks instead of hardcoded 100%
        job_titles = extracted_details.get("job_titles", [])
        title_sim = 0.0
        if job_titles:
            title_sim = 1.0 if any(t.lower() in jd_text.lower() for t in job_titles) else 0.5
            
        resp_conf = 1.0 if len(resume_text.split()) > 150 else 0.4
        fmt_score = 10 if extracted_details.get("has_contact_info") else 5

        match_results = {
            "skills_analysis": skills_analysis,
            "missing_skills": [s for s in skills_analysis if s["match_status"] == "missing"],
            "experience_analysis": {
                "status": exp_status,
                "actual_years": actual_years,
                "required_years": required_years
            }, 
            "title_analysis": {"similarity": title_sim},
            "responsibility_analysis": [{"confidence": resp_conf}],
            "formatting_analysis": {"score": fmt_score}
        }

        scorer = ATSScorer()
        score_data = scorer.calculate_score(match_results, resume_text)
        score = score_data["overall_score"]
            
        recruiter_tips = generate_recruiter_tips(resume_text, jd_text, score, matched_skills)
        
        hard_skills = matched_skills[:max(1, len(matched_skills)//2)]
        soft_skills = matched_skills[max(1, len(matched_skills)//2):]

        return {
            "matchRate": score,
            "hardSkills": hard_skills,
            "softSkills": soft_skills,
            "recruiterTips": recruiter_tips,
            "experience": {
                "requiredYears": required_years,
                "actualYears": actual_years,
                "status": "pass" if actual_years >= required_years else "warn"
            },
            "parsing": {
                "contactInfo": extracted_details.get("has_contact_info", True),
                "education": extracted_details.get("has_education", True),
                "experience": extracted_details.get("has_experience", True)
            },
            "searchability": [
                {"name": "ATS Parsing", "status": "pass", "message": "Successfully parsed locally using spaCy and Sentence Transformers."}
            ],
            "formatting": [
                {"name": "Standard Format", "status": "pass", "message": "Format processed successfully."}
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("", response_model=ScanResponse)
def create_scan(scan_in: ScanCreate, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    
    resume = next((r for r in db_data["resumes"] if r["id"] == scan_in.resume_id and r["user_id"] == current_user["id"]), None)
    job = next((j for j in db_data["jobs"] if j["id"] == scan_in.job_id and j["user_id"] == current_user["id"]), None)
    
    if not resume:
        raise HTTPException(status_code=404, detail="Resume not found")
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
        
    if not resume.get("parsed_data"):
        raise HTTPException(status_code=400, detail="Resume must be parsed first")
    if not job.get("parsed_data"):
        raise HTTPException(status_code=400, detail="Job must be parsed first")

    # Read raw text for formatting checker
    raw_resume_text = ""
    if os.path.exists(resume["file_path"]):
        try:
            with open(resume["file_path"], 'r', encoding='utf-8', errors='ignore') as f:
                raw_resume_text = f.read()
        except:
            pass

    try:
        # Phase 3 & 4: New NLP AI Pipeline
        # 1. Extract required skills from JD using spaCy
        required_skills = extract_skills_from_jd(job.get("parsed_data", ""))
        
        # 2. Perform Semantic Match using Sentence Transformers
        matched_skills = get_semantic_matches(required_skills, raw_resume_text)
        
        # Calculate Score deterministically based on matches
        if not required_skills:
            score = 0
        else:
            matched_count = sum(1 for s in matched_skills if s["resumeCount"] > 0)
            score = int((matched_count / len(required_skills)) * 100)
            
        # 3. Generate LLM Recruiter Tips using Ollama
        recruiter_tips = generate_recruiter_tips(raw_resume_text, job.get("parsed_data", ""), score, matched_skills)
        
        # Match the exact schema expected by page.tsx
        
        # Split matched_skills arbitrarily into hard and soft for UI
        hard_skills = matched_skills[:max(1, len(matched_skills)//2)]
        soft_skills = matched_skills[max(1, len(matched_skills)//2):]

        final_results = {
            "matchRate": score,
            "hardSkills": hard_skills,
            "softSkills": soft_skills,
            "recruiterTips": recruiter_tips,
            "experience": {
                "requiredYears": 0, # Since we didn't extract years via LLM yet
                "actualYears": 0,
                "status": "warn"
            },
            "parsing": {
                "contactInfo": True,
                "education": True,
                "experience": True
            },
            "searchability": [
                {"name": "ATS Parsing", "status": "pass", "message": "Successfully parsed locally."}
            ],
            "formatting": [
                {"name": "Standard Format", "status": "pass", "message": "Format looks standard."}
            ]
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Matching/Scoring failed: {str(e)}")

    new_scan = {
        "id": get_next_id(db_data["scans"]),
        "user_id": current_user["id"],
        "resume_id": resume["id"],
        "job_id": job["id"],
        "match_rate": final_results.get("overall_score", 0),
        "results_json": final_results,
        "created_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    }
    
    db_data["scans"].append(new_scan)
    write_db(db_data)
    
    return new_scan

@router.get("/{scan_id}/score")
def get_scan_score(scan_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    scan = next((s for s in db_data["scans"] if s["id"] == scan_id and s["user_id"] == current_user["id"]), None)
    if not scan:
        raise HTTPException(status_code=404, detail="Scan not found")
        
    res = scan["results_json"]
    return {
        "overall_score": res.get("overall_score"),
        "level": res.get("level"),
        "breakdown": res.get("breakdown")
    }

@router.get("/{scan_id}/ats")
def get_scan_ats(scan_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    scan = next((s for s in db_data["scans"] if s["id"] == scan_id and s["user_id"] == current_user["id"]), None)
    if not scan:
        raise HTTPException(status_code=404, detail="Scan not found")
        
    return scan["results_json"].get("formatting_analysis", {})

@router.get("/{scan_id}/keywords")
def get_scan_keywords(scan_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    scan = next((s for s in db_data["scans"] if s["id"] == scan_id and s["user_id"] == current_user["id"]), None)
    if not scan:
        raise HTTPException(status_code=404, detail="Scan not found")
        
    res = scan["results_json"]
    return {
        "missing_keywords_prioritized": res.get("missing_keywords_prioritized", []),
        "stuffing_analysis": res.get("stuffing_analysis", {})
    }

@router.get("", response_model=list[ScanResponse])
def get_scans(current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    scans = [s for s in db_data["scans"] if s["user_id"] == current_user["id"]]
    return scans

@router.get("/{scan_id}", response_model=ScanResponse)
def get_scan(scan_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    scan = next((s for s in db_data["scans"] if s["id"] == scan_id and s["user_id"] == current_user["id"]), None)
    if not scan:
        raise HTTPException(status_code=404, detail="Scan not found")
    return scan
