from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime

# --- User Schemas ---
class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

# --- Auth Schemas ---
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

# --- Resume Schemas ---
class ResumeResponse(BaseModel):
    id: int
    user_id: int
    original_filename: str
    created_at: datetime
    parsed_data: Optional[Dict[str, Any]] = None
    class Config:
        from_attributes = True

# --- Job Schemas ---
class JobCreate(BaseModel):
    title: str
    content: str

class JobResponse(BaseModel):
    id: int
    user_id: int
    title: str
    content: str
    created_at: datetime
    class Config:
        from_attributes = True

# --- Scan Schemas ---
class ScanCreate(BaseModel):
    resume_id: int
    job_id: int

class ScanResponse(BaseModel):
    id: int
    user_id: int
    resume_id: int
    job_id: int
    match_rate: Optional[int]
    results_json: Optional[Dict[str, Any]]
    created_at: datetime
    class Config:
        from_attributes = True
