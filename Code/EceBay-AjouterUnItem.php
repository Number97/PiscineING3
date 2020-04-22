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
             'var type="admin";',
             '</script>';
    } else if ($_SESSION["type"] == "vendeur") {
        echo '<script type="text/javascript">',
             'var type="vendeur";',
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
        <link rel="stylesheet" type="text/css" href="EceBay-AjouterUnItem.css">

        <!-------------------------Custom JS--------------------------->
        <script type="text/javascript" src="JS-AjouterItem.js"></script>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" style="font-size: 20px" href="PagesCommunes/EceBay-Accueil.php">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="PagesCommunes/EceBay-Navigation.php">Navigation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="MonCompte/EceBay-MonCompte.php">Votre compte</a>
                    </li>
                    <li id="vendre" class="nav-item">
                        <a class="nav-link" href="Vendeur/EceBay-Vendre.php">Vendre
                        </a>
                    </li>
                    <li id="admin" class="nav-item">
                        <a class="nav-link" href="Admin/EceBay-Admin.php">Admin
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="MonCompte/deconnexion.php">Déconnexion</a>
                    </li>
                </ul>
            </div>
        </nav>
    
        <div class="container">
            <br><br><br>
            <h1 style="font-size: 80px;" class="text-center">Ajout d'un article</h1><br><br><br>
            <h1 class="text-center">Informations sur l'article</h1>
            <h5 id="error-display" style="color: red"></h5>

            <form>
                <div class="form-group col-md-4">
                  <label for="inputState">Catégorie</label>
                  <select id="categorie-input" class="form-control">
                    <option selected>Choisir la catégorie...</option>
                    <option>Ferraille ou Trésor</option>
                    <option>Bon pour le Musée</option>
                    <option>Accessoire VIP</option>
                  </select>
                </div>
                <div id="vendeur-div" class="form-group">
                    <label for="exampleInputEmail1">Vendeur</label>
                    <input id="vendeur-input" type="text" class="form-control" placeholder="Id du vendeur">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nom</label>
                    <input id="nom-input" type="text" class="form-control" placeholder="Nom de l'item">
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="file-input" accept=".jpeg" onchange="putOnLabel(this)">
                    <label id="label-file" class="custom-file-label" for="customFile">Mettez votre photo ici (.jpeg)</label>
                </div><br><br>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="description-input" rows="10" placeholder="Les premiers 100 caractères de votre description apparaitront dans la page navigation."></textarea>
                </div>
            </form>
            <div class="row">
                <div class="col-2">
                    <button id="achat-input" type="button" class="btn btn-success" data-toggle="button" aria-pressed="false" onclick="toggle(this);" style="background-color: green">
                        <br>Achat Immediat<br><p style="font-size: 10px;">(CLiquez pour selectionner)</p>
                    </button>
                </div>
                <div class="col-10">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Prix Achat immédiat</label>
                            <input disabled=true id="prix-achat-input" type="number" class="form-control" placeholder="Montant en €">
                        </div>
                    </form>
                </div>
            </div><br>
            <div class="row">
                <div class="col-2">
                    <button id="enchere-input" type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" onclick="toggle(this);" style="background-color: blue">
                        <br>Enchères<br><p style="font-size: 10px;">(CLiquez pour selectionner)</p>
                    </button>
                </div>
                <div class="col-10">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Prix de départ</label>
                            <input disabled=true id="prix-enchere-input" type="text" class="form-control" placeholder="Montant en €">
                        </div>
                    </form>
                </div>
            </div><br>
            <div class="row">
                <div class="col-2">
                    <button id="offre-input" type="button" class="btn btn-danger" data-toggle="button" aria-pressed="false" onclick="toggle(this);" style="background-color: red">
                        <br>Meilleure Offre<br><p style="font-size: 10px;">(CLiquez pour selectionner)</p>
                    </button>
                </div>
                <div class="col-10">
                </div>
            </div><br>
            <button style="font-size: 30px; width: 1000px;" type="button" onclick="postItem();return false;" class="btn btn-info">Ajouter l'article</button>

            <br><br><br>
        </div>
        <script type="text/javascript">
            if (type == "admin") {
                $("#vendre").hide();
            } else if (type == "vendeur") {
                $("#admin").hide();
                $("#vendeur-div").hide();
            }
        </script>
    </body>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
-->