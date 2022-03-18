@echo off
setlocal

REM CLEAN_IT {param}
REM
REM param = 0 - Only remove "node_modules".
REM param = 1 - "public" folder exists but "script.js" is generated. Remove file.
REM param = 2 - "public" folder exists but "script.js" and images are generated. Remove those.
REM param = 3 - Entire "public" folder is generated. Remove folder.
REM
call :CLEAN_IT "01-single-quote-express" 0
call :CLEAN_IT "02-vanilla-react" 0
call :CLEAN_IT "03-use-babel" 1
call :CLEAN_IT "04-use-jsx" 1
call :CLEAN_IT "05-use-webpack" 1
call :CLEAN_IT "06-more-loaders" 2
call :CLEAN_IT "07-html-plugin" 3
call :CLEAN_IT "08-favorite-quotes" 3
call :CLEAN_IT "09-inline-styles" 3
call :CLEAN_IT "10-css-modules" 3
call :CLEAN_IT "11-routing" 3
call :CLEAN_IT "12-oauth" 3
goto :DONE

:CLEAN_IT
if not exist %1 goto NODIR
cd %1
echo Cleaning %1 ...
if exist node_modules (
  rmdir /s /q node_modules
)
if "%2"=="1" (
  if exist public\scripts.js del public\scripts.js
  if exist public\scripts.js.LICENSE.txt del public\scripts.js.LICENSE.txt
)
if "%2"=="2" (
  if exist public\scripts.js del public\scripts.js
  if exist public\scripts.js.LICENSE.txt del public\scripts.js.LICENSE.txt
  if exist public\*.jpg del public\*.jpg
)
if "%2"=="3" (
  if exist public rmdir /s /q public
)
cd ..
goto :EOF
:NODIR
echo Folder %1 not found.
goto :EOF

:DONE
endlocal
echo.
pause
