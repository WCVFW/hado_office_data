@echo off
echo Installing requirements (this might take a few moments)...
C:\Users\praka\AppData\Local\Programs\Python\Python312\python.exe -m pip install -r requirements\local.txt

echo.
echo Starting the Django development server...
C:\Users\praka\AppData\Local\Programs\Python\Python312\python.exe manage.py runserver
pause
