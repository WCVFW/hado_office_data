import json
import os
from typing import Dict, Any, List

DB_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "db.json")

def init_db():
    if not os.path.exists(DB_FILE):
        with open(DB_FILE, "w") as f:
            json.dump({
                "users": [],
                "resumes": [],
                "jobs": [],
                "scans": [],
                "resume_sections": [],
                "resume_skills": [],
                "resume_experience": [],
                "resume_education": [],
                "job_requirements": [],
                "job_skills": []
            }, f)

def read_db() -> Dict[str, List[Dict[str, Any]]]:
    init_db()
    with open(DB_FILE, "r") as f:
        data = json.load(f)
        
        # Backward compatibility for existing DBs
        keys = [
            "resume_sections", "resume_skills", "resume_experience", 
            "resume_education", "job_requirements", "job_skills"
        ]
        for key in keys:
            if key not in data:
                data[key] = []
        return data

def write_db(data: Dict[str, List[Dict[str, Any]]]):
    with open(DB_FILE, "w") as f:
        json.dump(data, f, indent=4)

def get_next_id(collection: List[Dict[str, Any]]) -> int:
    if not collection:
        return 1
    return max(item["id"] for item in collection) + 1

def get_db():
    return read_db()
