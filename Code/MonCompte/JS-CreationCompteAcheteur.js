function postAcheteurInfos() {

	var mail = document.getElementById("email-input").value;

	if (mail.indexOf('@') == -1 || mail.match("edu.ece.fr") == null || mail.indexOf('@') == 0) { // Not valid.
		$("#error-display").text("Veuillez entrer une adresse e-mail valide.");
		document.getElementById("email-input").value = "";
		window.scroll(0, 0);
		return;
	}

	var pass = document.getElementById('password-input').value;

	var dp   = document.getElementById('password-input-repeat').value;

	if (pass != dp || pass.length < 6) {
		$("#error-display").text("Veuillez entrer un mot de passe valide.");
		document.getElementById("password-input").value = "";
		document.getElementById("password-input-repeat").value = "";
		window.scroll(0, 0);
		return;
	}

	var nom  = document.getElementById('nom-input').value;
	var pren = document.getElementById("prenom-input").value;
	var adr1 = document.getElementById("adresse1-input").value;

	if (nom.length == 0 || pren.length == 0 || adr1.length == 0) {
		$("#error-display").text("Veuillez remplir les champs obligatoires.");
		window.scroll(0, 0);
		return;
	}

	var adr2 = document.getElementById("adresse2-input").value;

	if (adr2 == "") {
		adr2 = "null";
	}

	var vill = document.getElementById("ville-input").value;
	var codp = document.getElementById("codePostal-input").value;
	var pays = document.getElementById("pays-input").value;

	if (vill.length == 0 || codp.length == 0 || pays.length == 0) {
		$("#error-display").text("Veuillez remplir les champs obligatoires.");
		window.scroll(0, 0);
		return;
	}

	var tel  = document.getElementById("telephone-input").value;

	if (tel.length > 0) {
		var numbers = "0123456789";
		for (let i in tel) {
			let c = tel[i];

			if (c != '.' && numbers.indexOf(c) == -1) { // Invalid.
				document.getElementById("telephone-input").value = "";
				$("#error-display").text("Le numéro de téléphone entré est incorrect.");
				window.scroll(0, 0);
				return;
			}
		}
	}

	if (tel == "") {
		tel = "null";
	}

	var typc = document.getElementById("typeCarte-input").options[document.getElementById("typeCarte-input").selectedIndex].text;

	if (typc.indexOf('*') != -1) {
		$("#error-display").text("Veuillez choisir un type de carte.");
		window.scroll(0, 0);
		return;
	}

	var numc = document.getElementById("numeroCarte-input").value;
	var nomc = document.getElementById("nomSurCarte-input").value;
	var expr = document.getElementById("expiration-input").value;
	var codc = document.getElementById("codeSecu-input").value;

	if (numc.length == 0 || nomc.length == 0 || codc.length == 0) {
		$("#error-display").text("Veuillez remplir les champs obligatoires.");
		window.scroll(0, 0);
		return;
	} else {
		var numbers = "0123456789";
		for (let i in numc) {
			let c = tel[i];

			if (c != '.' && numbers.indexOf(c) == -1) { // Invalid.
				document.getElementById("numeroCarte-input").value = "";
				$("#error-display").text("Le numéro de carte entré est incorrect.");
				window.scroll(0, 0);
				return;
			}
		}
		for (let i in codc) {
			let c = tel[i];

			if (c != '.' && numbers.indexOf(c) == -1) { // Invalid.
				document.getElementById("codeSecu-input").value = "";
				$("#error-display").text("Le numéro de sécurité entré est incorrect.");
				window.scroll(0, 0);
				return;
			}
		}
	}

	if (expr.length == 7) {
		var m = expr.substring(0, 2);
		var y = expr.substring(3, 7);
		var b = true;

		for (let i in m) {
			let c = tel[i];

			if (c != '.' && numbers.indexOf(c) == -1) { // Invalid.
				b = false;
			}
		}
		for (let i in y) {
			let c = tel[i];

			if (c != '.' && numbers.indexOf(c) == -1) { // Invalid.
				b = false;
			}
		}
		if (b == false) {
			document.getElementById("expiration-input").value = "";
			$("#error-display").text("La date d'expiration entrée est incorrecte.");
			window.scroll(0, 0);
			return;
		}
	} else {
		document.getElementById("expiration-input").value = "";
		$("#error-display").text("La date d'expiration entrée est incorrecte.");
		window.scroll(0, 0);
		return;
	}

	var bg   = document.getElementById("background_name").innerHTML;

	if (bg.length == 0) bg = "null";

	var acti = 1;

	var sql = "insert into Client values (null,'" + mail + "','" + pass + "','" + nom + "','" + pren + "','" + adr1 + "',";

	if (adr2 == "null") sql += "null,";
	else sql += "'" + adr2 + "',"; 
	
	sql += "'" + vill + "','" + codp + "','" + pays + "',";

	if (tel == "null") sql += "null,";
	else sql += "'" + tel + "',";

	 sql += "'" + typc + "','" + numc + "','" + nomc + "','" + expr + "','" + codc + "',";

	 if (bg == "null") sql += "null,";
	else sql += "'" + bg + "',";

	 sql += acti + ")";

	 var res;
console.log(sql);
	$.post("../PHP-POST.php", {"data" : sql}, function (data) {
		res = data;
		console.log(data);
	});

	if (res == "New record created") { // Success.
		window.location.href = "EceBay-MonCompte.html";
	} else { // Mail already used.
		$("#error-display").text("Cette adresse mail est déjà utilisée.");
		document.getElementById("email-input").value = "";
		window.scroll(0, 0);
	}
}

function background_click(clicked_id) {
	document.getElementById("background_name").innerHTML = clicked_id;
	if(clicked_id != "../Backgrounds/Abstract 1.jpeg")
	{
		document.getElementById("../Backgrounds/Abstract 1.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Abstract 2.jpeg")
	{
		document.getElementById("../Backgrounds/Abstract 2.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Abstract 3.jpeg")
	{
		document.getElementById("../Backgrounds/Abstract 3.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Abstract 4.jpeg")
	{
		document.getElementById("../Backgrounds/Abstract 4.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Abstract 5.jpeg")
	{
		document.getElementById("../Backgrounds/Abstract 5.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Colors.jpeg")
	{
		document.getElementById("../Backgrounds/Colors.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Sunset.jpeg")
	{
		document.getElementById("../Backgrounds/Sunset.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Pink Clouds.jpeg")
	{
		document.getElementById("../Backgrounds/Pink Clouds.jpeg").style.filter = "blur(0px)";

	}
	if(clicked_id != "../Backgrounds/Green Clouds.jpeg")
	{
		document.getElementById("../Backgrounds/Green Clouds.jpeg").style.filter = "blur(0px)";

	}
	document.getElementById(clicked_id).style.filter = "blur(10px)";
}


/*
	Sources :
	https://api.jquery.com/jQuery.get/
*/