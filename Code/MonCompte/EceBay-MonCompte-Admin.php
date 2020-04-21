<!--

    Pierre HERDUIN & Ernest POPOVICI TD03
    Projet Piscine Web Dynamique
    15/04/2020

    Cette page html a été créé dans le cadre du projet Piscine de Web Dynamique et n'a aucun but commercial

-->

<?php

session_start();

if (!empty($_SESSION["type"])) {
    if ($_SESSION["type"] == "admin") {
        echo '<script type="text/javascript">',
             'var id = ' . $_SESSION["id"] . ';',
             '</script>';
    } else die();
}

?>

<!DOCTYPE html>
<html>
	<head> 
		<title>ECEBAY</title>
		<meta charset="utf-8">

		<!--Controle de la mise en page sur les navigateurs mobiles-->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!---------------------JQuery - JavaScript--------------------->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        
        <!------------------------Bootstrap CSS------------------------>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">        

        <!-------------------------Custom CSS-------------------------->
        <link rel="stylesheet" type="text/css" href="EceBay-MonCompte-Acheteur.css">

        <!-------------------------Custom JS--------------------------->
        <script src="JS-CompteAdmin.js" type="text/javascript"></script>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" style="font-size: 20px" href="../PagesCommunes/EceBay-Accueil.php">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../PagesCommunes/EceBay-Navigation.php">Navigation</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="EceBay-MonCompte.php">Votre compte</a>
                    </li>
                    <li class="nav-item">
                        <a id="navadmin" class="nav-link" href="../Admin/EceBay-Admin.php">Admin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="deconnexion.php">Déconnexion</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <br><br><br>
            <h1 style="font-size: 80px;" class="text-center">Mon compte Administrateur</h1><br><br><br>
            <h1 class="text-center">Informations Personnelles</h1>
            <form onsubmit="updateAdminInfos();return false;">
                <div class="form-group">
                    <label for="exampleInputEmail1">Adresse email ECE (*)</label>
                    <input id="email-input" type="email" class="form-control" placeholder="Introduire email">
                    <small id="emailHelp" class="form-text text-muted">On ne partagera votre email avec personne.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Pseudo (*)</label>
                    <input id="pseudo-input" type="text" class="form-control" placeholder="Votre nom">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password (au moins 6 caractères) (*)</label>
                    <input id="password-input" type="password" class="form-control" placeholder="Mot de passe">
                </div>
                <button style="font-size: 10px;" type="submit" class="btn btn-secondary">Sauvegarder les modifications</button>
            </form>
            <br><br><br>
        </div>
    </body>
    <script>
        charger();
    </script>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
-->