# build_exe.ps1

Write-Host "Building Next.js frontend..."
npm run build

Write-Host "Installing PyWebView & PyInstaller..."
cd backend
pip install pywebview pyinstaller email-validator

Write-Host "Building EXE with PyInstaller..."
# We need to tell PyInstaller to include the 'out' directory which contains the NextJS export
pyinstaller --name "ATS_Scanner" --windowed --add-data "../out;out" --hidden-import "passlib.handlers.bcrypt" --hidden-import "email_validator" desktop.py

Write-Host "Build complete! Check backend/dist/ATS_Scanner/ATS_Scanner.exe"
