function postItem() {
	var cat  = document.getElementById("categorie-input").options[document.getElementById("categorie-input").selectedIndex].label;
	var nom  = document.getElementById("nom-input").value;
	var vend = document.getElementById("vendeur-input").value;
	var file = document.getElementById("file-input").value.split('\\');
	file = file[file.length - 1];
	var desc = document.getElementById("description-input").value;
	var acha = document.getElementById("achat-input").getAttribute("aria-pressed");
	var ench = document.getElementById("enchere-input").getAttribute("aria-pressed");
	var offr = document.getElementById("offre-input").getAttribute("aria-pressed");
	var pach = document.getElementById("prix-achat-input").value;	
	var penc = document.getElementById("prix-enchere-input").value;	

	if (cat == "Choisir la catégorie...") {
		$("#error-display").text("Veuillez choisir une catégorie !");
		window.scroll(0, 0);
		return;
	} 
	if (nom.length == 0 || desc.length == 0) {
		$("#error-display").text("Veuillez remplir les champs !");
		window.scroll(0, 0);
		return;
	}
	if (file.length == 0) {
		$("#error-display").text("Veuillez chosir une image pour votre article !");
		window.scroll(0, 0);
		return;
	}

	if (acha == "true") {
		if (pach.length == 0) {
			$("#error-display").text("Veuillez entrer le prix de vente !");
			window.scroll(0, 0);
			return;
		}
	}
	if (ench == "true") {
		if (penc.length == 0) {
			$("#error-display").text("Veuillez entrer le prix de mise aux enchères !");
			window.scroll(0, 0);
			return;
		}
	}

	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	if (m + 2 > 12) {
		m += 2 - 12;
		y++;
	}
	else m += 2;

	if (ench == "true") ench = 1;
	else ench = 0;

	if (acha == "true") acha = 1;
	else acha = 0;

	if (offr == "true") offr = 1;
	else offr = 0;

	if (pach.length == 0) pach = "null";
	if (penc.length == 0) penc = "null";

	var exp = y + "-" + m + "-" + date.getDate();

	var sql = "insert into item values (null, '" + nom + "', '" + desc + "', " + vend + ", null, 0, (select date(sysdate())), date('" + exp +
	"'), " + ench + ", " + acha + ", " + offr + ", " + pach + ", " + penc + ", null, null, '../Articles/" + file + "', '" + cat + "');";

	$.post("PHP-POST.php", {"data" : sql}, (data) => {
		var file = document.getElementById("file-input").files[0];
		var form  = new FormData();
		form.append('files[]', file);

		fetch("PHP-moveFile.php", {
		  method: 'POST',
		  body: form,
		});

		window.location.href = "Admin/EceBay-Admin-Items.php";
	});
}

function putOnLabel(el) {
	var file = el.value.split('\\');
	file = file[file.length - 1];
	document.getElementById("label-file").innerHTML = file;
}

function toggle(el) {
	if (el.getAttribute("id") == "achat-input") {
		var d = document.getElementById("prix-achat-input").disabled;

		if (d == true) {
			document.getElementById("prix-achat-input").disabled = false;
			el.style = "border: 2px solid black; background-color: green";
		} else {
			document.getElementById("prix-achat-input").disabled = true;
			el.style = "border: none; background-color: green";
		}
	} else if (el.getAttribute("id") == "enchere-input") {
		var d = document.getElementById("prix-enchere-input").disabled;

		if (d == true) {
			document.getElementById("prix-enchere-input").disabled = false;
			el.style = "border: 2px solid black; background-color: blue";

			if (document.getElementById("offre-input").getAttribute("aria-pressed") == "true") {
				document.getElementById("offre-input").click();
			}
		} else {
			document.getElementById("prix-enchere-input").disabled = true;
			el.style = "border: none; background-color: blue";
		}
	} else {
		var offr = el.getAttribute("aria-pressed");

		if (offr == "false") {
			if (document.getElementById("enchere-input").getAttribute("aria-pressed") == "true") {
				document.getElementById("enchere-input").click();
			}
			el.style = "border: 2px solid black; background-color: red";
		} else {
			el.style = "border: none; background-color: red";
		}
	}
}