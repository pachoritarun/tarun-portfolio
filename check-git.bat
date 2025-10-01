@echo off
echo Checking Git installation...
echo.

git --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Git is installed!
    git --version
    echo.
    echo You can now run deploy.bat to push to GitHub
    echo.
) else (
    echo ❌ Git is NOT installed on your system
    echo.
    echo To install Git:
    echo 1. Go to https://git-scm.com/download/win
    echo 2. Download Git for Windows
    echo 3. Run the installer with default settings
    echo 4. Restart Command Prompt
    echo 5. Run this script again to verify
    echo.
)

pause