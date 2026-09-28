import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const resumeFile = formData.get("resumeFile");
    const resumeText = formData.get("resumeText");
    const jobDescription = formData.get("jobDescription");

    if (!jobDescription || (!resumeFile && !resumeText)) {
      return NextResponse.json(
        { error: "Resume (file or text) and Job Description are required" },
        { status: 400 }
      );
    }

    // Call the FastAPI Python backend
    const backendUrl = process.env.FASTAPI_URL || "http://127.0.0.1:8888";
    
    // Create new FormData for backend
    const backendFormData = new FormData();
    if (resumeFile) backendFormData.append("resume_file", resumeFile);
    if (resumeText) backendFormData.append("resume_text", resumeText);
    backendFormData.append("job_description", jobDescription);
    
    const response = await fetch(`${backendUrl}/api/scans/direct_file`, {
      method: "POST",
      body: backendFormData,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("FastAPI Error:", errorData);
      return NextResponse.json(
        { error: "FastAPI Backend Error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to process scanning through the backend." },
      { status: 500 }
    );
  }
}

