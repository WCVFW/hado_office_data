@echo off
:: Check for Admin rights
net session >nul 2>&1
if %errorLevel% == 0 (
    goto :RunScript
) else (
    echo Requesting Administrator rights...
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit
)

:RunScript
cd /d "%~dp0"
echo Starting Calzone VPN Fixer (As Admin)...
PowerShell.exe -NoProfile -ExecutionPolicy Bypass -File ".\Fix_VPN_Client.ps1"
echo.
echo DONE! You can close this window.
pause