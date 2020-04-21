function loadItems()
{
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
			document.getElementById("navvendre").style.display = "none";
			document.getElementById("navadmin").style.display = "none";
		}

		if(session_type=="vendeur")
		{
			document.getElementById("navpanier").style.display = "none";
			document.getElementById("navadmin").style.display = "none";
		}

		if(session_type=="admin")
		{
			document.getElementById("navvendre").style.display = "none";
			document.getElementById("navpanier").style.display = "none";
		}
	}
	else
	{
		document.getElementById("navvendre").style.display = "none";
		document.getElementById("navadmin").style.display = "none";
		document.getElementById("navpanier").style.display = "none";
	}
}