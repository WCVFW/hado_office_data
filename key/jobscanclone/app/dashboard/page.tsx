"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [resumes, setResumes] = useState<any[]>([]);
  const [selectedResume, setSelectedResume] = useState('');
  const [jobContent, setJobContent] = useState('');
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch resumes
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:8000/api/resumes', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => setResumes(data))
      .catch(err => console.error(err));
    }
  }, []);

  const handleScan = async () => {
    if (!selectedResume || !jobContent) {
      setError("Please select a resume and paste a job description.");
      return;
    }
    setError("");
    setStep(2);
    const token = localStorage.getItem('token');
    
    try {
      // 1. Create Job
      setStatus("Analyzing Job Description...");
      const jobRes = await fetch('http://localhost:8000/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ title: "New Scan Job", content: jobContent })
      });
      const jobData = await jobRes.json();
      const jobId = jobData.id;

      // 2. Parse Resume
      setStatus("Extracting Resume Data...");
      await fetch(`http://localhost:8000/api/resumes/${selectedResume}/parse`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // 3. Parse Job
      setStatus("Matching Skills...");
      await fetch(`http://localhost:8000/api/jobs/${jobId}/parse`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // 4. Run Scan
      setStatus("Calculating ATS Score...");
      const scanRes = await fetch('http://localhost:8000/api/scans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ resume_id: parseInt(selectedResume), job_id: jobId })
      });
      
      const scanData = await scanRes.json();
      
      setResults(scanData);
      setStep(3);
      
    } catch (err) {
      console.error(err);
      setError("An error occurred during scanning. Please try again.");
      setStep(1);
    }
  };

  const getStatusColor = (status: string) => {
    if (status === 'matched') return 'text-green-600 bg-green-100';
    if (status === 'partial') return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">ATS Scanner</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {step === 1 && (
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6 border border-gray-100">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">1. Select Resume</label>
            <select 
              className="w-full border rounded-lg p-3 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={selectedResume}
              onChange={(e) => setSelectedResume(e.target.value)}
            >
              <option value="">-- Choose a Resume --</option>
              {resumes.map(r => (
                <option key={r.id} value={r.id}>{r.title} ({r.file_path})</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">2. Paste Job Description</label>
            <textarea 
              className="w-full border rounded-lg p-3 h-48 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Paste the full job description here..."
              value={jobContent}
              onChange={(e) => setJobContent(e.target.value)}
            />
          </div>
          
          <button 
            onClick={handleScan}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Scan Resume
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center border border-gray-100">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-6"></div>
          <h2 className="text-2xl font-semibold text-gray-800">{status}</h2>
          <p className="text-gray-500 mt-2">This may take a few moments...</p>
        </div>
      )}

      {step === 3 && results && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 text-center">
            <h2 className="text-xl text-gray-500 font-semibold mb-2">Overall Match Score</h2>
            <div className="text-6xl font-black text-blue-600 mb-4">{results.match_rate}</div>
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
              {results.results_json.level}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold border-b pb-2 mb-4 text-gray-800">Score Breakdown</h3>
              <ul className="space-y-3">
                {Object.entries(results.results_json.breakdown).map(([key, val]: [string, any]) => (
                  <li key={key} className="flex justify-between items-center text-gray-700">
                    <span className="capitalize">{key.replace('_', ' ')}</span>
                    <span className="font-semibold text-gray-900">{val} pts</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold border-b pb-2 mb-4 text-gray-800">Missing Keywords (Priority)</h3>
              <div className="space-y-2">
                {results.results_json.missing_keywords_prioritized?.map((kw: any, i: number) => (
                  <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="font-medium text-gray-800">{kw.skill}</span>
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${
                      kw.priority === 'HIGH PRIORITY' ? 'bg-red-100 text-red-700' :
                      kw.priority === 'MEDIUM PRIORITY' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {kw.priority}
                    </span>
                  </div>
                ))}
                {results.results_json.missing_keywords_prioritized?.length === 0 && (
                  <p className="text-gray-500 text-sm">No missing keywords found! Great job.</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold border-b pb-2 mb-4 text-gray-800">Skills Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.results_json.skills_analysis?.map((skill: any, i: number) => (
                  <div key={i} className="border rounded p-3 bg-gray-50">
                    <div className="font-semibold text-gray-800">{skill.skill}</div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-500">{skill.category}</span>
                      <span className={`px-2 py-0.5 rounded font-medium ${getStatusColor(skill.match_status)}`}>
                        {skill.match_status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="text-center space-x-4">
            <button 
              onClick={() => setStep(1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-all"
            >
              Start New Scan
            </button>
            <button 
              onClick={() => window.print()}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow"
            >
              Download PDF Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
