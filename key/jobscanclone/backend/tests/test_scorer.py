import pytest
from app.services.scorer import ATSScorer

def test_scorer_deterministic():
    scorer = ATSScorer()
    mock_match_results = {
        'skills_analysis': [{ 'skill': 'Python', 'category': 'Programming Languages', 'importance': 'required', 'match_status': 'matched' }],
        'experience_analysis': {'status': 'matched', 'required_years': 2, 'actual_years': 3},
        'title_analysis': {'similarity': 1.0},
        'responsibility_analysis': [{'confidence': 1.0}],
        'formatting_analysis': {'score': 10}
    }
    score_res = scorer.calculate_score(mock_match_results, 'Python Python')
    assert score_res['overall_score'] == 100
    assert score_res['level'] == 'Excellent Match'

def test_keyword_stuffing():
    scorer = ATSScorer()
    res = scorer.detect_keyword_stuffing('python python python python python python', ['Python'])
    assert res['penalty'] == 1
