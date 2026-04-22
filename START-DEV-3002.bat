@echo off
title CompleteAIITServices - Next.js :3002
cd /d "%~dp0"
echo.
echo Starting dev server at http://localhost:3002
echo Keep this window OPEN while you use the site. Press Ctrl+C to stop.
echo If the site won't load, use START-DEV-3002-CLEAN.bat (clears .next first).
echo.
call npm run dev:3002
pause
