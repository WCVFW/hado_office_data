import subprocess
import sys
import os

def main():
    print("=======================================================")
    print("    STARTING NIFTY 50 PRO SCANNER (NODE.JS + PYTHON)")
    print("=======================================================")
    print("Press Ctrl+C here to stop both servers at any time.\n")
    
    # Start Python API
    print("[1/2] Starting Python XGBoost Backend Server on Port 5000...")
    api_process = subprocess.Popen([sys.executable, "api.py"])
    
    # Start Node.js Frontend
    print("[2/2] Starting Node.js React Frontend...")
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    frontend_process = subprocess.Popen([npm_cmd, "run", "dev"], cwd="frontend")
    
    try:
        # Keep the main script alive and wait
        api_process.wait()
        frontend_process.wait()
    except KeyboardInterrupt:
        print("\n[!] Ctrl+C detected. Stopping both servers...")
        api_process.terminate()
        frontend_process.terminate()
        api_process.wait()
        frontend_process.wait()
        print("Servers stopped safely.")

if __name__ == "__main__":
    main()
