import requests
import json

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"
MODEL_NAME = "llama3.2"  # or whatever model the user pulls

def generate_recruiter_tips(resume_text: str, jd_text: str, match_score: int, matched_skills: list) -> list:
    """
    Calls a local Ollama instance to generate recruiter tips based on the match.
    """
    # Extract only the names of missing skills
    missing_skills = [s['skill'] for s in matched_skills if s['resumeCount'] == 0]
    
    prompt = f"""
    You are an expert ATS recruiter. I have a candidate with a match score of {match_score}%.
    They are missing the following critical skills from the job description: {', '.join(missing_skills[:5])}.
    
    Based on this, provide 2 short, actionable tips (max 1 sentence each) for the candidate to improve their resume.
    Return ONLY a valid JSON array of objects with 'name', 'status' (warn or fail), and 'message' (the tip).
    Example:
    [
      {{"name": "Skill Gap", "status": "fail", "message": "You are missing ReactJS."}}
    ]
    """
    
    try:
        response = requests.post(OLLAMA_URL, json={
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": False,
            "format": "json"
        }, timeout=120)
        
        if response.status_code == 200:
            data = response.json()
            response_text = data.get("response", "[]")
            try:
                tips = json.loads(response_text)
                if isinstance(tips, list):
                    return tips
            except:
                pass
    except requests.exceptions.RequestException:
        print("Ollama connection failed. Ensure Ollama is running.")
        
    # Fallback deterministic tips if Ollama is down or fails
    tips = []
    if missing_skills:
        tips.append({
            "name": "Missing Keywords",
            "status": "warn",
            "message": f"You are missing important skills like: {', '.join(missing_skills[:3])}. Add them if you have experience."
        })
    else:
        tips.append({
            "name": "Strong Match",
            "status": "pass",
            "message": "You have hit all the major keywords. Ensure your bullet points highlight achievements."
        })
    return tips

def extract_resume_details_with_ollama(resume_text: str) -> dict:
    """
    Calls Ollama to parse the resume deeply and extract A-Z details like a Tier 1 ATS.
    """
    prompt = f"""
    You are an expert ATS parsing system. I will provide you with the text of a resume.
    Extract the following structured information accurately.
    Return ONLY a valid JSON object with the following schema, and no other text:
    {{
      "has_contact_info": boolean (true if email or phone is found),
      "has_education": boolean (true if an education section or degree is found),
      "has_experience": boolean (true if a work experience section is found),
      "total_years_experience": integer (calculate the total years of work experience across all roles),
      "job_titles": list of strings (extract the job titles held)
    }}

    Resume text:
    {resume_text[:3000]}
    """
    
    fallback = {
        "has_contact_info": True,
        "has_education": True,
        "has_experience": True,
        "total_years_experience": 2,
        "job_titles": []
    }
    
    try:
        response = requests.post(OLLAMA_URL, json={
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": False,
            "format": "json"
        }, timeout=120)
        
        if response.status_code == 200:
            data = response.json()
            response_text = data.get("response", "{}")
            try:
                details = json.loads(response_text)
                return details
            except:
                return fallback
    except requests.exceptions.RequestException:
        print("Ollama connection failed for extraction.")
        
    return fallback
