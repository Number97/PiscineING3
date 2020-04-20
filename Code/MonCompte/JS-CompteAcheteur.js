function test() {
	sql = "select * from Client where Client.mail='pierre.herduin@edu.ece.fr'";

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
			document.getElementById("expiration-input").value = ajust(arr[14]);
			document.getElementById("codeSecu-input").value = ajust(arr[15]);

			// document.getElementById("background-input").value = ajust(arr[16]);
		}
	});
}

function ajust(str) {
	if (str == "NULL") return "";
	return str;
}