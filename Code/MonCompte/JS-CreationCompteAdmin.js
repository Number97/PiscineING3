function postAdminInfos() {

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

	var pseu = document.getElementById("pseudo-input").value;

	if (pseu.length == 0) {
		$("#error-display").text("Veuillez remplir les champs obligatoires.");
		window.scroll(0, 0);
		return;
	}

	var bg   = "null";
	var acti = 1;

	var sql = "insert into Admin values (null,'" + mail + "','" + pass + "','" + pseu + "',";

	 if (bg == "null") sql += "null,";
	else sql += "'" + bg + "',";

	 sql += acti + ")";

	 var res;

	$.post("../PHP-POST.php", {"data" : sql}, function (data) {
		res = data;
	});

	if (res == "New record created") { // Success.
		window.location.href = "EceBay-MonCompte.html"; // Redirect.
	} else { // Mail already used.
		$("#error-display").text("Cette adresse mail est déjà utilisée.");
		document.getElementById("email-input").value = "";
		window.scroll(0, 0);
	}
}


/*
	Sources :
	https://api.jquery.com/jQuery.get/
*/