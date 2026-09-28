import spacy

# Load the spaCy NLP model (requires: python -m spacy download en_core_web_sm)
try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    print("spaCy model not found. Ensure you ran: python -m spacy download en_core_web_sm")
    nlp = None

def extract_skills_from_jd(job_description: str) -> list[str]:
    """
    Dynamically extracts Named Entities (skills, tech, certifications) and 
    Noun Phrases from the Job Description text.
    """
    if not nlp:
        return []
        
    # Clean up bullets, special characters, and excessive whitespace
    import re
    cleaned_jd = re.sub(r'[•·\*\-]', ' ', job_description)
    cleaned_jd = re.sub(r'\s+', ' ', cleaned_jd).strip()
        
    doc = nlp(cleaned_jd)
    
    keywords = set()
    
    # 1. Extract proper nouns and specific entities (ORG, PRODUCT, GPE)
    for ent in doc.ents:
        # Filter out numbers/dates/times, keep entities that look like skills/tools
        if ent.label_ not in ['DATE', 'TIME', 'MONEY', 'QUANTITY', 'ORDINAL', 'CARDINAL', 'PERCENT']:
            keywords.add(ent.text.lower().strip())
            
    # 2. Extract specific Noun Phrases (like "machine learning", "data analysis")
    for chunk in doc.noun_chunks:
        text = chunk.text.lower().strip()
        # Clean up determiners (a, an, the)
        words = text.split()
        if words[0] in ['a', 'an', 'the', 'some', 'any']:
            text = " ".join(words[1:])
        if len(text) > 2:
            keywords.add(text)
            
    # Filter out common stop words that spaCy might have grabbed
    stop_words = {'experience', 'years', 'job', 'role', 'team', 'company', 'work', 'skills', 'ability', 
                 'knowledge', 'understanding', 'candidate', 'requirements', 'qualifications', 'degree', 
                 'bachelor', 'master', 'time', 'environment', 'business', 'process', 'project', 'support', 
                 'development', 'management', 'design', 'testing', 'system', 'application', 'data', 'user'}
                 
    filtered_keywords = [
        k for k in keywords 
        if k not in stop_words 
        and len(k) > 2 
        and not k.isnumeric()
    ]
    
    # Sort by length (longest phrases first) to prioritize specific skills over generic single words
    return sorted(list(set(filtered_keywords)), key=len, reverse=True)[:30]
