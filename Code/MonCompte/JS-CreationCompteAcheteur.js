function postAcheteurInfos() {

	var mail = document.getElementById("email-input").value;
	var pass = document.getElementById('password-input').value;
	var nom  = document.getElementById('nom-input').value;
	var pren = document.getElementById("prenom-input").value;
	var adr1 = document.getElementById("adresse1-input").value;
	var adr2 = document.getElementById("adresse2-input").value;
	var vill = document.getElementById("ville-input").value;
	var codp = document.getElementById("codePostal-input").value;
	var pays = document.getElementById("pays-input").value;
	var tel  = document.getElementById("telephone-input").value;
	var typc = document.getElementById("typeCarte-input").options[document.getElementById("typeCarte-input").selectedIndex].text;
	var numc = document.getElementById("numeroCarte-input").value;
	var nomc = document.getElementById("nomSurCarte-input").value;
	var expr = document.getElementById("expiration-input").value;
	var codc = document.getElementById("codeSecu-input").value;
	var bg   = "null";
	var acti = 1;

	expr = "2020-30-01";
	adr2 = "null";

	var sql = "insert into Client values (null,'" + mail + "','" + pass + "','" + nom + "','" + pren + "','" + adr1 + "','" + 
			  adr2 + "','" + vill + "','" + codp + "','" + pays + "','" + tel + "','" + typc + "','" + numc + "','" + nomc + "','" +
			  expr + "','" + codc + "','" + bg + "'," + acti + ")";
	
	$.post("PHP-CreationCompteAcheteur-POST.php", {"data" : sql}, function (data) {
		console.log(data);
	});

	// GET POUR RECEVOIR DES DONNEES DEPUIS LA BDD.
	// $.get("PHP-CreationCompteAcheteur-GET.php", {"data" : sql}, function (data) {
	// 	console.log(data);
	// });
}