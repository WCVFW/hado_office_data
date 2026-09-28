from typing import List, Dict, Any
import re

class ATSFormatter:
    def __init__(self):
        self.max_score = 10

    def check_formatting(self, raw_text: str, parsed_resume: dict) -> Dict[str, Any]:
        issues = []
        score = self.max_score
        
        # 1. Contact Info
        has_email = bool(re.search(r'[\w\.-]+@[\w\.-]+', raw_text))
        has_phone = bool(re.search(r'\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}', raw_text))
        
        if not has_email or not has_phone:
            issues.append({
                "issue": "Missing Contact Information",
                "severity": "high",
                "description": "ATS systems require easily parseable email and phone numbers.",
                "recommendation": "Ensure your phone and email are plainly typed at the top of the resume."
            })
            score -= 3

        # 2. Tables & Columns (Heuristic based on spacing and newlines)
        if "   " in raw_text or "\t" in raw_text:
            lines = raw_text.split('\n')
            column_like_lines = sum(1 for line in lines if len(re.findall(r'\s{3,}', line)) > 1)
            
            if column_like_lines > 3:
                issues.append({
                    "issue": "Multi-column Layout Detected",
                    "severity": "medium",
                    "description": "Multi-column layouts or tables often break legacy ATS parsers, mixing up text.",
                    "recommendation": "Use a single-column, top-to-bottom layout without tables."
                })
                score -= 2
                
        # 3. Missing Sections
        sections = [k.lower() for k in parsed_resume.keys()]
        if not parsed_resume.get("experience"):
            issues.append({
                "issue": "Missing Work Experience Section",
                "severity": "high",
                "description": "No definitive work experience section was found.",
                "recommendation": "Use standard headers like 'Work Experience' or 'Professional Experience'."
            })
            score -= 3
            
        if not parsed_resume.get("education"):
            issues.append({
                "issue": "Missing Education Section",
                "severity": "medium",
                "description": "No definitive education section was found.",
                "recommendation": "Use a standard 'Education' header."
            })
            score -= 2

        # 4. Weird formatting / Icons (Checking for non-ascii characters)
        non_ascii = len(re.findall(r'[^\x00-\x7F]', raw_text))
        if non_ascii > 10:
            issues.append({
                "issue": "Unusual Characters/Icons",
                "severity": "low",
                "description": "Excessive non-standard characters (like icons or graphics) were detected.",
                "recommendation": "Remove graphic icons (like phone/mail symbols) as ATS cannot read them."
            })
            score -= 1

        return {
            "score": max(0, score),
            "max_score": self.max_score,
            "issues": issues
        }
