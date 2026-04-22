@echo off
title CompleteAIITServices - Next.js :3002 (clean build)
cd /d "%~dp0"
echo.
echo Clearing .next cache, then starting http://localhost:3002
echo Keep this window OPEN. Press Ctrl+C to stop.
echo.
call npm run dev:3002:clean
pause
