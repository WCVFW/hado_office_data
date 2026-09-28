Clear-Host
$logo = @"
   ______      __                     
  / ____/___ _/ /___  ____  ____  ___ 
 / /   / __ `/ /_  / / __ \/ __ \/ _ \
/ /___/ /_/ / / / /_/ /_/ / / / /  __/
\____/\__,_/_/ /___/\____/_/ /_/\___/ 
                                      
"@
Write-Host $logo -ForegroundColor Cyan
Write-Host "     CALZONE OFFICE VPN FIXER v2.0" -ForegroundColor Yellow
Write-Host "---------------------------------------------------" -ForegroundColor Gray
write-host ""

# 1. Cleanup Old Certificates & Install New One
$certPath = "$PSScriptRoot\VPN_Public_Cert.cer"
$targetSubject = "115.97.59.230"

write-host "Checking for old certificates..." -ForegroundColor Yellow
$oldCerts = Get-ChildItem -Path Cert:\LocalMachine\Root | Where-Object { $_.Subject -like "*$targetSubject*" }
if ($oldCerts) {
    write-host "Found $($oldCerts.Count) old certificate(s). Removing..." -ForegroundColor Yellow
    $oldCerts | ForEach-Object {
        $_.PSObject.TypeNames.Insert(0, "System.Security.Cryptography.X509Certificates.X509Certificate2")
        Remove-Item -Path "Cert:\LocalMachine\Root\$($_.Thumbprint)" -Force -ErrorAction SilentlyContinue
    }
    write-host "Old certificates removed." -ForegroundColor Green
}

if (Test-Path $certPath) {
    write-host "Installing NEW certificate..." -ForegroundColor Yellow
    try {
        Import-Certificate -FilePath $certPath -CertStoreLocation Cert:\LocalMachine\Root -Verbose | Out-Null
        write-host "SUCCESS: New Certificate Installed." -ForegroundColor Green
    } catch {
        write-host "ERROR: Could not install certificate. Run as Admin!" -ForegroundColor Red
        write-host $_.Exception.Message
    }
} else {
    write-host "WARNING: 'VPN_Public_Cert.cer' not found in this folder." -ForegroundColor Red
    write-host "Please put the .cer file next to this script." -ForegroundColor Red
}

write-host ""

# 2. Registry Fix
write-host "Applying Registry Fix for SSTP..." -ForegroundColor Yellow
$regPath = "HKLM:\System\CurrentControlSet\Services\SstpSvc\Parameters"
try {
    if (-not (Test-Path $regPath)) { New-Item -Path $regPath -Force | Out-Null }
    New-ItemProperty -Path $regPath -Name "NoCertRevocationCheck" -Value 1 -PropertyType DWORD -Force | Out-Null
    write-host "SUCCESS: Registry Fix Applied." -ForegroundColor Green
} catch {
    write-host "ERROR: Could not write to Registry. Run as Administrator!" -ForegroundColor Red
}

write-host ""
write-host "---------------------------------------------------" -ForegroundColor Cyan
write-host "DONE! Please RESTART your computer and try connecting." -ForegroundColor Cyan
write-host "Press Enter to exit..." 
Read-Host