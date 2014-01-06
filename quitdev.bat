@echo off
echo Are you sure you want to quit developing? Lazy cuntsuck.
set /p yes=
taskkill /f /im ruby.exe
echo Ruby killed!
taskkill /f /im mongod.exe
echo Mongo server killed!
taskkill /f /im mongo.exe
echo Mongo client killed!
pause
taskkill /f /im cmd.exe
echo All command prompts killed!
pause