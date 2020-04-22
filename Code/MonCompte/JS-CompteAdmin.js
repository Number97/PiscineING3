function charger() {
	sql = "select * from admin where admin.id=" + id;

	$.get("../PHP-GET.php", {"data" : sql}, (data) => {
		console.log(data);

		if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
			console.log("ERROR");
			return;
		} else {
			var arr = data.split('\n');

			document.getElementById("email-input").value = ajust(arr[1]);
			document.getElementById("password-input").value = ajust(arr[2]);
			document.getElementById("pseudo-input").value = ajust(arr[3]);
		}
	});
}

function ajust(str) {
	if (str == "NULL") return "";
	return str;
}

function updateAdminInfos() {

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

	var pseu = document.getElementById("pseudo-input").value;

	var sql = "update admin set mail='" + mail + "',MotDePasse='" + pass + "',pseudo='" + pseu + "' where admin.id=" + id;

	$.post("../PHP-POST.php", {"data" : sql}, function (data) {
		
		if (data == "New record created") { // Success.
			window.location.href = "EceBay-MonCompte.php";
		} else { // Mail already used.
			console.log(data)
		}
	});
}