from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from app.core.database import read_db, write_db, get_next_id
from app.core.security import verify_password, get_password_hash, create_access_token
from app.core.config import settings
from app.schemas.schemas import UserCreate, UserResponse, Token
from app.api.deps import get_current_user

router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register(user_in: UserCreate):
    db_data = read_db()
    
    if any(u["email"] == user_in.email for u in db_data["users"]):
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system.",
        )
        
    new_user = {
        "id": get_next_id(db_data["users"]),
        "email": user_in.email,
        "password_hash": get_password_hash(user_in.password),
        "created_at": datetime.utcnow().isoformat()
    }
    
    db_data["users"].append(new_user)
    write_db(db_data)
    
    return new_user

@router.post("/login", response_model=Token)
def login_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    db_data = read_db()
    user = next((u for u in db_data["users"] if u["email"] == form_data.username), None)
    
    if not user or not verify_password(form_data.password, user["password_hash"]):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": create_access_token(
            data={"sub": user["email"]}, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }

@router.get("/me", response_model=UserResponse)
def read_user_me(current_user: dict = Depends(get_current_user)):
    return current_user
