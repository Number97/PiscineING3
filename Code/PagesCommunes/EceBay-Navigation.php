<!--

    Pierre HERDUIN & Ernest POPOVICI TD03
    Projet Piscine Web Dynamique
    15/04/2020

    Cette page html a été créé dans le cadre du projet Piscine de Web Dynamique et n'a aucun but commercial

-->

<?php
session_start();
if (!empty($_SESSION["type"])) {
    echo '<script type="text/javascript">',
         'var session_id = ' . $_SESSION["id"] . ';',
         'var session_type =\'' . $_SESSION["type"] . '\';',
         'var session_background =\'' . $_SESSION["back"] . '\';',
         'var session_email =\'' . $_SESSION["email"] . '\';',
         'var nobody = false;',
         '</script>';
} else { 
    echo '<script type="text/javascript">',
         'var nobody = true;',
         '</script>';
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
        <link rel="stylesheet" type="text/css" href="EceBay-Navigation.css">

        <!-------------------------Custom JS--------------------------->
        <script src="JS-Navigation.js" type="text/javascript"></script>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" style="font-size: 20px" href="EceBay-Accueil.php">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="EceBay-Navigation.php">Navigation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../MonCompte/EceBay-MonCompte.php">Votre compte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Acheteur/EceBay-Panier.php">Panier
                            <br>
                            <p class="navdescription">(si connecté en tant qu'Acheteur)</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Vendeur/EceBay-Vendre.php">Vendre
                            <br>
                            <p class="navdescription">(si connecté en tant que Vendeur)</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Admin/EceBay-Admin.php">Admin
                            <br>
                            <p class="navdescription">(si connecté en tant qu'Admin)</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <br><br>
            <h1 class="text-center" style="background-color: lightgrey">Navigation</h1>

            <div>
                <div>
                    <label class="btn btn-info active">
                        <input type="checkbox" id="feraillecheck" checked> Feraille ou Trésor
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" id="boncheck" checked> Bon pour le Musée
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" id="vipcheck" checked> Accessoire VIP
                    </label>
                    <label style="margin-left: 100px;" class="btn btn-info active">
                        <input type="checkbox" id="encherecheck" checked> Enchères
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" id="negociationcheck" checked> Meilleure Offre
                    </label>
                    <label class="btn btn-info active">
                        <input type="checkbox" id="directcheck" checked> Achat immédiat
                    </label>
                </div>
            </div>
            <div>
                <form style="margin: 10px;">
                    <button type="button" onclick="loadItems(true)" class="btn btn-primary">Filtrer</button>
                </form>
            </div>
            <div id="main-container">
                
            </div>
            
        </div>
    </body>
    <script>
        loadItems(false);
    </script>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
    https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
    https://www.w3schools.com/howto/howto_js_image_grid.asp
-->