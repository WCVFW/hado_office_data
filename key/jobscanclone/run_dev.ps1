# run_dev.ps1

Write-Host "Starting Ollama AI Server..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-Command", "ollama serve" -NoNewWindow

Write-Host "Starting FastAPI Backend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-Command", "cd backend; if (-not (Test-Path .env)) { Copy-Item .env.example .env }; pip install -r requirements.txt; uvicorn main:app --reload --port 8888" -NoNewWindow

Write-Host "Starting Next.js Frontend..." -ForegroundColor Green
npm run dev

