function charger() {
	sql = "select * from Client where Client.id=" + id;

	$.get("../PHP-GET.php", {"data" : sql}, (data) => {
		console.log(data);

		if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
			console.log("ERROR");
			return;
		} else {
			var arr = data.split('\n');

			document.getElementById("email-input").value = ajust(arr[1]);
			document.getElementById("password-input").value = ajust(arr[2]);
			document.getElementById("nom-input").value = ajust(arr[3]);
			document.getElementById("prenom-input").value = ajust(arr[4]);
			document.getElementById("adresse1-input").value = ajust(arr[5]);
			document.getElementById("adresse2-input").value = ajust(arr[6]);
			document.getElementById("ville-input").value = ajust(arr[7]);
			document.getElementById("codePostal-input").value = ajust(arr[8]);
			document.getElementById("pays-input").value = ajust(arr[9]);
			document.getElementById("telephone-input").value = ajust(arr[10]);

			var op = document.getElementById("typeCarte-input").options;

			for (let i = 0; i < op.length; i++) {
				if (op[i].label == arr[11]) {
					document.getElementById("typeCarte-input").selectedIndex = i;
					break;
				}
			}

			document.getElementById("numeroCarte-input").value = ajust(arr[12]);
			document.getElementById("nomSurCarte-input").value = ajust(arr[13]);

			var d = arr[14];
			var s = d.substring(5, 7) + '/' + d.substring(0, 4);

			document.getElementById("expiration-input").value = s;

			document.getElementById("codeSecu-input").value = ajust(arr[15]);
			document.getElementById("background-input").value = ajust(arr[16]);
			background_click(arr[16]);
		}
	});
}

function ajust(str) {
	if (str == "NULL") return "";
	return str;
}

function updateAcheteurInfos() {

	var mail = document.getElementById("email-input").value;

	if (mail.indexOf('@') == -1 || mail.match("edu.ece.fr") == null || mail.indexOf('@') == 0) { // Not valid.
		$("#error-display").text("Veuillez entrer une adresse e-mail valide.");
		return;
	}

	var pass = document.getElementById('password-input').value;

	if (pass.length < 6) {
		$("#error-display").text("Veuillez entrer un mot de passe valide.");
		document.getElementById("password-input").value = "";
		return;
	}

	var nom  = document.getElementById('nom-input').value;
	var pren = document.getElementById("prenom-input").value;
	var adr1 = document.getElementById("adresse1-input").value;

	if (nom.length == 0 || pren.length == 0 || adr1.length == 0) {
		$("#error-display").text("Veuillez remplir les champs obligatoires.");
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
		return;
	}

	var numc = document.getElementById("numeroCarte-input").value;
	var nomc = document.getElementById("nomSurCarte-input").value;
	var expr = document.getElementById("expiration-input").value;
	var codc = document.getElementById("codeSecu-input").value;

	if (numc.length == 0 || nomc.length == 0 || codc.length == 0) {
		$("#error-display").text("Veuillez remplir les champs obligatoires.");
		return;
	} else {
		var numbers = "0123456789";
		for (let i in numc) {
			let c = numc[i];

			if (numbers.indexOf(c) == -1) { // Invalid.
				$("#error-display").text("Le numéro de carte entré est incorrect.");
				window.scroll(0, 0);
				return;
			}
		}
		for (let i in codc) {
			let c = codc[i];

			if (numbers.indexOf(c) == -1) { // Invalid.
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
		expr = y + "-" + m + "-01";
	} else {
		document.getElementById("expiration-input").value = "";
		$("#error-display").text("La date d'expiration entrée est incorrecte.");
		return;
	}

	var bg   = document.getElementById("background-input").innerHTML;

	if (bg.length == 0) bg = "null";

	var sql = "update Client set mail='" + mail + "',MotDePasse='" + pass + "',nom='" + nom + "',prenom='" + pren + "',adresse1='" + adr1 + "',";

	if (adr2 == "null") sql += "adresse2=null,";
	else sql += "adresse2='" + adr2 + "',"; 
	
	sql += "ville='" + vill + "',codepostal='" + codp + "',pays='" + pays + "',";

	if (tel == "null") sql += "telephone=null,";
	else sql += "telephone='" + tel + "',";

	 sql += "typecarte='" + typc + "',numerocarte='" + numc + "',nomsurcarte='" + nomc + "',expiration='" + expr + "',codesecurite='" + codc + "',";

	 if (bg == "null") sql += "background=null";
	else sql += "background='" + bg + "' ";

	sql += "where client.id=" + id;

	$.post("../PHP-POST.php", {"data" : sql}, function (data) {

		if (data == "New record created") { // Success.
			window.location.href = "EceBay-MonCompte.php";
		} else { // Mail already used.
			console.log(data)
		}
	});
}

function background_click(clicked_id) {
	document.getElementById("background-input").innerHTML = clicked_id;
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