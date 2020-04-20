<!--

    Pierre HERDUIN & Ernest POPOVICI TD03
    Projet Piscine Web Dynamique
    15/04/2020

    Cette page html a été créé dans le cadre du projet Piscine de Web Dynamique et n'a aucun but commercial

-->

<?php

session_start();

if (!empty($_SESSION["type"])) {
    if ($_SESSION["type"] == "acheteur") {
        echo '<script type="text/javascript">',
             'window.location.href = \'../PagesCommunes/EceBay-Accueil.html\';',
             '</script>';
    }
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
        <link rel="stylesheet" type="text/css" href="EceBay-MonCompte.css">

        <!-------------------------Custom JS--------------------------->
        <script src="JS-ConnexionCompteAcheteur.js" type="text/javascript"></script>

    </head>
    <body>
        <?php
        print_r($_SESSION);
        ?>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" style="font-size: 20px" href="../PagesCommunes/EceBay-Accueil.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../PagesCommunes/EceBay-Navigation.html">Navigation</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="EceBay-MonCompte.php">Votre compte</a>
                    </li>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <br><br><br>
            <h1 style="font-size: 80px;" class="text-center">Connection en tant que</h1><br><br><br>
				
            <div class="row">
                <a style="font-size: 50px;margin: auto;" class="btn btn-dark" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Acheteur</a>
                <button style="font-size: 50px;margin: auto;" class="btn btn-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Vendeur</button>
                <button style="font-size: 50px;margin: auto;" class="btn btn-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample2">Admin</button>
            </div>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="card card-body">
                            <!-- Login Form -->
                            <form action="#" onsubmit="connectAcheteur();return false;">
                                <p id="error-acheteur" style="color:red"></p>
                                <input type="text" id="login-acheteur" class="fadeIn second" name="login" placeholder="Utilisateur">
                                <input type="password" id="password-acheteur" class="fadeIn third" name="login" placeholder="Mot de passe">
                                <input style="font-size: 10px;margin: left;" type="submit" class="btn btn-secondary btn-lg btn-block" value="Connexion">
                            </form>
                        
                            <!-- Remind Passowrd -->
                            <div id="formFooter">
                                <a class="underlineHover" href="#">Recupérez votre mot de passe</a>
                            </div>
                        </div>
                    </div>
                    <a style="font-size: 10px;margin: left;margin-left: 100px;" class="btn btn-secondary" href="EceBay-MonCompte-CreationCompteAcheteur.php" role="button">Créer un compte Acheteur</a>
                </div>
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div class="card card-body">
                            <!-- Login Form -->
                            <form>
                                <input type="text" id="login-vendeur" class="fadeIn second" name="login" placeholder="Utilisateur">
                                <input type="password" id="password-vendeur" class="fadeIn third" name="login" placeholder="Mot de passe">
                                <a style="font-size: 10px;margin: left;" class="btn btn-secondary btn-lg btn-block" href="EceBay-MonCompte-Vendeur.html" role="button">Connexion</a>
                            </form>
                        
                            <!-- Remind Passowrd -->
                            <div id="formFooter">
                                <a class="underlineHover" href="#">Recupérez votre mot de passe</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample3">
                        <div class="card card-body">
                            <!-- Login Form -->
                            <form>
                                <input type="text" id="login-admin" class="fadeIn second" name="login" placeholder="Utilisateur">
                                <input type="password" id="password-admin" class="fadeIn third" name="login" placeholder="Mot de passe">
                                <a style="font-size: 10px;margin: left;" class="btn btn-secondary btn-lg btn-block" href="EceBay-MonCompte-Admin.html" role="button">Connexion</a>
                            </form>
                        
                            <!-- Remind Passowrd -->
                            <div id="formFooter">
                                <a class="underlineHover" href="#">Recupérez votre mot de passe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
    https://bootsnipp.com/snippets/dldxB
    https://getbootstrap.com/docs/4.4/components/collapse/
-->