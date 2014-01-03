@echo off
echo Hello developer, time to start working? Press enter to start! :D
set /p derp=

start cmd.exe /k "title mongodb_server&&mongod"
start cmd.exe /k "title mongodb&&mongo"
start cmd.exe /k "title git"
start cmd.exe /k "title rails_server&&rails server"
start cmd.exe /k "title rails"