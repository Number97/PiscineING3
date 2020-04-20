function postAdmin() {
	var mail = document.getElementById("mail-input").value;
	var pass = document.getElementById("password-input").value;
	var pasr = document.getElementById("password-input-repeat").value;
	var pseu = document.getElementById("pseudo-input").value;

	if (mail.indexOf('@') == -1 || mail.match("edu.ece.fr") == null || mail.indexOf('@') == 0) {
		$("#error-display").text("Veuillez entrer une adresse e-mail valide.");
		document.getElementById("mail-input").value = "";
		window.scroll(0, 0);
		return;
	}

	if (pass.length < 6 || pass != pasr) {
		$("#error-display").text("Veuillez entrer un mot de passe valide.");
		document.getElementById("password-input").value = "";
		document.getElementById("password-input-repeat").value = "";
		window.scroll(0, 0);
		return;
	}

	if (pseu.length < 3) {
		$("#error-display").text("Veuillez entrer un pseudo valide.");
		document.getElementById("pseudo-input").value = "";
		window.scroll(0, 0);
		return;
	}

	var sql = "insert into admin values (null, '" + mail + "', '" + pass + "', '" + pseu + "');";

	$.post("../PHP-POST.php", {"data": sql}, (data) => {
		if (data == "New record created") { // Success.
			window.location.href = "EceBay-Admin-Admins.php";
		} else { // Mail already used.
			$("#error-display").text("Cette adresse mail est déjà utilisée.");
			document.getElementById("email-input").value = "";
			window.scroll(0, 0);
		}
	});
}