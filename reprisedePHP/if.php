<!-- EXERCICE 1 -->
<?php
$note = readline('Entrez votre note :');
if ($note > 10) {
    echo 'Bravo vous avez la moyenne';
} else if ($note == 10) {
    echo 'Vous avez juste la moyenne';
}
else {
    echo 'Dommage! Vous n\'avez pas la moyenne';
}
?>

<!-- EXERCICE 2 -->
<?php
$action = (int)readline('Entre votre action : (1: attaquer, 2:défendre, 3: passer mon tour)');
if ($action === 1) {
    echo 'J\'attaque !';
} elseif ($action === 2) {
    echo 'Je défends';
} elseif ($action === 3) {
    echo 'Je passe mon tour';
} else {
    echo 'Commande inconnue';
}
?>

<!-- EXERCICE 3 -->
<?php
$action = (int)readline('Entre votre action : (1: attaquer, 2:défendre, 3: passer mon tour)');
switch ($action) {
    case 1:
        echo 'J\'attaque mec!';
        echo 'Bouge pas petit';
        break;
    case 2:
        echo 'Je défends';
        echo 'J\'esquive man';
        break;
    case 3:
        echo 'Euh laisse moi tranquille srx';
        echo 'Sa sfai ap';
        break;
    default:
        echo 'Commande inconnue';
}
?>

