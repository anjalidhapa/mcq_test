@echo off
REM =============================
REM Create Admin Panel Folder Structure with Files
REM =============================

REM Base folders
mkdir src\admin
mkdir src\admin\pages
mkdir src\admin\components
mkdir src\admin\api

REM Create admin page files
type nul > src\admin\pages\AdminLogin.jsx
type nul > src\admin\pages\AdminDashboard.jsx
type nul > src\admin\pages\ManageQuestions.jsx
type nul > src\admin\pages\ViewResults.jsx

REM Create admin component files
type nul > src\admin\components\AdminNav.jsx
type nul > src\admin\components\Button.jsx
type nul > src\admin\components\Table.jsx

REM Create admin API file
type nul > src\admin\api\adminApi.js

echo Admin panel folder structure with files created successfully!
pause