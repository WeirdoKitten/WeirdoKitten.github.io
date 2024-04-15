@echo off

rem Langkah 1: Akses cmd, buka cmd
start cmd /k

rem Langkah 2: cd ke direktori C:\Users\satri\OneDrive\Documents\WebIO\WeirdoKitten.github.io
cd /d C:\Users\satri\OneDrive\Documents\WebIO\WeirdoKitten.github.io

rem Langkah 3: Update kode (misalnya, melakukan scraping)
python scraping.py

rem Langkah 4: Tambahkan perubahan ke git
git add .

rem Langkah 5: Lakukan commit dengan pesan
git commit -m "Update data"

rem Langkah 6: Push ke repository
git push

rem Langkah 7: Delay 5 detik
timeout /t 5 /nobreak > nul

rem Langkah 8: Close cmd
taskkill /f /im cmd.exe