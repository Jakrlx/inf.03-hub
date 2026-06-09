@echo off
title INF.03 - HTML + CSS + BAZA DANYCH (SCIAGA)
color 0A

echo.
echo ================================================
echo        SCHEMAT MYSLENIA (NAJWAŻNIEJSZE)
echo ================================================
echo.
echo HTML NIE LACZY SIE Z BAZA
echo PHP LACZY SIE Z BAZA
echo.
echo HTML tylko WYSWIETLA
echo PHP pobiera dane z MySQL i wstawia do HTML
echo.
echo WNIOSEK:
echo Plik MA NAZWE .php
echo Nawet jesli to zwykla strona HTML
echo.
pause

cls
echo ================================================
echo        STRUKTURA PLIKOW (KLASYK INF.03)
echo ================================================
echo.
echo /index.php
echo /styl.css
echo /polaczenie.php  (opcjonalnie, ale polecane)
echo /obraz1.jpg
echo.
pause

cls
echo ================================================
echo        BAZA DANYCH - phpMyAdmin
echo ================================================
echo.
echo 1. Tworzysz NOWA BAZE
echo.
echo Nazwa: medica
echo Kodowanie: utf8mb4_general_ci
echo.
pause

cls
echo ================================================
echo        TWORZENIE TABELI
echo ================================================
echo.
echo CREATE TABLE abonamenty (
echo     id INT AUTO_INCREMENT PRIMARY KEY,
echo     nazwa VARCHAR(50),
echo     cena INT
echo );
echo.
pause

cls
echo ================================================
echo        DODAWANIE DANYCH
echo ================================================
echo.
echo INSERT INTO abonamenty (nazwa, cena) VALUES
echo ('Standardowy', 200),
echo ('Premium', 500),
echo ('Dziecko', 150);
echo.
pause

cls
echo ================================================
echo        POLACZENIE Z BAZA - PHP
echo ================================================
echo.
echo polaczenie.php
echo.
echo $conn = mysqli_connect("localhost","root","","medica");
echo.
echo if (!$conn) {
echo     die("Blad polaczenia z baza");
echo }
echo.
echo DANE NA EGZAMINIE:
echo login: root
echo haslo: (puste)
echo serwer: localhost
echo.
pause

cls
echo ================================================
echo        index.php (HTML + PHP)
echo ================================================
echo.
echo require_once "polaczenie.php";
echo.
echo $zapytanie = "SELECT * FROM abonamenty";
echo $wynik = mysqli_query($conn, $zapytanie);
echo.
echo while (mysqli_fetch_assoc)
echo.
echo PHP:
echo - laczy sie z baza
echo - wysyla SELECT
echo - pobiera dane
echo - generuje HTML
echo.
pause

cls
echo ================================================
echo        styl.css (MINIMUM EGZAMINACYJNE)
echo ================================================
echo.
echo * { font-family: Georgia; }
echo.
echo header:
echo - background-color
echo - kolor czcionki
echo - padding
echo.
echo main:
echo - display: flex
echo.
echo section:
echo - background-color
echo - width
echo - padding
echo - border-radius
echo.
pause

cls
echo ================================================
echo        CO TU SIE DZIEJE (NA PALEC)
echo ================================================
echo.
echo 1. PHP laczy sie z baza
echo 2. Wysyla SELECT
echo 3. Pobiera dane w while
echo 4. Generuje HTML
echo 5. CSS = TYLKO WYGLAD
echo.
pause

cls
echo ================================================
echo        NAJCZESTSZE ZADANIA
echo ================================================
echo.
echo - Pobierz dane z bazy
echo - Wyswietl dane w liscie
echo - Wyswietl dane w tabeli HTML
echo - Polacz strone z MySQL
echo - Uzyj SELECT
echo.
pause

cls
echo ================================================
echo        NAJCZESTSZE BLEDY
echo ================================================
echo.
echo NIE ROB:
echo - index.html zamiast .php
echo - brak mysqli_query
echo - brak while
echo - literowka w nazwie bazy lub tabeli
echo - brak <link rel="stylesheet">
echo.
pause

cls
echo ================================================
echo        ULTRA SZYBKA WERSJA
echo ================================================
echo.
echo $conn = mysqli_connect("localhost","root","","baza");
echo $w = mysqli_query($conn,"SELECT * FROM tabela");
echo while($r = mysqli_fetch_assoc($w)){
echo     echo $r['kolumna'];
echo }
echo.
echo KONIEC SCIAGI - INF.03
echo.
pause
