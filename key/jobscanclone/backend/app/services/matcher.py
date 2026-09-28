from sentence_transformers import SentenceTransformer
import numpy as np
import re

# Load the SentenceTransformer model for semantic matching
# all-MiniLM-L6-v2 is fast and effective for sentence embeddings
try:
    model = SentenceTransformer('all-MiniLM-L6-v2')
except Exception as e:
    print(f"Failed to load SentenceTransformer: {e}")
    model = None

def cosine_similarity(vec1, vec2):
    """Calculates cosine similarity between two vectors."""
    dot_product = np.dot(vec1, vec2)
    norm_a = np.linalg.norm(vec1)
    norm_b = np.linalg.norm(vec2)
    if norm_a == 0 or norm_b == 0:
        return 0.0
    return dot_product / (norm_a * norm_b)

def get_semantic_matches(required_skills: list[str], resume_text: str, threshold: float = 0.65):
    """
    Checks if the required skills are semantically present in the resume.
    Uses Sentence Transformers to match concepts even if phrasing is different
    (e.g., "ReactJS" matches "React Framework").
    """
    if not model or not required_skills:
        # Fallback to exact text matching if model fails to load
        return fallback_exact_match(required_skills, resume_text)
        
    resume_lower = resume_text.lower()
    
    # Pre-embed the resume into chunks (sentences/phrases) to compare against
    # Splitting by newline and common punctuation to get phrase-level chunks
    resume_chunks = [c.strip() for c in re.split(r'[\n\.,;•-]', resume_lower) if len(c.strip()) > 3]
    if not resume_chunks:
        resume_chunks = [resume_lower]
        
    try:
        resume_embeddings = model.encode(resume_chunks)
        skill_embeddings = model.encode(required_skills)
        
        matched_skills = []
        
        for i, skill in enumerate(required_skills):
            skill_vec = skill_embeddings[i]
            # Check similarity against all resume chunks
            best_match_score = 0.0
            
            for chunk_vec in resume_embeddings:
                sim = cosine_similarity(skill_vec, chunk_vec)
                if sim > best_match_score:
                    best_match_score = sim
            
            # If similarity exceeds threshold, we consider it a match
            if best_match_score >= threshold:
                matched_skills.append({
                    "skill": skill,
                    "jdCount": 1, 
                    "resumeCount": 1, # Semantically found
                    "similarity": round(float(best_match_score), 2)
                })
            else:
                # Double check exact match as fallback just in case semantic missed it due to chunking
                if skill.lower() in resume_lower:
                    matched_skills.append({
                        "skill": skill,
                        "jdCount": 1,
                        "resumeCount": 1,
                        "similarity": 1.0
                    })
                else:
                    matched_skills.append({
                        "skill": skill,
                        "jdCount": 1,
                        "resumeCount": 0,
                        "similarity": round(float(best_match_score), 2)
                    })
                    
        return matched_skills
        
    except Exception as e:
        print(f"Semantic match error: {e}")
        return fallback_exact_match(required_skills, resume_text)

def fallback_exact_match(required_skills: list[str], resume_text: str):
    """Fallback if AI embedding fails."""
    resume_lower = resume_text.lower()
    matched_skills = []
    for skill in required_skills:
        count = resume_lower.count(skill.lower())
        matched_skills.append({
            "skill": skill,
            "jdCount": 1,
            "resumeCount": count,
            "similarity": 1.0 if count > 0 else 0.0
        })
    return matched_skills
