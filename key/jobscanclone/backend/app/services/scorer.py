from typing import Dict, Any, List
from app.services.formatter import ATSFormatter

class ATSScorer:
    def __init__(self):
        self.weights = {
            "hard_skills": 30,
            "experience": 15,
            "job_title": 10,
            "responsibilities": 15,
            "education": 5,
            "soft_skills": 5,
            "keywords": 10,
            "formatting": 10
        }
        self.formatter = ATSFormatter()

    def get_score_level(self, score: int) -> str:
        if score >= 90: return "Excellent Match"
        if score >= 75: return "Strong Match"
        if score >= 60: return "Moderate Match"
        if score >= 40: return "Needs Improvement"
        return "Low Match"
        
    def detect_keyword_stuffing(self, raw_resume_text: str, keywords: List[str]) -> Dict[str, Any]:
        raw_text_lower = raw_resume_text.lower()
        stuffed = []
        penalty = 0
        
        for kw in keywords:
            kw_lower = kw.lower()
            count = raw_text_lower.count(kw_lower)
            if count > 5:
                stuffed.append({"keyword": kw, "count": count})
                penalty += 1 # -1 point per stuffed keyword, up to max -5
                
        return {
            "stuffed_keywords": stuffed,
            "penalty": min(penalty, 5)
        }
        
    def categorize_missing_keywords(self, missing_skills: List[dict]) -> List[dict]:
        categorized = []
        for s in missing_skills:
            if s["importance"] == "required" and s["category"] != "Soft Skills":
                priority = "HIGH PRIORITY"
            elif s["importance"] == "required" and s["category"] == "Soft Skills":
                priority = "MEDIUM PRIORITY"
            else:
                priority = "LOW PRIORITY"
                
            categorized.append({
                "skill": s["skill"],
                "category": s["category"],
                "importance": s["importance"],
                "priority": priority
            })
        # Sort HIGH -> MEDIUM -> LOW
        priority_map = {"HIGH PRIORITY": 0, "MEDIUM PRIORITY": 1, "LOW PRIORITY": 2}
        return sorted(categorized, key=lambda x: priority_map.get(x["priority"], 3))

    def calculate_score(self, match_results: dict, raw_resume_text: str = "") -> dict:
        scores = {}
        
        # 1. Hard Skills (30)
        skills = match_results.get("skills_analysis", [])
        hard_skills = [s for s in skills if s["category"] != "Soft Skills" and s["importance"] == "required"]
        if not hard_skills:
            scores["hard_skills"] = self.weights["hard_skills"]
        else:
            matched_hard = sum(1 for s in hard_skills if s["match_status"] == "matched")
            partial_hard = sum(1 for s in hard_skills if s["match_status"] == "partial")
            ratio = (matched_hard + (partial_hard * 0.5)) / len(hard_skills)
            scores["hard_skills"] = round(ratio * self.weights["hard_skills"])
            
        # 2. Soft Skills (5)
        soft_skills = [s for s in skills if s["category"] == "Soft Skills" and s["importance"] == "required"]
        if not soft_skills:
            scores["soft_skills"] = self.weights["soft_skills"]
        else:
            matched_soft = sum(1 for s in soft_skills if s["match_status"] == "matched")
            ratio = matched_soft / len(soft_skills)
            scores["soft_skills"] = round(ratio * self.weights["soft_skills"])
            
        # 3. Experience (15)
        exp = match_results.get("experience_analysis", {})
        if exp.get("status") == "matched":
            scores["experience"] = self.weights["experience"]
        elif exp.get("status") == "partial":
            req = exp.get("required_years", 1)
            act = exp.get("actual_years", 0)
            ratio = (act / req) if req > 0 else 0
            scores["experience"] = round(ratio * self.weights["experience"])
        else:
            scores["experience"] = 0
            
        # 4. Job Title (10)
        title = match_results.get("title_analysis", {})
        scores["job_title"] = round(title.get("similarity", 0) * self.weights["job_title"])
        
        # 5. Responsibilities (15)
        resps = match_results.get("responsibility_analysis", [])
        if not resps:
            scores["responsibilities"] = self.weights["responsibilities"]
        else:
            avg_conf = sum(r.get("confidence", 0) for r in resps) / len(resps)
            scores["responsibilities"] = round(avg_conf * self.weights["responsibilities"])
            
        # 6. Education (5) - Dummy implementation for MVP
        scores["education"] = self.weights["education"] # Assume matched for now
        
        # 7. Keywords & Stuffing (10)
        # We give 10 points for having 100% of preferred keywords, scaled. 
        pref_skills = [s for s in skills if s["importance"] == "preferred"]
        kw_score = self.weights["keywords"]
        if pref_skills:
            matched_pref = sum(1 for s in pref_skills if s["match_status"] == "matched")
            kw_score = round((matched_pref / len(pref_skills)) * self.weights["keywords"])
            
        # Stuffing penalty
        stuffing_check = self.detect_keyword_stuffing(raw_resume_text, [s["skill"] for s in skills])
        scores["keywords"] = max(0, kw_score - stuffing_check["penalty"])
        
        # 8. ATS Formatting (10)
        # For this we mock a perfect score unless the formatter says otherwise.
        fmt = match_results.get("formatting_analysis", {"score": 10})
        scores["formatting"] = fmt.get("score", 10)
        
        # Total
        total_score = sum(scores.values())
        
        return {
            "overall_score": total_score,
            "level": self.get_score_level(total_score),
            "breakdown": scores,
            "max_weights": self.weights,
            "missing_keywords_prioritized": self.categorize_missing_keywords(match_results.get("missing_skills", [])),
            "stuffing_analysis": stuffing_check
        }
