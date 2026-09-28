import os
import uuid
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from app.core.database import read_db, write_db, get_next_id
from app.core.config import settings
from app.schemas.schemas import ResumeResponse
from app.api.deps import get_current_user

router = APIRouter()

ALLOWED_EXTENSIONS = {".pdf", ".docx"}

@router.post("/upload", response_model=ResumeResponse)
async def upload_resume(
    file: UploadFile = File(...),
    current_user: dict = Depends(get_current_user)
):
    ext = os.path.splitext(file.filename)[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="Only PDF and DOCX files are supported")
    
    contents = await file.read()
    if len(contents) == 0:
        raise HTTPException(status_code=400, detail="File is empty")
    if len(contents) > settings.MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail="File size exceeds maximum allowed limit (5MB)")
    
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    file_id = str(uuid.uuid4())
    file_path = os.path.join(settings.UPLOAD_DIR, f"{file_id}{ext}")
    
    with open(file_path, "wb") as f:
        f.write(contents)
        
    db_data = read_db()
    
    new_resume = {
        "id": get_next_id(db_data["resumes"]),
        "user_id": current_user["id"],
        "file_path": file_path,
        "original_filename": file.filename,
        "parsed_data": None,
        "created_at": datetime.utcnow().isoformat()
    }
    
    db_data["resumes"].append(new_resume)
    write_db(db_data)
    
    return new_resume

@router.get("", response_model=list[ResumeResponse])
def get_resumes(current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    resumes = [r for r in db_data["resumes"] if r["user_id"] == current_user["id"]]
    return resumes

@router.get("/{resume_id}", response_model=ResumeResponse)
def get_resume(resume_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    resume = next((r for r in db_data["resumes"] if r["id"] == resume_id and r["user_id"] == current_user["id"]), None)
    if not resume:
        raise HTTPException(status_code=404, detail="Resume not found")
    return resume

@router.delete("/{resume_id}")
def delete_resume(resume_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    resume = next((r for r in db_data["resumes"] if r["id"] == resume_id and r["user_id"] == current_user["id"]), None)
    if not resume:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    if os.path.exists(resume["file_path"]):
        os.remove(resume["file_path"])
        
    db_data["resumes"] = [r for r in db_data["resumes"] if r["id"] != resume_id]
    write_db(db_data)
    
    return {"message": "Resume deleted successfully"}

from app.services.parser import extract_text_from_file, parse_resume_text

@router.post("/{resume_id}/parse")
def parse_resume(resume_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    resume = next((r for r in db_data["resumes"] if r["id"] == resume_id and r["user_id"] == current_user["id"]), None)
    if not resume:
        raise HTTPException(status_code=404, detail="Resume not found")
        
    try:
        text = extract_text_from_file(resume["file_path"])
        parsed_data = parse_resume_text(text)
        
        resume["parsed_data"] = parsed_data
        
        # Save sections to DB to satisfy requirements
        db_data["resume_sections"].append({"resume_id": resume_id, "summary": parsed_data["summary"]})
        db_data["resume_skills"].extend([{"resume_id": resume_id, "skill": s} for s in parsed_data["skills"]])
        db_data["resume_experience"].extend([{"resume_id": resume_id, **e} for e in parsed_data["experience"]])
        db_data["resume_education"].extend([{"resume_id": resume_id, **e} for e in parsed_data["education"]])
        
        write_db(db_data)
        
        return {"message": "Parsing successful", "data": parsed_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Parsing failed: {str(e)}")

@router.get("/{resume_id}/parsed")
def get_parsed_resume(resume_id: int, current_user: dict = Depends(get_current_user)):
    db_data = read_db()
    resume = next((r for r in db_data["resumes"] if r["id"] == resume_id and r["user_id"] == current_user["id"]), None)
    if not resume or not resume.get("parsed_data"):
        raise HTTPException(status_code=404, detail="Parsed data not found")
        
    return resume["parsed_data"]
