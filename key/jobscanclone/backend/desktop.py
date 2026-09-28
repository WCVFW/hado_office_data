import threading
import uvicorn
import webview
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.api import auth, resumes, jobs, scans
from app.core.config import settings
import os

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(resumes.router, prefix="/api/resumes", tags=["resumes"])
app.include_router(jobs.router, prefix="/api/jobs", tags=["jobs"])
app.include_router(scans.router, prefix="/api/scans", tags=["scans"])

# Mount Next.js out folder
out_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "out")
if os.path.exists(out_dir):
    app.mount("/", StaticFiles(directory=out_dir, html=True), name="static")

def run_server():
    uvicorn.run(app, host="127.0.0.1", port=8080, log_level="warning")

if __name__ == '__main__':
    t = threading.Thread(target=run_server)
    t.daemon = True
    t.start()
    
    webview.create_window('ATS Scanner', 'http://127.0.0.1:8080')
    webview.start()
