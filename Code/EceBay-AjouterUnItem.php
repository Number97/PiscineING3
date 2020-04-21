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
                    <li class="nav-item">
                        <a class="nav-link" href="Vendeur/EceBay-Vendre.php">Vendre
                            <br>
                            <p class="navdescription">(si connecté en tant que Vendeur)</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Admin/EceBay-Admin.php">Admin
                            <br>
                            <p class="navdescription">(si connecté en tant qu'Admin)</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    
        <div class="container">
            <br><br><br>
            <h1 style="font-size: 80px;" class="text-center">Ajout d'un article</h1><br><br><br>
            <h1 class="text-center">Informations sur l'article</h1>
            <form>
                <div class="form-group col-md-4">
                  <label for="inputState">Catégorie</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choisir la catégorie...</option>
                    <option>Ferraille ou Trésor</option>
                    <option>Bon pour le Musée</option>
                    <option>Accessoire VIP</option>
                  </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nom</label>
                    <input type="email" class="form-control" placeholder="Nom de l'item">
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile">
                    <label class="custom-file-label" for="customFile">Mettez vos photos ici</label>
                </div><br><br>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile">
                    <label class="custom-file-label" for="customFile">Mettez votre video ici (si disponible)</label>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Les premiers 100 caractères de votre description apparaitront dans la page navigation."></textarea>
                </div>
            </form>
            <div class="row">
                <div class="col-2">
                    <button type="button" class="btn btn-success" data-toggle="button" aria-pressed="false">
                        <br>Achat Immediat<br><p style="font-size: 10px;">(CLiquez pour selectionner)</p>
                    </button>
                </div>
                <div class="col-10">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Prix Achat immédiat</label>
                            <input type="email" class="form-control" placeholder="Montant en €">
                        </div>
                    </form>
                </div>
            </div><br>
            <div class="row">
                <div class="col-2">
                    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
                        <br>Enchères<br><p style="font-size: 10px;">(CLiquez pour selectionner)</p>
                    </button>
                </div>
                <div class="col-10">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Prix de départ</label>
                            <input type="email" class="form-control" placeholder="Montant en €">
                        </div>
                    </form>
                </div>
            </div><br>
            <div class="row">
                <div class="col-2">
                    <button type="button" class="btn btn-danger" data-toggle="button" aria-pressed="false">
                        <br>Meilleure Offre<br><p style="font-size: 10px;">(CLiquez pour selectionner)</p>
                    </button>
                </div>
                <div class="col-10">
                </div>
            </div><br>
            <button style="font-size: 30px; width: 1000px;" type="button" onclick="postItem();return false;" class="btn btn-info">Ajouter l'article</button>

            <br><br><br>
        </div>
    </body>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/
-->