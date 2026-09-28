import os
import subprocess
import sys

def build_executable():
    print("Preparing to build Advanced Trading EXE...")
    
    # Ensure pyinstaller is installed
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pyinstaller", "streamlit", "xgboost", "yfinance"])
    
    # We will build api.py as a standalone backend executable
    # To build Streamlit into an EXE is more complex and usually requires a separate entry point.
    # For now, we package the main API engine.
    
    build_cmd = [
        "pyinstaller",
        "--noconfirm",
        "--onefile",
        "--clean",
        "--add-data", f".env;.", 
        "api.py"
    ]
    
    if os.name == 'nt':
        build_cmd[5] = ".env;."
    else:
        build_cmd[5] = ".env:."
        
    print(f"Running: {' '.join(build_cmd)}")
    try:
        subprocess.check_call(build_cmd)
        print("\nBuild Successful! The executable is located in the 'dist' folder.")
    except Exception as e:
        print(f"\nBuild Failed: {e}")

if __name__ == "__main__":
    build_executable()
