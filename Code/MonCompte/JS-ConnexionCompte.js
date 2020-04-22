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

				window.location.href = "../PagesCommunes/EceBay-Accueil.php";
			});
		} else { // Invalid.
			$("#error-acheteur").text("Identifiant et/ou mot de passe incorrect !");
			document.getElementById("login-acheteur").value = "";
			document.getElementById("password-acheteur").value = "";
		}
	});
}

function connectVendeur() {
	var user = document.getElementById("login-vendeur").value;
	var pass = document.getElementById("password-vendeur").value;

	if (user.length == 0 || pass.length == 0) {
		$("#error-vendeur").text("Remplissez les champs pour vous connecter.");
	}

	var sql = "select motdepasse, background, id from vendeur where vendeur.mail='" + user + "';";

	$.get("../PHP-GET.php", {"data" : sql}, (data) => {
		console.log(data);

		var rows = data.split('\n');

		if (rows[0] == pass) { // Connection.
			$.post("PHP-setSession.php", {"email":user, "type":"vendeur", "back":rows[1], "id":rows[2]}, (dt) => {
				console.log(dt);

				window.location.href = "../PagesCommunes/EceBay-Accueil.php";
			});
		} else { // Invalid.
			$("#error-vendeur").text("Identifiant et/ou mot de passe incorrect !");
			document.getElementById("login-vendeur").value = "";
			document.getElementById("password-vendeur").value = "";
		}
	});
}

function connectAdmin() {
	var user = document.getElementById("login-admin").value;
	var pass = document.getElementById("password-admin").value;

	if (user.length == 0 || pass.length == 0) {
		$("#error-admin").text("Remplissez les champs pour vous connecter.");
	}

	var sql = "select motdepasse, id from admin where admin.mail='" + user + "';";

	$.get("../PHP-GET.php", {"data" : sql}, (data) => {
		console.log(data);

		var rows = data.split('\n');

		if (rows[0] == pass) { // Connection.
			$.post("PHP-setSession.php", {"email":user, "type":"admin",	"id":rows[1]}, (dt) => {
				console.log(dt);

				window.location.href = "../PagesCommunes/EceBay-Accueil.php";
			});
		} else { // Invalid.
			$("#error-admin").text("Identifiant et/ou mot de passe incorrect !");
			document.getElementById("login-admin").value = "";
			document.getElementById("password-admin").value = "";
		}
	});
}