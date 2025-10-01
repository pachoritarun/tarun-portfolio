@echo off
echo Starting Git deployment...

echo Initializing Git repository...
git init

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "Initial commit: Complete portfolio website with AI chatbot and resume download"

echo Adding remote origin...
git remote add origin https://github.com/pachoritarun/tarun-portfolio.git

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo.
echo ✅ Successfully pushed to GitHub!
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Sign in with GitHub
echo 3. Import pachoritarun/tarun-portfolio
echo 4. Add environment variable: VITE_GEMINI_API_KEY = AIzaSyAm-Yv-xW2S89BdjmVTY4y6EzhCAhEG1eM
echo 5. Deploy!
echo.
pause