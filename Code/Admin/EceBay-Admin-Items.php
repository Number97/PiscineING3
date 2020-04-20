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
        <link rel="stylesheet" type="text/css" href="EceBay-Admin-Items.css">

        <!-------------------------Custom JS--------------------------->
        <script type="text/javascript" src="JS-Admin-Items.js"></script>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" style="font-size: 20px" href="../PagesCommunes/EceBay-Accueil.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../PagesCommunes/EceBay-Navigation.html">Navigation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../MonCompte/EceBay-MonCompte.php">Votre compte</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="EceBay-Admin.html">Admin<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <br><br>
            <h1 class="text-center">Tous les Articles</h1>
            <div class="form-row" style="margin: 15px;">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Recherche</button>
                </form>
            </div>
            <div>
                <div>
                    <label class="btn btn-info active">
                        <input type="checkbox" autocomplete="off"> Feraille ou Trésor
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" autocomplete="off"> Bon pour le Musée
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" autocomplete="off"> Accessoire VIP
                    </label>
                    <label style="margin-left: 100px;" class="btn btn-info active">
                        <input type="checkbox" autocomplete="off"> Enchères
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" autocomplete="off"> Meilleure Offre
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" autocomplete="off"> Achat immédiat
                    </label>
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col-md-8"></div>
                    <div class="col-md-4">
                        <a style="font-size: 50px;margin: auto;" class="btn btn-info" href="../EceBay-AjouterUnItem.html" role="button">Ajouter un Article</a>
                    </div>
                </div>
            </div>
            <br>

            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 70px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article1.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 68px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 1</h6>
                                    <p class="card-text" style="font-size: 10px;">Se termine dans 72h</p>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #0275d8;height: 68px;">
                                    <h6 class="card-title" style="color: white;">Enchères</h6>
                                    <p class="card-text" style="color: white; font-size: 10px;">267 € par Jean Segado</p>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #5cb85c;height: 68px;">
                                    <h6 class="card-title" style="color: white;">Achat Immédiat</h6>
                                    <p class="card-text" style="color: white; font-size: 10px;">1 000 €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1">
                    <form style="margin: 10px;">
                        <button class="btn btn-dark">Supprimer</button>
                    </form>
                </div>
            </div>            
            
            <br><br><br><br>
        </div>
        <script type="text/javascript">charge();</script>
    </body>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
-->