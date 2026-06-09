<?php
require_once "polaczenie.php"; // połączenie z bazą

// pobranie abonamentów
$sql = "SELECT * FROM abonamenty";
$wynik = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Przychodnia Medica</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>

<header>
    <h1>Abonamenty w przychodni Medica</h1>
</header>

<nav>
    <ul>
        <li><a href="#standard">Standard</a></li>
        <li><a href="#premium">Premium</a></li>
        <li><a href="#dziecko">Dziecko</a></li>
    </ul>
</nav>

<main>
    <?php while($row = mysqli_fetch_assoc($wynik)) { ?>
        <section id="<?php echo strtolower($row['nazwa']); ?>">
            <h2><?php echo $row['nazwa']; ?></h2>
            <p>Cena: <?php echo $row['cena']; ?> zł</p>
            <button onclick="dodajUsluge('<?php echo $row['nazwa']; ?>')">Dodaj usługę</button>
            <ul id="lista-<?php echo strtolower($row['nazwa']); ?>"></ul>
        </section>
    <?php } ?>
</main>

<footer>
    <p>Stronę przygotował: 123456</p>
</footer>

<script src="skrypty.js"></script>
<script>
function dodajUsluge(nazwa) {
    let ul = document.getElementById("lista-" + nazwa.toLowerCase());
    let li = document.createElement("li");
    li.textContent = "Nowa usługa: " + nazwa;
    ul.appendChild(li);
}
</script>

</body>
</html>
