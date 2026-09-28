"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [isPastingResume, setIsPastingResume] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isRescanMode, setIsRescanMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result;
        if (typeof text === "string") {
          setResume(text);
        }
      };
      reader.readAsText(file);
    }
  };
  const [activeTab, setActiveTab] = useState("resume");
  const [scanHistory, setScanHistory] = useState<any[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [results, setResults] = useState<{
    matchRate: number;
    experience?: { requiredYears: number; actualYears: number; status: 'pass' | 'fail' | 'warn' };
    parsing?: { contactInfo: boolean; education: boolean; experience: boolean };
    searchability: { name: string; status: 'pass' | 'fail' | 'warn'; message: string }[];
    hardSkills: { skill: string; resumeCount: number; jdCount: number }[];
    softSkills: { skill: string; resumeCount: number; jdCount: number }[];
    recruiterTips: { name: string; status: 'pass' | 'fail' | 'warn'; message: string }[];
    formatting: { name: string; status: 'pass' | 'fail' | 'warn'; message: string }[];
  } | null>(null);

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem('jobscan_history');
    if (saved) {
      try {
        setScanHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history JSON");
      }
    }
  }, []);

  const getFailCount = (arr: any[] = []) => arr ? arr.filter(i => i.status === 'fail').length : 0;
  const getSkillScore = (arr: any[] = []) => arr && arr.length > 0 ? Math.round((arr.filter(s => s.resumeCount > 0).length / arr.length) * 100) : 0;
  
  const categories = [
    { name: "Searchability", score: results && results.searchability ? Math.round((results.searchability.filter(i => i.status === 'pass').length / results.searchability.length) * 100) : 0, max: 100, issues: results ? `${getFailCount(results.searchability)} issue(s) to fix` : "" },
    { name: "Hard Skills", score: results ? getSkillScore(results.hardSkills) : 0, max: 100, issues: results ? `${results.hardSkills?.filter(s => s.resumeCount === 0).length || 0} missing` : "" },
    { name: "Soft Skills", score: results ? getSkillScore(results.softSkills) : 0, max: 100, issues: results ? `${results.softSkills?.filter(s => s.resumeCount === 0).length || 0} missing` : "" },
    { name: "Recruiter Tips", score: results && results.recruiterTips ? Math.round((results.recruiterTips.filter(i => i.status === 'pass').length / results.recruiterTips.length) * 100) : 0, max: 100, issues: results ? `${getFailCount(results.recruiterTips)} issue(s) to fix` : "" },
    { name: "Formatting", score: results && results.formatting ? Math.round((results.formatting.filter(i => i.status === 'pass').length / results.formatting.length) * 100) : 0, max: 100, issues: results ? `${getFailCount(results.formatting)} issue(s) to fix` : "" },
  ];

  const handleScan = async () => {
    // If not pasting and no file, or if pasting and no text, don't scan
    if (!jobDescription) return;
    if (isPastingResume && !resume) return;
    if (!isPastingResume && !fileInputRef.current?.files?.[0]) return;
    
    setIsScanning(true);
    
    try {
      const formData = new FormData();
      formData.append("jobDescription", jobDescription);
      
      if (isPastingResume) {
        formData.append("resumeText", resume);
      } else {
        const file = fileInputRef.current?.files?.[0];
        if (file) {
          formData.append("resumeFile", file);
        }
      }

      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.error || !data.searchability) {
        alert("Scan failed: " + (data.error || "The AI returned an invalid format. Please try again."));
        return;
      }
      
      // Save to History
      const newScan = {
        id: Date.now(),
        date: new Date().toISOString(),
        matchRate: data.matchRate,
        results: data,
        resume: isPastingResume ? resume : (uploadedFileName || "Uploaded File"),
        jobDescription
      };
      const updatedHistory = [newScan, ...scanHistory];
      setScanHistory(updatedHistory);
      localStorage.setItem('jobscan_history', JSON.stringify(updatedHistory));

      setResults(data);
      setHasScanned(true);
      setShowScanModal(false); // Close the modal upon success
    } catch (error) {
      console.error("Failed to scan:", error);
      alert("Failed to connect to the scanning service. Check your console.");
    } finally {
      setIsScanning(false);
    }
  };

  const openNewScan = (isRescan: boolean = false) => {
    setIsRescanMode(isRescan);
    setResume("");
    setUploadedFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    
    if (!isRescan) {
      setJobDescription("");
    }
    
    setShowScanModal(true);
  };

  // Nav Items Data
  const navItems = [
    { name: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "AI Optimize", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "AI Cover Letter", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: "Linkedin Scan", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
    { name: "Auto Apply", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Job Tracker", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
    { name: "Find Jobs", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: "Resume Builder", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
    { name: "Resume Manager", icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" },
    { name: "Scan History", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col relative">
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      
      {/* Scan Modal Overlay */}
      {showScanModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-opacity-40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{isRescanMode ? "Upload & Rescan" : "New Scan"}</h2>
              <button 
                onClick={() => setShowScanModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-gray-100 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-8 pb-6">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                
                {/* Column 1: Resume */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-[15px] font-semibold text-gray-700">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">1</span>
                      Upload a resume
                    </div>
                    <button className="text-gray-500 text-[13px] font-medium flex items-center hover:text-gray-700 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Saved Resumes
                    </button>
                  </div>
                  
                  {!isPastingResume ? (
                    <>
                      <div 
                        className={`border ${uploadedFileName ? 'border-transparent bg-[#f8fafc]' : 'border-dashed border-blue-400 bg-white hover:bg-blue-50/50 cursor-pointer'} rounded-xl flex flex-col items-center justify-center h-[340px] relative transition`}
                        onClick={() => !uploadedFileName && fileInputRef.current?.click()}
                      >
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="hidden" 
                          accept=".pdf,.docx,.txt"
                          onChange={handleFileUpload}
                        />
                        {uploadedFileName ? (
                          <>
                            <div className="flex items-center gap-2 text-[17px] font-semibold text-gray-700">
                              <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {uploadedFileName}
                            </div>
                            <button 
                              onClick={(e) => { e.stopPropagation(); setUploadedFileName(null); setResume(""); if(fileInputRef.current) fileInputRef.current.value = ""; }}
                              className="absolute bottom-4 right-4 px-4 py-1.5 bg-white border border-gray-200 text-gray-600 font-semibold text-sm rounded hover:bg-gray-50 transition shadow-sm"
                            >
                              Clear
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="mb-4 relative">
                              <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48 16L32 0H8C3.58172 0 0 3.58172 0 8V48C0 52.4183 3.58172 56 8 56H40C44.4183 56 48 52.4183 48 48V16Z" fill="#D3E4F9"/>
                                <path d="M32 0L48 16H32V0Z" fill="#A5C6F0"/>
                                <rect x="8" y="18" width="20" height="4" rx="2" fill="white"/>
                                <rect x="8" y="26" width="32" height="4" rx="2" fill="white"/>
                                <rect x="8" y="34" width="24" height="4" rx="2" fill="white"/>
                              </svg>
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-gray-600 text-[15px] mb-1 font-medium">
                              Drag & Drop or <span className="text-blue-600 cursor-pointer hover:underline">Upload Your Resume</span>
                            </p>
                            <p className="text-gray-400 text-[13px]">
                              as .pdf or .docx file, or use a Saved Resume
                            </p>
                          </>
                        )}
                      </div>
                      {/* <div className="text-center mt-4">
                        <button 
                          onClick={() => setIsPastingResume(true)}
                          className="text-blue-600 font-semibold text-[14px] hover:underline"
                        >
                          paste resume text
                        </button>
                      </div> */}
                    </>
                  ) : (
                    <>
                      <textarea
                        className="w-full h-[340px] p-5 border border-gray-200 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none font-sans text-sm text-gray-700 shadow-sm"
                        placeholder="Paste your resume text here..."
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                      />
                      <div className="text-center mt-4">
                        <button 
                          onClick={() => setIsPastingResume(false)}
                          className="text-blue-600 font-semibold text-[14px] hover:underline"
                        >
                          upload resume file
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Column 2: Job Description */}
                <div>
                  <div className="flex items-center text-[15px] font-semibold text-gray-700 mb-4">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">2</span>
                    Paste a job description
                  </div>
                  <textarea
                    className="w-full h-[340px] p-5 border border-gray-200 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none font-sans text-sm text-gray-500 placeholder-gray-400 shadow-sm"
                    placeholder="Copy and paste job description here. Aim to exclude: Benefits, Perks, and Legal Disclaimers"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="flex flex-col items-end mt-4 border-t border-gray-50 pt-4">
                <button
                  onClick={handleScan}
                  disabled={!resume || !jobDescription || isScanning}
                  className={`px-8 py-2.5 rounded-md font-bold text-[14px] transition-all flex items-center justify-center gap-2 min-w-[140px] ${
                    (!resume || !jobDescription || isScanning) 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                  }`}
                >
                  {isScanning ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : "Scan"}
                </button>
                {isScanning && (
                  <p className="text-xs text-gray-400 mt-2">Deep AI analysis may take 10-15 seconds.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* History Modal Overlay */}
      {showHistoryModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Scan History
              </h2>
              <button 
                onClick={() => setShowHistoryModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-gray-100 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              {scanHistory.length === 0 ? (
                <div className="text-center text-gray-500 py-10">
                  No scan history available yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {scanHistory.map((scan) => (
                    <div key={scan.id} className="border border-gray-200 p-5 rounded-xl flex justify-between items-center hover:border-blue-300 transition">
                      <div>
                        <div className="font-bold text-gray-800 text-lg mb-1">{scan.matchRate}% Match Rate</div>
                        <div className="text-sm text-gray-500">{new Date(scan.date).toLocaleString()}</div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            setResults(scan.results);
                            setResume(scan.resume || "");
                            setJobDescription(scan.jobDescription || "");
                            setHasScanned(true);
                            setShowHistoryModal(false);
                          }}
                          className="px-5 py-2 bg-blue-50 text-blue-600 font-bold rounded hover:bg-blue-100 transition"
                        >
                          Restore
                        </button>
                        <button 
                          onClick={() => {
                            const updatedHistory = scanHistory.filter(s => s.id !== scan.id);
                            setScanHistory(updatedHistory);
                            localStorage.setItem('jobscan_history', JSON.stringify(updatedHistory));
                          }}
                          className="px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition"
                          title="Delete from history"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Top Bar */}
      <header className="bg-white border-b border-gray-200 h-16 flex justify-between items-center px-4 fixed top-0 w-full z-50">
        <div className="flex items-center gap-4">
          <div className="text-xl font-black text-blue-600 tracking-tight flex items-center gap-2 cursor-pointer" onClick={() => { setHasScanned(false); setShowScanModal(false); }}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg leading-none font-bold">A</span>
            </div>
            ATS
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowHistoryModal(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Scan History
          </button>
          <div className="flex items-center gap-2 cursor-pointer pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 mt-16">
        {/* Global Sidebar (Left) */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block fixed h-[calc(100vh-64px)] top-16 left-0 overflow-y-auto custom-scrollbar z-40 p-4">
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  index === 0 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${index === 0 ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-[calc(100vh-64px)] md:ml-64">
          
          {!hasScanned ? (
            // Empty Dashboard View
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center max-w-lg w-full">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome to ATS</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Start by uploading your resume and pasting a job description. We'll show you exactly what to fix to get past applicant tracking systems.
                </p>
                <button 
                  onClick={() => openNewScan(false)}
                  className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg shadow-sm hover:bg-blue-700 transition w-full flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Start New Scan
                </button>
              </div>
            </div>
          ) : (
            // Match Report View
            <>
              {/* Match Report Top Bar */}
              <div className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center sticky top-16 z-30">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Resume Scan Results</div>
                  <div className="text-xl font-bold flex items-center gap-2 text-gray-800">
                    Resume vs Job Description
                    <button className="text-gray-400 hover:text-blue-600 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Removed Track and Print buttons per user request */}
              </div>

              <div className="flex flex-1 max-w-[1400px] w-full">
                {/* Match Report Sidebar */}
                <aside className="w-80 p-8 border-r border-gray-200 hidden lg:block self-start sticky top-[137px] max-h-[calc(100vh-137px)] overflow-y-auto custom-scrollbar bg-white">
                  <div className="flex flex-col items-center mb-8">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Match Rate</h3>
                    <div className="relative w-40 h-40 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        {/* Background track */}
                        <circle cx="80" cy="80" r="72" stroke="#f0efe9" strokeWidth="12" fill="transparent" />
                        {/* Foreground track */}
                        <circle 
                          cx="80" cy="80" r="72" 
                          stroke={results?.matchRate && results.matchRate > 70 ? "#0ebd84" : "#f59e0b"} 
                          strokeWidth="12" 
                          fill="transparent" 
                          strokeDasharray="452.389" 
                          strokeDashoffset={452.389 - (452.389 * (results?.matchRate || 0)) / 100}
                          className="transition-all duration-1000 ease-out"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute text-4xl font-extrabold text-[#3a444d]">
                        {results?.matchRate ?? 0}<span className="text-xl">%</span>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => openNewScan(true)} className="w-full py-3 bg-[#0070e0] hover:bg-blue-700 text-white font-bold rounded shadow-sm mb-10 transition-colors">
                    Upload & rescan
                  </button>
                  <div className="space-y-6">
                    {categories.map((cat, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2 font-semibold">
                          <span className="text-gray-800">{cat.name}</span>
                          {cat.issues && <span className="text-blue-600">{cat.issues}</span>}
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${cat.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4">
                    <button className="flex items-center gap-2 text-[#0070e0] font-semibold text-[15px] hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      Guide me
                    </button>
                  </div>
                </aside>

                {/* Match Report Content */}
                <main className="flex-1 p-8 lg:p-12 pb-32 max-w-6xl mx-auto w-full">
                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 mb-10 sticky top-[137px] bg-gray-50 z-20 pt-4">
                    <button 
                      className={`px-8 py-4 font-bold text-sm border-b-2 transition-colors ${activeTab === 'resume' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                      onClick={() => setActiveTab('resume')}
                    >
                      Resume Report
                    </button>
                    <button 
                      className={`px-8 py-4 font-bold text-sm border-b-2 transition-colors ${activeTab === 'jd' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                      onClick={() => setActiveTab('jd')}
                    >
                      Job Description
                    </button>
                  </div>

                  {activeTab === 'resume' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                      
                      {/* Left: Main Tables (2 cols) */}
                      <div className="lg:col-span-2 space-y-16">
                      
                      {/* ATS-Specific Tips Banner removed per user request */}

                      {/* --- Helper for Status Icons --- */}
                      {(() => {
                        const StatusIcon = ({ status }: { status: string }) => {
                          if (status === 'pass') {
                            return (
                              <div className="mt-1 text-[#10b981] shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              </div>
                            );
                          } else if (status === 'warn') {
                            return (
                              <div className="mt-1 text-yellow-500 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                              </div>
                            );
                          } else {
                            return (
                              <div className="mt-1 text-red-500 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                              </div>
                            );
                          }
                        };

                        const SkillsTable = ({ title, tag, description, skills }: { title: string, tag: string, description: string, skills: any[] }) => (
                          <section>
                            <div className="mb-6">
                              <div className="flex items-center gap-4 mb-3">
                                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
                                <span className="px-3 py-1 bg-gray-700 text-white text-xs font-bold uppercase rounded-full tracking-wider">{tag}</span>
                              </div>
                              <p className="text-gray-600 text-base leading-relaxed">
                                {description}<br/>
                                <strong className="text-gray-800">Tip:</strong> Match the skills in your resume to the exact spelling in the job description.
                              </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                              <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[500px]">
                                  <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                      <th className="px-6 py-4 font-extrabold text-xs uppercase tracking-wider text-gray-500 w-[60%]">Skill</th>
                                      <th className="px-6 py-4 font-extrabold text-xs uppercase tracking-wider text-gray-500 whitespace-nowrap text-center w-[20%]">Resume</th>
                                      <th className="px-6 py-4 font-extrabold text-xs uppercase tracking-wider text-gray-500 whitespace-nowrap text-center w-[20%]">Job Description</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-100">
                                    {skills && skills.length > 0 ? skills.map((s, idx) => (
                                      <tr key={idx} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-5 text-sm font-semibold text-gray-700 break-words">{s.skill}</td>
                                        <td className="px-6 py-5 text-center font-semibold text-gray-700">{s.resumeCount}</td>
                                        <td className="px-6 py-5 text-center font-semibold text-gray-700">{s.jdCount}</td>
                                      </tr>
                                    )) : (
                                      <tr>
                                        <td colSpan={3} className="px-6 py-10 text-center text-gray-500 font-medium">No skills identified.</td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </section>
                        );

                        return (
                          <>
                            {/* ATS Parsing Results */}
                            {results?.parsing && (
                              <section>
                                <div className="mb-6">
                                  <div className="flex items-center gap-4 mb-3">
                                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">ATS Parsing Results</h2>
                                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded-full tracking-wider">Critical</span>
                                  </div>
                                  <p className="text-gray-600 text-base leading-relaxed">
                                    If an ATS cannot parse these standard fields, your resume may be instantly rejected before a human sees it.
                                  </p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-16">
                                  <table className="w-full text-left border-collapse">
                                    <tbody className="divide-y divide-gray-100">
                                      <tr className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-6 w-16 align-top">
                                          <StatusIcon status={results.parsing.contactInfo ? 'pass' : 'fail'} />
                                        </td>
                                        <td className="pr-6 py-6 align-top">
                                          <h4 className="font-bold text-gray-900 text-base mb-1">Contact Information</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">{results.parsing.contactInfo ? 'Email and phone number successfully extracted.' : 'Missing email or phone number. Fix immediately.'}</p>
                                        </td>
                                      </tr>
                                      <tr className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-6 w-16 align-top">
                                          <StatusIcon status={results.parsing.education ? 'pass' : 'fail'} />
                                        </td>
                                        <td className="pr-6 py-6 align-top">
                                          <h4 className="font-bold text-gray-900 text-base mb-1">Education Section</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">{results.parsing.education ? 'Education history successfully parsed.' : 'Could not detect an Education section.'}</p>
                                        </td>
                                      </tr>
                                      <tr className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-6 w-16 align-top">
                                          <StatusIcon status={results.parsing.experience ? 'pass' : 'fail'} />
                                        </td>
                                        <td className="pr-6 py-6 align-top">
                                          <h4 className="font-bold text-gray-900 text-base mb-1">Work Experience Section</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">{results.parsing.experience ? 'Work history successfully parsed.' : 'Could not detect a Work Experience section.'}</p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </section>
                            )}

                            {/* Experience Match */}
                            {results?.experience && (
                              <section>
                                <div className="mb-6">
                                  <div className="flex items-center gap-4 mb-3">
                                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Experience Match</h2>
                                    <span className="px-3 py-1 bg-gray-700 text-white text-xs font-bold uppercase rounded-full tracking-wider">High Impact</span>
                                  </div>
                                  <p className="text-gray-600 text-base leading-relaxed">
                                    ATS algorithms compare the total years of experience on your resume against the minimum required in the job description.
                                  </p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-8 flex items-center justify-around mb-16">
                                  <div className="text-center">
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Required Experience</div>
                                    <div className="text-4xl font-extrabold text-gray-900">{results.experience.requiredYears} <span className="text-xl text-gray-500">years</span></div>
                                  </div>
                                  <div className="text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Your Experience</div>
                                    <div className={`text-4xl font-extrabold ${results.experience.status === 'pass' ? 'text-green-600' : 'text-red-600'}`}>{results.experience.actualYears} <span className="text-xl text-gray-500">years</span></div>
                                  </div>
                                </div>
                              </section>
                            )}
                            {/* Searchability Section */}
                            <section>
                              <div className="mb-6">
                                <div className="flex items-center gap-4 mb-3">
                                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Searchability</h2>
                                  <span className="px-3 py-1 bg-gray-700 text-white text-xs font-bold uppercase rounded-full tracking-wider">Important</span>
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed">
                                  An ATS (Applicant Tracking System) is a software used by 90% of companies and recruiters to search for resumes and manage the hiring process. Below is how well your resume appears in an ATS and a recruiter search.<br/>
                                  <strong className="text-gray-800">Tip:</strong> Fix the red Xs to ensure your resume is easily searchable by recruiters and parsed correctly by the ATS.
                                </p>
                              </div>
                              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                  <tbody className="divide-y divide-gray-100">
                                    {results?.searchability?.map((item, idx) => (
                                      <tr key={idx} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-6 w-16 align-top">
                                          <StatusIcon status={item.status} />
                                        </td>
                                        <td className="pr-6 py-6 align-top">
                                          <h4 className="font-bold text-gray-900 text-base mb-1">{item.name}</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">{item.message}</p>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </section>

                            <SkillsTable 
                              title="Hard skills" 
                              tag="High Score Impact" 
                              description="Hard skills enable you to perform job-specific duties and responsibilities. You can learn hard skills in the classroom, training courses, and on the job. These skills are typically focused on teachable tasks and measurable abilities." 
                              skills={results?.hardSkills || []} 
                            />

                            <SkillsTable 
                              title="Soft skills" 
                              tag="Medium Score Impact" 
                              description="Soft skills are your traits and abilities that are not unique to any job. Your soft skills are part of your personality, and can be learned also. These skills are the traits that typically make you a good employee for any company such as time management and communication." 
                              skills={results?.softSkills || []} 
                            />

                            {/* Recruiter Tips Section */}
                            <section>
                              <div className="mb-6">
                                <div className="flex items-center gap-4 mb-3">
                                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Recruiter tips</h2>
                                  <span className="px-3 py-1 bg-gray-700 text-white text-xs font-bold uppercase rounded-full tracking-wider">Important</span>
                                </div>
                              </div>
                              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                  <tbody className="divide-y divide-gray-100">
                                    {results?.recruiterTips?.map((item, idx) => (
                                      <tr key={idx} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-6 w-16 align-top">
                                          <StatusIcon status={item.status} />
                                        </td>
                                        <td className="pr-6 py-6 align-top">
                                          <h4 className="font-bold text-gray-900 text-base mb-1">{item.name}</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">{item.message}</p>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </section>

                            {/* Formatting Section */}
                            <section>
                              <div className="mb-6">
                                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Formatting</h2>
                              </div>
                              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                  <tbody className="divide-y divide-gray-100">
                                    {results?.formatting?.map((item, idx) => (
                                      <tr key={idx} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-6 w-16 align-top">
                                          <StatusIcon status={item.status} />
                                        </td>
                                        <td className="pr-6 py-6 align-top">
                                          <h4 className="font-bold text-gray-900 text-base mb-1">{item.name}</h4>
                                          <p className="text-sm text-gray-600 leading-relaxed">{item.message}</p>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </section>
                          </>
                        );
                      })()}
                      </div>
                      
                      {/* Right: Action Plan Sidebar (1 col) */}
                      <div className="lg:col-span-1 relative">
                        <aside className="sticky top-[220px] bg-white border border-red-200 rounded-xl shadow-lg overflow-hidden">
                          <div className="bg-red-50 border-b border-red-200 p-5">
                            <h3 className="font-extrabold text-red-700 text-lg flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Action Plan: Missing Skills
                            </h3>
                            <p className="text-sm text-red-600 mt-1 font-medium">Add these to your resume to increase your Match Rate.</p>
                          </div>
                          
                          <div className="p-5 max-h-[50vh] overflow-y-auto custom-scrollbar">
                            {(() => {
                              const missingHard = results?.hardSkills?.filter(s => s.resumeCount === 0) || [];
                              const missingSoft = results?.softSkills?.filter(s => s.resumeCount === 0) || [];
                              
                              if (missingHard.length === 0 && missingSoft.length === 0) {
                                return (
                                  <div className="text-center text-green-600 py-6 font-bold flex flex-col items-center">
                                    <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    You have all the required skills!
                                  </div>
                                );
                              }

                              return (
                                <div className="space-y-6">
                                  {missingHard.length > 0 && (
                                    <div>
                                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Missing Hard Skills</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {missingHard.map((s, idx) => (
                                          <span key={idx} className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-sm font-semibold">
                                            {s.skill}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {missingSoft.length > 0 && (
                                    <div>
                                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Missing Soft Skills</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {missingSoft.map((s, idx) => (
                                          <span key={idx} className="bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full text-sm font-semibold">
                                            {s.skill}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })()}
                          </div>
                        </aside>
                      </div>
                    </div>
                  )}

                  {activeTab === 'jd' && (
                    <div className="bg-[#f0f4f8] -mx-8 -mb-12 px-8 py-10 min-h-screen">
                      <div className="bg-white shadow-md max-w-4xl mx-auto p-12 text-[14px] leading-loose text-gray-700 whitespace-pre-wrap rounded-sm border border-gray-200 font-sans">
                        {(() => {
                          if (!jobDescription) return "No job description provided.";
                          let highlightedText = jobDescription;
                          
                          // Get all skills to highlight and their status
                          const allSkills = [
                            ...(results?.hardSkills || []),
                            ...(results?.softSkills || [])
                          ].filter(s => s && s.skill);
                          
                          if (allSkills.length === 0) {
                            return (
                              <>
                                <h1 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h1>
                                {highlightedText}
                              </>
                            );
                          }
                          
                          // Sort by length descending so we match longer phrases first
                          allSkills.sort((a, b) => b.skill.length - a.skill.length);
                          
                          // Escape regex chars
                          const escapedSkills = allSkills.map(s => s.skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
                          const regex = new RegExp(`(${escapedSkills.join('|')})`, 'gi');
                          
                          // Split by regex and render
                          const parts = highlightedText.split(regex);
                          
                          return (
                            <>
                              <h1 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h1>
                              {parts.map((part, i) => {
                                const matchedSkill = allSkills.find(s => s.skill.toLowerCase() === part.toLowerCase());
                                if (matchedSkill) {
                                  if (matchedSkill.resumeCount > 0) {
                                    // Found in resume -> Green
                                    return <span key={i} className="bg-emerald-100 text-emerald-900 border border-emerald-200 px-1 rounded-sm">{part}</span>;
                                  } else {
                                    // Not in resume -> Red
                                    return <span key={i} className="bg-red-100 text-red-900 border border-red-200 px-1 rounded-sm">{part}</span>;
                                  }
                                }
                                return <span key={i}>{part}</span>;
                              })}
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </main>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
