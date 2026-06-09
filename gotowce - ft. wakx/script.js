const dane = {
  html: `
================================
...HTML – KOMPLETNA ŚCIĄGA (INF.03)
================================

SPIS TREŚCI
-----------
[1] Informacje ogólne HTML
[2] Struktura dokumentu
[3] Metadane (<head>)
[4] Znaczniki tekstowe
[5] Listy
[6] Linki i multimedia
[7] Tabele
[8] Formularze
[9] Semantyka HTML5
[10] Atrybuty globalne
[11] Komentarze i encje
[12] Najczęstsze błędy (EGZAMIN)


--------------------------------------------------
[1] INFORMACJE OGÓLNE HTML
--------------------------------------------------
HTML – HyperText Markup Language  
Język znaczników do tworzenia struktury strony WWW.

Cechy:
- pliki .html / .htm
- znacznik otwierający i zamykający
- struktura drzewiasta (DOM)
- nie jest językiem programowania

HTML5 – aktualny standard


--------------------------------------------------
[2] STRUKTURA DOKUMENTU HTML
--------------------------------------------------
<!DOCTYPE html>
<html lang="pl">
<head>
</head>
<body>
</body>
</html>

Znaczenie:
<!DOCTYPE html>  – informuje przeglądarkę o wersji HTML  
<html>           – główny znacznik dokumentu  
<head>           – informacje o stronie  
<body>           – zawartość widoczna  


--------------------------------------------------
[3] METADANE – SEKCJA <head>
--------------------------------------------------
<head>
<meta charset="UTF-8">
<meta name="description">
<meta name="keywords">
<meta name="author">
<meta name="viewport">
<title>
<link>
<style>
<script>
</head>

<meta charset>       – kodowanie znaków  
<meta viewport>      – responsywność  
<title>              – tytuł strony  
<link>               – CSS, favicon  
<style>              – style CSS  
<script>             – JS  


--------------------------------------------------
[4] ZNACZNIKI TEKSTOWE
--------------------------------------------------
<h1> – <h6>     nagłówki
<p>             akapit
<br>            nowa linia
<hr>            linia pozioma

<strong>        ważny tekst (pogrubienie)
<b>             pogrubienie (wizualne)
<em>            wyróżnienie (kursywa)
<i>             kursywa (wizualna)

<mark>          podświetlenie
<small>         mniejszy tekst
<sup>           indeks górny
<sub>           indeks dolny
<code>          kod
<pre>           tekst preformatowany
<span>          kontener liniowy
<div>           kontener blokowy


--------------------------------------------------
[5] LISTY
--------------------------------------------------
<ul>    lista nieuporządkowana
<ol>    lista uporządkowana
<li>    element listy
<dl>    lista definicji
<dt>    termin
<dd>    opis

Atrybuty <ol>:
type
start
reversed


--------------------------------------------------
[6] LINKI I MULTIMEDIA
--------------------------------------------------
<a>             link
href            adres
target          _blank, _self
download        pobieranie

<img>           obraz
src             źródło
alt             tekst alternatywny
width / height

<audio>
<video>
<source>
controls
autoplay
loop
muted


--------------------------------------------------
[7] TABELE
--------------------------------------------------
<table>         tabela
<tr>            wiersz
<td>            komórka
<th>            nagłówek
<caption>       tytuł tabeli
<thead>
<tbody>
<tfoot>

Atrybuty:
colspan
rowspan
border (stary)


--------------------------------------------------
[8] FORMULARZE
--------------------------------------------------
<form>
action
method (GET / POST)

<input>:
type:
text
password
email
number
date
radio
checkbox
submit
reset
file
hidden

Atrybuty:
name
value
placeholder
required
readonly
disabled
checked

Inne:
<label>
<textarea>
<select>
<option>
<button>


--------------------------------------------------
[9] SEMANTYKA HTML5
--------------------------------------------------
<header>        nagłówek
<nav>           nawigacja
<main>          główna treść
<section>       sekcja
<article>       artykuł
<aside>         panel boczny
<footer>        stopka

Cel:
- lepsze SEO
- czytelność kodu
- dostępność


--------------------------------------------------
[10] ATRYBUTY GLOBALNE
--------------------------------------------------
id
class
style
title
lang
hidden
tabindex
contenteditable
draggable
data-*


--------------------------------------------------
[11] KOMENTARZE I ENCJE
--------------------------------------------------
Komentarz:
<!-- komentarz -->

Encje HTML:
&nbsp;
&lt;
&gt;
&amp;
&quot;
&apos;


--------------------------------------------------
[12] NAJCZĘSTSZE BŁĘDY (INF.03)
--------------------------------------------------
✘ brak <!DOCTYPE html>
✘ brak lang="pl"
✘ brak charset UTF-8
✘ zła struktura <head>/<body>
✘ złe zagnieżdżenia znaczników
✘ brak alt w <img>
✘ zły method w <form>
✘ literówki w nazwach znaczników

KONIEC – HTML (INF.03)
...
`,

  css: `
CSS – KOMPLETNA ŚCIĄGA (INF.03)
================================

SPIS TREŚCI
-----------
[1] Podstawy i selektory
[2] Kolory, tła, czcionki
[3] Box model
[4] Marginesy, padding, border
[5] Display i pozycjonowanie
[6] Flexbox
[7] Grid
[8] Pseudo-klasy i pseudo-elementy
[9] Efekty, transformacje
[10] Przejścia i animacje
[11] Formularze i przyciski
[12] Media queries
[13] Najczęstsze błędy

--------------------------------------------------
[1] PODSTAWY I SELEKTORY
--------------------------------------------------
*               – selektor uniwersalny
element         – selektor tagu (div, p, h1…)
.class          – selektor klasy
#id             – selektor id
element, element – grupowanie
element element  – potomstwo
element > element – dziecko
element + element – sąsiedni element
element ~ element – rodzeństwo
[attr]          – atrybut istnieje
[attr=value]    – atrybut równa się wartości
[attr~=value]   – atrybut zawiera słowo
[attr|=value]   – atrybut zaczyna się od wartości
[attr^=value]   – atrybut zaczyna się od wartości
[attr$=value]   – atrybut kończy się wartością
[attr*=value]   – atrybut zawiera wartość

--------------------------------------------------
[2] KOLORY, TŁA, CZCIONKI
--------------------------------------------------
color                 – kolor tekstu
background-color      – kolor tła
background-image      – obraz tła
background-repeat     – repeat, no-repeat
background-size       – cover, contain
background-position   – top, center, bottom
background-attachment – scroll, fixed

font-family          – rodzina czcionek
font-size            – rozmiar czcionki
font-weight          – bold, normal, 100-900
font-style           – normal, italic, oblique
font-variant         – small-caps
line-height           – wysokość linii
letter-spacing        – odstępy między literami
text-align           – left, center, right, justify
text-decoration      – none, underline, overline, line-through
text-transform       – uppercase, lowercase, capitalize
text-indent          – wcięcie akapitu
word-spacing         – odstęp między słowami
white-space          – normal, nowrap, pre, pre-wrap
overflow             – visible, hidden, scroll, auto
cursor               – pointer, default, text

--------------------------------------------------
[3] BOX MODEL
--------------------------------------------------
width, height
min-width, max-width
min-height, max-height
padding, padding-top, padding-right, padding-bottom, padding-left
margin, margin-top, margin-right, margin-bottom, margin-left
border, border-width, border-style, border-color
border-top, border-right, border-bottom, border-left
border-radius
box-sizing            – content-box, border-box
outline, outline-width, outline-style, outline-color
overflow, overflow-x, overflow-y

--------------------------------------------------
[4] MARGINESY / PADDING / BORDER
--------------------------------------------------
margin: 0 auto        – wyśrodkowanie
padding               – wypełnienie wewnętrzne
border               – obramowanie
border-collapse       – collapse, separate (dla tabel)
border-spacing        – odstępy w tabeli
box-shadow            – cień elementu
outline               – obrys elementu
outline-offset        – odstęp obrysu

--------------------------------------------------
[5] DISPLAY I POZYCJONOWANIE
--------------------------------------------------
display               – block, inline, inline-block, flex, grid, none
position              – static, relative, absolute, fixed, sticky
top, right, bottom, left
float                 – left, right, none
clear                 – left, right, both
z-index               – warstwa
overflow              – auto, hidden, scroll
visibility            – visible, hidden, collapse
clip                  – ograniczenie widoczności
object-fit            – cover, contain, fill

--------------------------------------------------
[6] FLEXBOX
--------------------------------------------------
display: flex
flex-direction        – row, row-reverse, column, column-reverse
flex-wrap             – nowrap, wrap, wrap-reverse
flex-flow             – direction + wrap
justify-content       – flex-start, flex-end, center, space-between, space-around, space-evenly
align-items           – flex-start, flex-end, center, baseline, stretch
align-content         – flex-start, flex-end, center, space-between, space-around, stretch
order                 – kolejność elementu
flex-grow, flex-shrink, flex-basis
align-self            – nadpisuje align-items
gap                   – odstępy między elementami

--------------------------------------------------
[7] GRID
--------------------------------------------------
display: grid
grid-template-columns – np. 1fr 2fr auto
grid-template-rows    – np. 100px auto
grid-template-areas   – nazwy obszarów
grid-area             – przypisanie do obszaru
grid-column           – start / end
grid-row              – start / end
gap, row-gap, column-gap
justify-items, align-items
justify-content, align-content
place-items, place-content

--------------------------------------------------
[8] PSEUDO-KLASY I PSEUDO-ELEMENTY
--------------------------------------------------
:hover, :active, :focus
:visited, :link
:first-child, :last-child, :nth-child(n)
:nth-of-type(n), :first-of-type, :last-of-type
:only-child, :only-of-type
:not(selector)
::before, ::after
::first-letter, ::first-line
::selection

--------------------------------------------------
[9] EFEKTY I TRANSFORMACJE
--------------------------------------------------
opacity               – przezroczystość
visibility            – widoczność
transform             – translate, rotate, scale, skew
transform-origin      – punkt odniesienia
filter                – blur, brightness, contrast, grayscale, hue-rotate, invert, saturate, sepia
mix-blend-mode        – multiply, screen, overlay

--------------------------------------------------
[10] PRZEJŚCIA I ANIMACJE
--------------------------------------------------
transition-property   – np. all, background, color
transition-duration   – 0.3s, 1s
transition-timing-function – linear, ease, ease-in, ease-out, ease-in-out
transition-delay      – 0s
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
@keyframes

--------------------------------------------------
[11] FORMULARZE I PRZYCISKI
--------------------------------------------------
input, select, textarea, button
type                 – text, password, email, number, date, submit, reset, file, checkbox, radio, hidden
placeholder
required
disabled
readonly
checked
label
optgroup
option
fieldset
legend
button:hover
button:active
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

--------------------------------------------------
[12] MEDIA QUERIES
--------------------------------------------------
@media (max-width: 1200px) { ... }
@media (max-width: 992px)  { ... }
@media (max-width: 768px)  { ... }
@media (max-width: 576px)  { ... }

--------------------------------------------------
[13] NAJCZĘSTSZE BŁĘDY
--------------------------------------------------
✘ brak jednostek (px, %, em)  
✘ niepoprawne selektory  
✘ brak box-sizing: border-box  
✘ brak resetu marginesów / paddingu  
✘ złe float / clear  
✘ błędne nazwy pseudo-klas  
✘ brak fallback dla fontów  
✘ brak prefixów dla transform/transition (IE)

`,

  js: `
JavaScript – podstawy (INF.03)
==============================
...JAVASCRIPT – KOMPLETNA ŚCIĄGA (INF.03)
======================================

SPIS TREŚCI
-----------
[1] Podstawy
[2] Zmienne i typy danych
[3] Operatory
[4] Instrukcje warunkowe
[5] Pętle
[6] Funkcje
[7] Tablice i obiekty
[8] Stringi i metody
[9] DOM – manipulacja stroną
[10] Eventy
[11] Formularze
[12] LocalStorage / SessionStorage
[13] Błędy i debugowanie
[14] Najczęstsze błędy


--------------------------------------------------
[1] PODSTAWY
--------------------------------------------------
- JS – język skryptowy do interakcji i logiki
- Plik .js lub <script> w HTML
- Można pisać inline lub w osobnym pliku
- Case-sensitive
- Każda instrukcja kończy się średnikiem (;), choć nieobowiązkowo

--------------------------------------------------
[2] ZMIENNE I TYPY DANYCH
--------------------------------------------------
let       – zmienna blokowa
const     – stała blokowa
var       – zmienna funkcja / globalna

Typy danych:
- number (np. 5, 3.14)
- string (np. "tekst")
- boolean (true/false)
- null
- undefined
- object
- symbol
- array (tablica)
- function

Konwersje:
- String(), Number(), Boolean()
- parseInt(), parseFloat()

--------------------------------------------------
[3] OPERATORY
--------------------------------------------------
Aritmetyczne: + - * / % **
Przypisania: =, +=, -=, *=, /=, %=
Porównania: ==, ===, !=, !==, >, <, >=, <=
Logiczne: &&, ||, !
Inkrementacja/dekrementacja: ++, --
Operator warunkowy: condition ? value1 : value2

--------------------------------------------------
[4] INSTRUKCJE WARUNKOWE
--------------------------------------------------
if (warunek) { ... }
else if (warunek) { ... }
else { ... }

switch(wyrażenie) {
  case wartość1: ...
  break;
  case wartość2: ...
  default: ...
}

--------------------------------------------------
[5] PĘTLE
--------------------------------------------------
for (let i=0; i<10; i++) { ... }
while (warunek) { ... }
do { ... } while (warunek)
for...in   – iteruje po właściwościach obiektu
for...of   – iteruje po elementach tablicy

break      – przerywa pętlę
continue   – pomija iterację

--------------------------------------------------
[6] FUNKCJE
--------------------------------------------------
Deklaracja:
function nazwa(param1, param2) {
  ...
  return wartość;
}

Wyrażenie funkcyjne:
const nazwa = function(param) { ... }

Funkcja strzałkowa:
const nazwa = (param) => { ... }

Parametry domyślne:
function test(a=1, b=2) { ... }

Rest / Spread:
function f(...args) { ... }
const arr2 = [...arr1, 4,5]

--------------------------------------------------
[7] TABLICE I OBIEKTY
--------------------------------------------------
Tworzenie tablic:
let arr = [1,2,3]
arr.length
arr.push(val), arr.pop()
arr.shift(), arr.unshift()
arr.indexOf(val)
arr.includes(val)
arr.slice(), arr.splice()
arr.concat(arr2)
arr.sort(), arr.reverse()
arr.forEach(func)
arr.map(func)
arr.filter(func)
arr.reduce(func)

Obiekty:
let obj = { klucz: 'wartość', liczba: 5 }
obj.klucz
obj['klucz']
Object.keys(obj), Object.values(obj)
Object.entries(obj)
delete obj.klucz

--------------------------------------------------
[8] STRINGI I METODY
--------------------------------------------------
.length
toUpperCase(), toLowerCase()
charAt(index), charCodeAt(index)
indexOf(substring)
lastIndexOf(substring)
includes(substring)
startsWith(), endsWith()
trim(), trimStart(), trimEnd()
split(separator), join(separator)
replace(search, replace)
slice(start,end), substring(start,end), substr(start,length)
--------------------------------------------------
[9] DOM – MANIPULACJA STRONĄ
--------------------------------------------------
document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('tag')
document.querySelector('selector')
document.querySelectorAll('selector')

Zmiana treści / HTML:
element.innerHTML
element.textContent
element.value

Zmiana stylu:
element.style.property = 'value'
element.classList.add('klasa')
element.classList.remove('klasa')
element.classList.toggle('klasa')

Tworzenie elementów:
document.createElement('div')
parent.appendChild(element)
parent.insertBefore(newElem, reference)

--------------------------------------------------
[10] EVENTY
--------------------------------------------------
onclick, onmouseover, onmouseout, oninput, onchange, onsubmit
addEventListener('click', func)
addEventListener('input', func)
removeEventListener('click', func)
event.preventDefault()
event.stopPropagation()
this

--------------------------------------------------
[11] FORMULARZE
--------------------------------------------------
document.forms['nazwa']
document.forms[0]
input.value
input.checked
select.options
select.selectedIndex

Walidacja:
required, pattern, min, max, maxlength, minlength
focus(), blur()
reset()

--------------------------------------------------
[12] LOCALSTORAGE / SESSIONSTORAGE
--------------------------------------------------
localStorage.setItem('key','value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()
sessionStorage.setItem('key','value')
sessionStorage.getItem('key')
sessionStorage.removeItem('key')
sessionStorage.clear()

JSON:
JSON.stringify(obj)
JSON.parse(str)

--------------------------------------------------
[13] BŁĘDY I DEBUGOWANIE
--------------------------------------------------
console.log()
console.warn()
console.error()
console.table()
debugger
alert()
prompt()
confirm()

--------------------------------------------------
[14] NAJCZĘSTSZE BŁĘDY
--------------------------------------------------
✘ brak średników (nie zawsze konieczne, ale czasem problem)
✘ literówki w nazwach funkcji / zmiennych
✘ mylenie = i ==
✘ nieprawidłowe użycie this
✘ zapominanie o addEventListener
✘ brak zamknięcia nawiasów klamrowych
✘ brak sprawdzenia isNaN()
✘ mylenie typów string/number
...
`,

  php: `
PHP – podstawy (INF.03)
=======================
...================================
PHP – PRAKTYCZNA ŚCIĄGA (INF.03)
================================

[1] Podstawy PHP
<?php ... ?> – otwarcie i zamknięcie kodu PHP
echo, print – wypisywanie danych
Komentarze:
// komentarz jednolinijkowy
/* komentarz wielolinijkowy */
# komentarz jednolinijkowy

Zmienne:
$zmienna = "wartość"; // nazwy zmiennych zaczynają się od $

Typy danych:
- string: "tekst", 'tekst'
- integer: 123
- float: 12.34
- boolean: true / false
- array: $tablica = [1, 2, 3];
- associative array: $tab = ["imie" => "Jan"];
- null: $a = null;

Operatory:
+, -, *, /, %, .=, =, ==, ===, !=, !==, <, >, <=, >=, &&, ||, !

[2] Instrukcje warunkowe
if ($a > $b) {
    echo "A większe niż B";
} elseif ($a == $b) {
    echo "Równe";
} else {
    echo "B większe niż A";
}

switch ($zmienna) {
    case 1:
        echo "Jeden";
        break;
    case 2:
        echo "Dwa";
        break;
    default:
        echo "Inna wartość";
}

[3] Pętle
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

while ($i < 10) {
    echo $i;
    $i++;
}

do {
    echo $i;
    $i++;
} while ($i < 10);

foreach ($tablica as $klucz => $wartosc) {
    echo "$klucz => $wartosc";
}

[4] Funkcje
function dodaj($a, $b) {
    return $a + $b;
}
echo dodaj(2, 3);

Funkcje anonimowe:
$fn = function($x) { return $x*2; };
echo $fn(5);

[5] Superglobalne zmienne
$_GET, $_POST – dane z formularzy
$_REQUEST – GET + POST
$_SERVER – informacje o serwerze
$_SESSION – dane sesji
$_COOKIE – ciasteczka
$_FILES – przesyłane pliki

[6] Formularze i obsługa danych
<form method="post" action="">
    <input type="text" name="login">
    <input type="password" name="haslo">
    <input type="submit" value="Wyślij">
</form>

Odbieranie danych:
$login = $_POST['login'] ?? '';
$haslo = $_POST['haslo'] ?? '';

Walidacja:
if (!empty($login)) { ... }

[7] Tablice
$tab = [1, 2, 3];
$assoc = ["imie"=>"Jan","wiek"=>20];

Operacje:
count($tab), array_push($tab, 4), array_pop($tab)
in_array(2, $tab), array_merge($tab, [4,5])
array_keys($assoc), array_values($assoc)
sort($tab), rsort($tab)
asort($assoc), ksort($assoc)

[8] Stringi
strlen($text), strpos($text, "szukane")
str_replace("stare","nowe",$text)
substr($text,0,5)
strtolower($text), strtoupper($text)
trim($text), ltrim($text), rtrim($text)
explode(",", $text), implode(",", $tab)

[9] Daty i czas
date("Y-m-d H:i:s")
time() – timestamp
strtotime("tomorrow"), strtotime("+1 week")

[10] Sesje i ciasteczka
session_start();
$_SESSION['user'] = "Jan";

setcookie("user", "Jan", time()+3600); // 1h

[11] Pliki
fopen("plik.txt","r"), fwrite(), fclose()
file_get_contents("plik.txt")
file_put_contents("plik.txt", "nowa zawartość")
unlink("plik.txt") – usuwa plik
is_file("plik.txt"), file_exists("plik.txt")

[12] Obsługa błędów
error_reporting(E_ALL);
ini_set('display_errors', 1);
try { ... } catch (Exception $e) { echo $e->getMessage(); }

[13] Funkcje użyteczne
isset($var), empty($var)
die("Komunikat"), exit()
var_dump($var), print_r($var)

[14] Połączenie z MySQL
$host = "localhost";
$user = "root";
$pass = "";
$db   = "nazwa";

$conn = mysqli_connect($host,$user,$pass,$db);
if (!$conn) { die("Błąd: ".mysqli_connect_error()); }

$query = "SELECT * FROM uczniowie";
$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['imie'] . " " . $row['nazwisko'] . "<br>";
}

mysqli_close($conn);

[15] Bezpieczne operacje
mysqli_real_escape_string($conn, $wartosc)
prepared statements: $stmt = $conn->prepare("INSERT INTO uczniowie (imie,nazwisko) VALUES (?, ?)");
$stmt->bind_param("ss",$imie,$nazwisko);
$stmt->execute();

[16] Najczęstsze błędy
✘ brak <?php ?>  
✘ literówki w zmiennych  
✘ złe łączenie z bazą danych  
✘ brak walidacji danych z formularza  
✘ brak zabezpieczeń przed SQL Injection

KONIEC – PHP (INF.03)
...
`,

  sql: `
SQL – podstawy (INF.03)
=======================
...================================
SQL – PRAKTYCZNA ŚCIĄGA (INF.03)
================================

[1] Tworzenie bazy danych
CREATE DATABASE nazwa_bazy;
USE nazwa_bazy;

[2] Tworzenie tabel
CREATE TABLE uczniowie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imie VARCHAR(50) NOT NULL,
    nazwisko VARCHAR(50) NOT NULL,
    wiek INT,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE przedmioty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nazwa VARCHAR(50),
    nauczyciel VARCHAR(50)
);

[3] Typy danych
INT – liczby całkowite
FLOAT / DOUBLE – liczby zmiennoprzecinkowe
CHAR(n) – tekst stałej długości
VARCHAR(n) – tekst zmiennej długości
TEXT – długi tekst
DATE, DATETIME, TIMESTAMP
BOOLEAN / TINYINT(1)

[4] Podstawowe operacje na danych
INSERT INTO uczniowie (imie, nazwisko, wiek) VALUES ('Jan', 'Kowalski', 18);
INSERT INTO przedmioty (nazwa, nauczyciel) VALUES ('Matematyka', 'Nowak');

SELECT * FROM uczniowie;
SELECT imie, nazwisko FROM uczniowie WHERE wiek > 18;
SELECT DISTINCT nazwa FROM przedmioty;

UPDATE uczniowie SET wiek = 19 WHERE imie = 'Jan';
DELETE FROM uczniowie WHERE id = 5;

[5] Operatory i warunki
=, !=, <>, >, <, >=, <=
BETWEEN ... AND ...
IN (1,2,3)
LIKE '%tekst%'
IS NULL / IS NOT NULL
AND, OR, NOT

[6] Sortowanie i ograniczenia
ORDER BY kolumna ASC|DESC
LIMIT 5
OFFSET 10

[7] Funkcje agregujące
COUNT(*) – liczba rekordów
SUM(kolumna) – suma wartości
AVG(kolumna) – średnia
MIN(kolumna), MAX(kolumna)
GROUP BY kolumna
HAVING warunek_agregacji

[8] Łączenie tabel (JOIN)
INNER JOIN – tylko pasujące rekordy
LEFT JOIN – wszystkie z lewej + pasujące z prawej
RIGHT JOIN – wszystkie z prawej + pasujące z lewej
FULL OUTER JOIN – wszystkie rekordy (nie w MySQL)
CROSS JOIN – iloczyn kartezjański

Przykład INNER JOIN:
SELECT u.imie, u.nazwisko, p.nazwa
FROM uczniowie u
INNER JOIN przedmioty p ON u.id = p.id;

[9] Klucze i indeksy
PRIMARY KEY – unikalny identyfikator
AUTO_INCREMENT – automatyczne zwiększanie
UNIQUE – unikalna wartość
FOREIGN KEY – klucz obcy
INDEX – przyspiesza wyszukiwanie

Przykład:
CREATE TABLE oceny (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uczen_id INT,
    przedmiot_id INT,
    ocena INT,
    FOREIGN KEY (uczen_id) REFERENCES uczniowie(id),
    FOREIGN KEY (przedmiot_id) REFERENCES przedmioty(id)
);

[10] Widoki i aliasy
CREATE VIEW widok_uczniowie AS
SELECT imie, nazwisko FROM uczniowie;

SELECT imie AS Imię, nazwisko AS Nazwisko FROM uczniowie;

[11] Transakcje i bezpieczeństwo
START TRANSACTION;
INSERT INTO uczniowie (imie,nazwisko) VALUES ('Anna','Nowak');
COMMIT;
ROLLBACK;

[12] Funkcje przydatne w SQL
NOW() – aktualny czas
CURDATE() – aktualna data
DATEDIFF(data1, data2)
CONCAT('tekst1','tekst2')
LENGTH(kolumna)
ROUND(liczba,2)

[13] Najczęstsze błędy
✘ brak średnika na końcu polecenia
✘ literówki w nazwach tabel i kolumn
✘ brak klucza głównego
✘ JOIN bez warunku ON
✘ brak spójności typów danych

KONIEC – SQL (INF.03)
...
`,

  baza: `
================================
Bazy danych + PHP – PRAKTYCZNA ŚCIĄGA (INF.03)
================================

[1] Połączenie z bazą danych MySQL
$host = "localhost"; // serwer bazy danych
$user = "root";      // użytkownik
$pass = "";          // hasło
$db   = "szkola";    // nazwa bazy

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Błąd połączenia: " . mysqli_connect_error());
} else {
    echo "Połączono z bazą danych!";
}

[2] Tworzenie bazy i tabel z PHP
$sql = "CREATE DATABASE IF NOT EXISTS szkola";
mysqli_query($conn, $sql);

$sql = "CREATE TABLE IF NOT EXISTS uczniowie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imie VARCHAR(50) NOT NULL,
    nazwisko VARCHAR(50) NOT NULL,
    wiek INT
)";
mysqli_query($conn, $sql);

[3] Wstawianie danych do tabel
// zwykłe wstawianie
$sql = "INSERT INTO uczniowie (imie, nazwisko, wiek) VALUES ('Jan','Kowalski',18)";
mysqli_query($conn, $sql);

// bezpieczne wstawianie (przygotowane zapytania)
$stmt = $conn->prepare("INSERT INTO uczniowie (imie, nazwisko, wiek) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $imie, $nazwisko, $wiek);

$imie = "Anna";
$nazwisko = "Nowak";
$wiek = 19;
$stmt->execute();

$stmt->close();

[4] Pobieranie danych z tabeli
$sql = "SELECT * FROM uczniowie";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo $row['imie'] . " " . $row['nazwisko'] . " (" . $row['wiek'] . ")<br>";
    }
} else {
    echo "Brak rekordów";
}

[5] Aktualizacja i usuwanie
// Aktualizacja
$sql = "UPDATE uczniowie SET wiek = 20 WHERE imie = 'Jan'";
mysqli_query($conn, $sql);

// Usuwanie
$sql = "DELETE FROM uczniowie WHERE id = 3";
mysqli_query($conn, $sql);

[6] Operacje zaawansowane
// Filtrowanie
$sql = "SELECT * FROM uczniowie WHERE wiek > 18 ORDER BY imie ASC";
$result = mysqli_query($conn, $sql);

// Liczenie rekordów
$sql = "SELECT COUNT(*) as ilosc FROM uczniowie";
$row = mysqli_fetch_assoc(mysqli_query($conn, $sql));
echo "Liczba uczniów: " . $row['ilosc'];

// Łączenie tabel (JOIN)
$sql = "SELECT u.imie, u.nazwisko, p.nazwa_przedmiotu
        FROM uczniowie u
        INNER JOIN oceny o ON u.id = o.uczen_id
        INNER JOIN przedmioty p ON o.przedmiot_id = p.id";
$result = mysqli_query($conn, $sql);

[7] Bezpieczne praktyki
- Zawsze używaj prepared statements przy danych od użytkownika
- Escapowanie danych: mysqli_real_escape_string($conn, $wartosc)
- Sprawdzaj połączenie i błędy: mysqli_connect_error(), mysqli_error($conn)
- Zamykaj połączenie po pracy: mysqli_close($conn);

[8] Sesje i bazy danych
session_start();
$_SESSION['user'] = $user;

if (isset($_SESSION['user'])) {
    echo "Zalogowany: " . $_SESSION['user'];
}

[9] Najczęstsze błędy
✘ brak połączenia z bazą
✘ brak przygotowanych zapytań przy danych od użytkownika
✘ literówki w nazwach tabel i kolumn
✘ niezamknięte połączenia
✘ brak sprawdzania wyników zapytań

KONIEC – BAZY DANYCH + PHP (INF.03)
`,

  ratunek: `
========================================
🚑 RATUNEK – PEŁNE ZADANIE EGZAMINACYJNE INF.03
========================================

SCENARIUSZ (JAK NA EGZAMINIE)
----------------------------------------
Wykonaj aplikację internetową:
- formularz HTML
- walidacja w JavaScript
- zapis danych do bazy MySQL w PHP
- wyświetlenie danych z bazy
- styl dowolny
- użyj PHP i JS

========================================
1️⃣ STRUKTURA PLIKÓW (EGZAMIN)
----------------------------------------
index.html
style.css
script.js
db.php
save.php

========================================
2️⃣ BAZA DANYCH (SQL)
----------------------------------------
CREATE DATABASE inf03;
USE inf03;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50),
    email VARCHAR(100)
);

========================================
3️⃣ index.html (FORMULARZ)
----------------------------------------
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>INF.03</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

<h2>Rejestracja użytkownika</h2>

<form method="post" action="save.php" onsubmit="return validateForm()">
    <label>Login:</label><br>
    <input type="text" id="login" name="login"><br><br>

    <label>Email:</label><br>
    <input type="email" id="email" name="email"><br><br>

    <input type="submit" value="Zapisz">
</form>

</body>
</html>

========================================
4️⃣ script.js (WALIDACJA JS)
----------------------------------------
function validateForm() {
    let login = document.getElementById("login").value;
    let email = document.getElementById("email").value;

    if (login === "" || email === "") {
        alert("Uzupełnij wszystkie pola!");
        return false;
    }

    if (login.length < 3) {
        alert("Login musi mieć min. 3 znaki");
        return false;
    }

    return true;
}

========================================
5️⃣ db.php (POŁĄCZENIE Z BAZĄ)
----------------------------------------
<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "inf03";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Błąd połączenia: " . mysqli_connect_error());
}
?>

========================================
6️⃣ save.php (ZAPIS DO BAZY)
----------------------------------------
<?php
require("db.php");

$login = $_POST['login'] ?? '';
$email = $_POST['email'] ?? '';

if ($login != "" && $email != "") {

    $stmt = $conn->prepare(
        "INSERT INTO users (login, email) VALUES (?, ?)"
    );
    $stmt->bind_param("ss", $login, $email);
    $stmt->execute();

    echo "Dane zapisane poprawnie";
} else {
    echo "Błąd danych";
}

mysqli_close($conn);
?>

========================================
7️⃣ WYŚWIETLANIE DANYCH (PHP)
----------------------------------------
<?php
require("db.php");

$result = mysqli_query($conn, "SELECT * FROM users");

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['login'] . " - " . $row['email'] . "<br>";
}

mysqli_close($conn);
?>

========================================
8️⃣ CO ZMIENIAĆ NA EGZAMINIE
----------------------------------------
✔ nazwę bazy
✔ nazwę tabeli
✔ nazwy pól
✔ treść formularza
✔ komunikaty

LOGIKA ZAWSZE TAKA SAMA

========================================
9️⃣ NAJWAŻNIEJSZE RZECZY (PUNKTY)
----------------------------------------
✔ formularz HTML ✔
✔ JS waliduje ✔
✔ PHP odbiera POST ✔
✔ prepared statement ✔
✔ INSERT do bazy ✔
✔ SELECT z bazy ✔
✔ poprawna struktura ✔

========================================
10️⃣ WERSJA AWARYJNA (MINIMUM NA ZALICZENIE)
----------------------------------------
HTML formularz
JS: sprawdzenie pustych pól
PHP: mysqli_connect + INSERT
SQL: CREATE TABLE

RESZTA = BONUSY

========================================
KONIEC – RATUNEK INF.03
========================================
`,

zadanie_1: `
========================================
ZADANIE 1 – PRZYKŁADOWE ZADANIA INF.03
========================================

====================================================
ZADANIE A – FORMULARZ + PHP + BAZA (NAJCZĘSTSZE)
====================================================

TREŚĆ (JAK NA EGZAMINIE):
----------------------------------------
Wykonaj stronę internetową umożliwiającą
dodanie użytkownika do bazy danych.
Dane pobierz z formularza.
Zastosuj PHP i bazę MySQL.

----------------------------------------
BAZA DANYCH (SQL)
----------------------------------------
CREATE DATABASE egzamin;
USE egzamin;

CREATE TABLE osoby (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imie VARCHAR(50),
    nazwisko VARCHAR(50)
);

----------------------------------------
index.html
----------------------------------------
<form method="post" action="save.php">
    <input type="text" name="imie" placeholder="Imię">
    <input type="text" name="nazwisko" placeholder="Nazwisko">
    <input type="submit" value="Zapisz">
</form>

----------------------------------------
save.php
----------------------------------------
<?php
$conn = mysqli_connect("localhost","root","","egzamin");

$imie = $_POST['imie'] ?? '';
$nazwisko = $_POST['nazwisko'] ?? '';

if ($imie != "" && $nazwisko != "") {
    mysqli_query($conn,
        "INSERT INTO osoby (imie,nazwisko)
         VALUES ('$imie','$nazwisko')"
    );
    echo "Dodano rekord";
}

mysqli_close($conn);
?>

CO DAJE PUNKTY:
✔ formularz
✔ POST
✔ INSERT
✔ połączenie z bazą

====================================================
ZADANIE B – SELECT + WARUNEK + WYŚWIETLANIE
====================================================

TREŚĆ:
----------------------------------------
Wyświetl z bazy danych osoby,
których wiek jest większy niż 18 lat.

----------------------------------------
BAZA (SQL)
----------------------------------------
CREATE TABLE uczniowie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imie VARCHAR(50),
    wiek INT
);

----------------------------------------
PHP
----------------------------------------
<?php
$conn = mysqli_connect("localhost","root","","egzamin");

$sql = "SELECT imie, wiek FROM uczniowie WHERE wiek > 18";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['imie']." - ".$row['wiek']."<br>";
}

mysqli_close($conn);
?>

CO DAJE PUNKTY:
✔ SELECT
✔ WHERE
✔ pętla while
✔ mysqli_fetch_assoc

====================================================
ZADANIE C – HTML + JS (WALIDACJA)
====================================================

TREŚĆ:
----------------------------------------
Sprawdź w JavaScript czy pole formularza
nie jest puste oraz czy hasło ma min. 6 znaków.

----------------------------------------
HTML
----------------------------------------
<form onsubmit="return sprawdz()">
    <input type="text" id="login">
    <input type="password" id="haslo">
    <input type="submit" value="Zaloguj">
</form>

----------------------------------------
JavaScript
----------------------------------------
function sprawdz() {
    let login = document.getElementById("login").value;
    let haslo = document.getElementById("haslo").value;

    if (login === "" || haslo === "") {
        alert("Uzupełnij wszystkie pola");
        return false;
    }

    if (haslo.length < 6) {
        alert("Hasło za krótkie");
        return false;
    }

    return true;
}

CO DAJE PUNKTY:
✔ JS
✔ getElementById
✔ if
✔ length
✔ return false

====================================================
🔥 WERSJA EGZAMIN – JAK ZDAĆ NA PEWNO
====================================================
1. Zrób FORMULARZ
2. Odbierz POST w PHP
3. Połącz z bazą
4. INSERT albo SELECT
5. echo wynik

NAWET JAK NIE DZIAŁA IDEALNIE → SĄ PUNKTY

====================================================
NAJCZĘSTSZE BŁĘDY
====================================================
✘ brak action w form
✘ brak method="post"
✘ literówki w nazwach pól
✘ brak mysqli_connect
✘ brak return false w JS

========================================
KONIEC – ZADANIE 1 (INF.03)
========================================
`


};

// FUNKCJE
function load(section) {
    document.getElementById("sectionTitle").textContent = section.toUpperCase();
    document.getElementById("output").textContent = dane[section] || "Brak danych";
}

function copyText() {
    navigator.clipboard.writeText(
        document.getElementById("output").textContent
    );
    alert("📋 Skopiowano!");
}
