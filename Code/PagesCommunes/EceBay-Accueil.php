<!--

    Pierre HERDUIN & Ernest POPOVICI TD03
    Projet Piscine Web Dynamique
    15/04/2020

    Cette page html a été créé dans le cadre du projet Piscine de Web Dynamique et n'a aucun but commercial

-->

<!DOCTYPE html>
<html>
	<head> 
		<title>ECEBAY</title>
		<meta charset="utf-8">
		<!--Controle de la mise en page sur les navigateurs mobiles-->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!---------------------JQuery - JavaScript--------------------->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        
        <!------------------------Bootstrap CSS------------------------>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">        

        <!-------------------------Custom CSS-------------------------->
        <link rel="stylesheet" type="text/css" href="EceBay-Accueil.css">

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" style="font-size: 20px" href="EceBay-Accueil.html">Accueil<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../PagesCommunes/EceBay-Navigation.html">Navigation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../MonCompte/EceBay-MonCompte.php">Votre compte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Acheteur/EceBay-Panier.html">Panier
                            <br>
                            <p class="navdescription">(si connecté en tant qu'Acheteur)</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Vendeur/EceBay-Vendre.html">Vendre
                            <br>
                            <p class="navdescription">(si connecté en tant que Vendeur)</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../Admin/EceBay-Admin.html">Admin
                            <br>
                            <p class="navdescription">(si connecté en tant qu'Admin)</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <br><br><br><br><br><br><br>
        <h1 class="text-center" style="font-size: 200px;">Bienvenue!</h1>
    </body>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
    https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
    https://www.w3schools.com/howto/howto_js_image_grid.asp
-->