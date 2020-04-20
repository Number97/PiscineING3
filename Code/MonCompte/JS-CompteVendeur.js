function charger() {
	sql = "select * from Vendeur where Vendeur.id=" + id;

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
			document.getElementById("bic-input").value = ajust(arr[5]);
			document.getElementById("iban-input").value = ajust(arr[6]);


			document.getElementById("background-input").value = ajust(arr[7]);
			background_click(arr[7]);
		}
	});
}

function ajust(str) {
	if (str == "NULL") return "";
	return str;
}

function updateVendeurInfos() {

	var mail = document.getElementById("email-input").value;

	if (mail.indexOf('@') == -1 || mail.match("edu.ece.fr") == null || mail.indexOf('@') == 0) { // Not valid.
		$("#error-display").text("Veuillez entrer une adresse e-mail valide.");
		return;
	}

	var pass = document.getElementById('password-input').value;
console.log("ok");
	if (pass.length < 6) {
		$("#error-display").text("Veuillez entrer un mot de passe valide.");
		document.getElementById("password-input").value = "";
		return;
	}

	var nom  = document.getElementById('nom-input').value;
	var pren = document.getElementById("prenom-input").value;

	if (nom.length == 0 || pren.length == 0) {
		$("#error-display").text("Veuillez remplir les champs obligatoires.");
		return;
	}


	var bic  = document.getElementById("bic-input").value;
	var iban = document.getElementById("iban-input").value;
	var bg   = document.getElementById("background-input").value;

	if (bg.length == 0) bg = "null";

	var sql = "update Vendeur set mail='" + mail + "',MotDePasse='" + pass + "',nom='" + nom + "',prenom='" + pren + "',";
	sql += "bic='" + bic + "',iban='" + iban + "',";
	
	 if (bg == "null") sql += "background=null";
	else sql += "background='" + bg + "' ";

	sql += "where vendeur.id=" + id;

console.log(sql);

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