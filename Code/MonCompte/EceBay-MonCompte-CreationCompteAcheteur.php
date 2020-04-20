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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        
        <!------------------------Bootstrap CSS------------------------>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">        

        <!-------------------------Custom CSS-------------------------->
        <link rel="stylesheet" type="text/css" href="EceBay-MonCompte-CreationCompteAcheteur.css">

        <!-------------------------Custom JS--------------------------->
        <script src="JS-CreationCompteAcheteur.js" type="text/javascript"></script>

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
                    <li class="nav-item active">
                        <a class="nav-link" href="EceBay-MonCompte.html">Votre compte</a>
                    </li>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <br><br><br>
            <h1 style="font-size: 80px;" class="text-center">Création compte Acheteur</h1><br><br><br>
            <h1 class="text-center">Informations Personnelles</h1>

            <h5 id="error-display" style="color:red"></h5>

            <p style="color:red">Champs obligatoires marqués (*)</p>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Adresse email ECE (*)</label>
                    <input id="email-input" type="email" class="form-control" placeholder="Introduire email">
                    <small id="emailHelp" class="form-text text-muted">On ne partagera votre email avec personne.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nom (*)</label>
                    <input id="nom-input" type="text" class="form-control" placeholder="Votre nom">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Prénom (*)</label>
                    <input id="prenom-input" type="text" class="form-control" placeholder="Votre prénom">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password (au moins 6 caractères) (*)</label>
                    <input id="password-input" type="password" class="form-control" placeholder="Mot de passe">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password (*)</label>
                    <input id="password-input-repeat" type="password" class="form-control" id="Comfirmez votre mot de passe" placeholder="Confirmation mot de passe">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Adresse ligne 1 (*)</label>
                    <input id="adresse1-input" type="text" class="form-control" placeholder="Introduire adresse ligne 1">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Adresse ligne 2</label>
                    <input id="adresse2-input" type="text" class="form-control" placeholder="Introduire adresse ligne 2">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Ville (*)</label>
                    <input id="ville-input" type="text" class="form-control" placeholder="Introduire ville">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Code postal (*)</label>
                    <input id="codePostal-input" type="text" class="form-control" placeholder="Introduire code postal">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Pays (*)</label>
                    <input id="pays-input" type="text" class="form-control" placeholder="Introduire pays">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Numéro de téléphone</label>
                    <input id="telephone-input" type="text" class="form-control" placeholder="Votre numéro">
                </div>
                <button type="submit" class="btn btn-warning">Choisir image de fond</button>
            </form>

            <h1 class="text-center">Informations de Paiement</h1>
            <form action="#" onsubmit="postAcheteurInfos();return false;">
                <div class="form-group">
                    <select id="typeCarte-input" class="form-control" id="exampleFormControlSelect1">
                        <option value="1">Choisir le type de carte (*)</option>
                        <option value="2">Visa</option>
                        <option value="3">Mastercard</option>
                        <option value="4">American Express</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Numéro de carte (*)</label>
                    <input id="numeroCarte-input" type="text" class="form-control" placeholder="Votre numéro">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nom tel que sur la carte (*)</label>
                    <input id="nomSurCarte-input" type="text" class="form-control" placeholder="Introduire nom tel que sur la carte">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Date d'expiration (*)</label>
                    <input id="expiration-input" type="text" class="form-control" placeholder="mm/aaaa">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Code de sécurité (*)</label>
                    <input id="codeSecu-input" type="text" class="form-control" placeholder="CVV/CVC">
                </div>
                <button style="font-size: 30px;" type="submit" class="btn btn-primary">Création du compte</button>
            </form>
            <br><br><br>
        </div>
    </body>
</html>



<!--
    Sources:
    https://getbootstrap.com/docs/4.0/getting-started/introduction/
    https://www.w3schools.com/cssref/pr_background-color.asp
    https://getbootstrap.com/docs/4.0/components/navbar/

    https://www.codexpedia.com/javascript/submitting-html-form-without-reload-the-page/
-->