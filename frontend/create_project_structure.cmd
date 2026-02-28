@echo off
REM ==========================================
REM CMD Script to create Student Exam Portal structure
REM ==========================================

REM Project Root
set ROOT=frontend\src

echo Creating project folders...

REM Create main folders
mkdir %ROOT%\components
mkdir %ROOT%\pages
mkdir %ROOT%\api

echo Creating component files...
REM Components
echo > %ROOT%\components\Input.jsx
echo > %ROOT%\components\Button.jsx
echo > %ROOT%\components\Card.jsx
echo > %ROOT%\components\Timer.jsx

echo Creating pages...
REM Pages
echo > %ROOT%\pages\StudentLogin.jsx
echo > %ROOT%\pages\StudentRegister.jsx
echo > %ROOT%\pages\StudentTest.jsx
echo > %ROOT%\pages\StudentResult.jsx

echo Creating API folder and file...
REM API
echo > %ROOT%\api\api.js

echo Project structure created successfully!

pause