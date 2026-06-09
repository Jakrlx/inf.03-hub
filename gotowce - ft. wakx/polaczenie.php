<?php
$conn = mysqli_connect("localhost","root","","medica");
if(!$conn){
    die("Błąd połączenia z bazą: " . mysqli_connect_error());
}
?>
