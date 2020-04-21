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
        <link rel="stylesheet" type="text/css" href="EceBay-Panier.css">

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
                    <li class="nav-item">
                        <a class="nav-link" href="../MonCompte/EceBay-MonCompte.php">Votre compte</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="EceBay-Panier.php">Panier<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <div class="container">
            <br><br>
            <h1 class="text-center">Votre Panier</h1>
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
                <form style="margin: 10px;">
                    <button class="btn btn-primary">Filtrer</button>
                </form>
            </div>
            
            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 60px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article1.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 58px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 1</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #0275d8;height: 58px;">
                                    <h6 class="card-title" style="color: white;">Enchères</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">250 €</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-md-2">
                    <form style="margin: 10px;">
                        <button class="btn btn-secondary">Supprimer</button>
                    </form>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 60px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article4.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 58px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 4</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #5cb85c;height: 58px;">
                                    <h6 class="card-title" style="color: white;">Achat Immédiat</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">63 200 €</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-md-2">
                    <form style="margin: 10px;">
                        <button class="btn btn-secondary">Supprimer</button>
                    </form>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 60px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article13.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 58px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 13</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #d9534f;height: 58px;">
                                    <h6 class="card-title" style="color: white;">Meilleure Offre</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">100 €</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-md-2">
                    <form style="margin: 10px;">
                        <button class="btn btn-secondary">Supprimer</button>
                    </form>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 60px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article5.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 58px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 5</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #5cb85c;height: 58px;">
                                    <h6 class="card-title" style="color: white;">Achat Immédiat</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">40 104 €</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-md-2">
                    <form style="margin: 10px;">
                        <button class="btn btn-secondary">Supprimer</button>
                    </form>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 60px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article14.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 58px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 14</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #5cb85c;height: 58px;">
                                    <h6 class="card-title" style="color: white;">Achat Immédiat</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">321 098 €</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-md-2">
                    <form style="margin: 10px;">
                        <button class="btn btn-secondary">Supprimer</button>
                    </form>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 60px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article9.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 58px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 9</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #0275d8;height: 58px;">
                                    <h6 class="card-title" style="color: white;">Enchères</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">54 €</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-md-2">
                    <form style="margin: 10px;">
                        <button class="btn btn-secondary">Supprimer</button>
                    </form>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-10">
                    <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 60px;">
                        <div class="row no-gutters">
                            <div class="col-md-6"  style="font-size: 20px;" >
                                <img src="../Articles/Article7.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 58px;">
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">Article 7</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body" style="background-color: #0275d8;height: 58px;">
                                    <h6 class="card-title" style="color: white;">Enchères</h6>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="card-body">
                                    <h6 class="card-title">731 €</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-md-2">
                    <form style="margin: 10px;">
                        <button class="btn btn-secondary">Supprimer</button>
                    </form>
                </div>
            </div>
            <br><br>

            <div class="row">
                <div class="col-md-8">
                    <button style="font-size: 30px;" type="submit" class="btn btn-dark">Vider le panier</button>
                </div>
                <div class="col-md-4">
                    <button style="font-size: 30px;" type="submit" class="btn btn-info">Passer la commande</button>
                </div>
            </div><br><br>
        </div>
    </body>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
    https://colorswall.com/palette/3/
-->