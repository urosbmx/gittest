<?php
$ime = $_POST['ime'];
$mail =$_POST['emailAdresa'];
$porukica = $_POST['mesage'];

if(empty($ime)){
    $ime = "Korisnik";
}
$brojac = 0;

if(empty($porukica)){
    $porukica="korisnik nije ostavio poruku";
}
else{
    $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
    fwrite($myfile, $porukica);
    fclose($myfile);
}


?>

<html>
<head>
</head>

<body>
    <p>Pozdrav <?php print_r($ime) ?> dragomije sto ste me kontaktirali u sto kracem roku cu vam odgovoriti na vase pitanje na mail koji ste ostavili <?php print_r ($mail) ?></p>

</body>

</html>