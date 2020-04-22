function loadItems()
{
	var sql
	//chargement backgrounds et boutons
	if(!nobody)
	{
		if((session_type=="acheteur")||(session_type=="vendeur"))
		{
			document.body.style.backgroundImage = "url('"+session_background+"')";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.objectFit = "fill";
			document.body.style.backgroundSize = "100% 100%";
			document.body.style.backgroundAttachment = "fixed";
		}

		if(session_type=="acheteur")
		{
			sql = "select prenom from client where id="+session_id;
			document.getElementById("navvendre").style.display = "none";
			document.getElementById("navadmin").style.display = "none";
		}

		if(session_type=="vendeur")
		{
			sql = "select prenom from vendeur where id="+session_id;
			document.getElementById("navpanier").style.display = "none";
			document.getElementById("navadmin").style.display = "none";
		}

		if(session_type=="admin")
		{
			sql = "select pseudo from admin where id="+session_id;
			document.getElementById("navvendre").style.display = "none";
			document.getElementById("navpanier").style.display = "none";
		}

		$.get("../PHP-GET.php", {"data" : sql}, (data) => {
			if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
				console.log("ERROR");
				return;
			} else {
				var arr = data.split('\n');
				document.getElementById("salut").innerHTML="Bienvenue " + ajust(arr[0]) + " !";
			}
		});
	}
	else
	{
		document.getElementById("navvendre").style.display = "none";
		document.getElementById("navadmin").style.display = "none";
		document.getElementById("navpanier").style.display = "none";
		document.getElementById("navdeconnect").style.display = "none";
	}
}

function ajust(str) {
	if (str == "NULL") return "";
	return str;
}