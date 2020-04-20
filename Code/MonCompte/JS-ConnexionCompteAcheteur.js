function connectAcheteur() {
	var user = document.getElementById("login-acheteur").value;
	var pass = document.getElementById("password-acheteur").value;

	if (user.length == 0 || pass.length == 0) {
		$("#error-acheteur").text("Remplissez les champs pour vous connecter.");
	}

	var sql = "select motdepasse, background, id from Client where Client.mail='" + user + "';";

	$.get("../PHP-GET.php", {"data" : sql}, (data) => {
		console.log(data);

		var rows = data.split('\n');

		if (rows[0] == pass) { // Connection.
			$.post("PHP-setSession.php", {"email":user, "type":"acheteur", "back":rows[1], "id":rows[2]}, (dt) => {
				console.log(dt);

				window.location.href = "EceBay-MonCompte.php";
			});
		} else { // Invalid.
			$("#error-acheteur").text("Identifiant et/ou mot de passe incorrect !");
			document.getElementById("login-acheteur").value = "";
			document.getElementById("password-acheteur").value = "";
		}
	});
}