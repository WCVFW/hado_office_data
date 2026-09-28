from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from app.core.database import read_db, write_db, get_next_id
from app.schemas.schemas import JobCreate, JobResponse
from app.api.deps import get_current_user

router = APIRouter()

@router.post("", response_model=JobResponse)
def create_job(job_in: JobCreate, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    
    new_job = {
        "id": get_next_id(db_data["jobs"]),
        "user_id": current_user["id"],
        "title": job_in.title,
        "content": job_in.content,
        "created_at": datetime.utcnow().isoformat()
    }
    
    db_data["jobs"].append(new_job)
    write_db(db_data)
    
    return new_job

@router.get("", response_model=list[JobResponse])
def get_jobs(current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    jobs = [j for j in db_data["jobs"] if j["user_id"] == current_user["id"]]
    return jobs

@router.get("/{job_id}", response_model=JobResponse)
def get_job(job_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    job = next((j for j in db_data["jobs"] if j["id"] == job_id and j["user_id"] == current_user["id"]), None)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    return job

@router.delete("/{job_id}")
def delete_job(job_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    job = next((j for j in db_data["jobs"] if j["id"] == job_id and j["user_id"] == current_user["id"]), None)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
        
    db_data["jobs"] = [j for j in db_data["jobs"] if j["id"] != job_id]
    write_db(db_data)
    return {"message": "Job deleted successfully"}

from app.services.parser import parse_job_text

@router.post("/{job_id}/parse")
def parse_job(job_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    job = next((j for j in db_data["jobs"] if j["id"] == job_id and j["user_id"] == current_user["id"]), None)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
        
    try:
        parsed_data = parse_job_text(job["content"])
        job["parsed_data"] = parsed_data
        
        # Save to job requirements/skills arrays
        db_data["job_requirements"].append({"job_id": job_id, "qualifications": parsed_data["qualifications"]})
        db_data["job_skills"].extend([{"job_id": job_id, "skill": s, "type": "required"} for s in parsed_data["required_skills"]])
        db_data["job_skills"].extend([{"job_id": job_id, "skill": s, "type": "preferred"} for s in parsed_data["preferred_skills"]])
        
        write_db(db_data)
        
        return {"message": "Parsing successful", "data": parsed_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Parsing failed: {str(e)}")

@router.get("/{job_id}/parsed")
def get_parsed_job(job_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    job = next((j for j in db_data["jobs"] if j["id"] == job_id and j["user_id"] == current_user["id"]), None)
    if not job or not job.get("parsed_data"):
        raise HTTPException(status_code=404, detail="Parsed data not found")
        
    return job["parsed_data"]
