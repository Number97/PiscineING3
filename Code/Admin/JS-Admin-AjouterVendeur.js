function postVendeur() {
	var mail = document.getElementById("email-input").value;
	var nom = document.getElementById("nom-input").value;
	var prenom = document.getElementById("prenom-input").value;
	var iban = document.getElementById("iban-input").value;
	var bic = document.getElementById("bic-input").value;
	var pass = "";

	if (mail.indexOf('@') == -1 || mail.match("edu.ece.fr") == null || mail.indexOf('@') == 0) {
		$("#error-display").text("Veuillez entrer une adresse e-mail valide.");
		document.getElementById("mail-input").value = "";
		window.scroll(0, 0);
		return;
	}

	if (nom.length == 0 || prenom.length == 0 || iban.length == 0 || bic.length == 0) {
		$("#error-display").text("Veuillez remplir tous les champs.");
		window.scroll(0, 0);
		return;
	}

	var sql = "insert into vendeur values (null, '" + mail + "', '', '" + nom + "','" + prenom + "','" + bic + "', '" + iban + "', null, 1);";

	$.post("../PHP-POST.php", {"data": sql}, (data) => {
		if (data == "New record created") { // Success.
			window.location.href = "EceBay-Admin-Vendeurs.php";
		} else { // Mail already used.
			$("#error-display").text("Cette adresse mail est déjà utilisée.");
			document.getElementById("email-input").value = "";
			window.scroll(0, 0);
		}
	});
}