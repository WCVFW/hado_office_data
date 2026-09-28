import fitz  # PyMuPDF
import docx
import pytesseract
from pdf2image import convert_from_bytes
import io

def parse_pdf(file_bytes: bytes) -> str:
    """Extracts text from a PDF file using PyMuPDF. Falls back to OCR if text is sparse."""
    text = ""
    pdf_document = fitz.open(stream=file_bytes, filetype="pdf")
    
    for page in pdf_document:
        text += page.get_text("text", sort=True) + "\n"
        
    pdf_document.close()
    
    # If the PDF is essentially a scanned image, the extracted text will be very short
    if len(text.split()) < 50:
        text = extract_ocr(file_bytes)
        
    return text.strip()

def parse_docx(file_bytes: bytes) -> str:
    """Extracts text from a Word document."""
    doc = docx.Document(io.BytesIO(file_bytes))
    return "\n".join([paragraph.text for paragraph in doc.paragraphs])

def extract_ocr(file_bytes: bytes) -> str:
    """Uses Tesseract OCR to extract text from a scanned PDF."""
    try:
        images = convert_from_bytes(file_bytes)
        ocr_text = ""
        for img in images:
            ocr_text += pytesseract.image_to_string(img) + "\n"
        return ocr_text
    except Exception as e:
        print(f"OCR Failed (Ensure Tesseract is installed on Windows): {e}")
        return ""

def parse_document(filename: str, file_bytes: bytes) -> str:
    """Entry point to parse uploaded resume files."""
    if filename.lower().endswith(".pdf"):
        return parse_pdf(file_bytes)
    elif filename.lower().endswith(".docx"):
        return parse_docx(file_bytes)
    else:
        # Fallback for plain text or unsupported formats (just decode as utf-8 if possible)
        try:
            return file_bytes.decode('utf-8')
        except:
            return ""

def extract_text_from_file(file_path: str) -> str:
    """Reads a file path and returns text, for compatibility with resumes.py"""
    with open(file_path, 'rb') as f:
        return parse_document(file_path, f.read())

def parse_resume_text(text: str) -> dict:
    """Fallback parser returning dummy sections to satisfy old resumes.py DB schema"""
    return {
        "summary": text[:500],
        "skills": [],
        "experience": [],
        "education": [],
        "raw_text": text
    }

def parse_job_text(text: str) -> str:
    """Fallback parser returning dummy text to satisfy old jobs.py DB schema"""
    return text
