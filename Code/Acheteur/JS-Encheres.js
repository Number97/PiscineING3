function loadItemsEnVente(filtrer) {
	var i = 0;

	//load background image if connected

	document.body.style.backgroundImage = "url('"+session_background+"')";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.objectFit = "fill";
	document.body.style.backgroundSize = "100% 100%";
	document.body.style.backgroundAttachment = "fixed";
	document.getElementById("navvendre").style.display = "none";
	document.getElementById("navadmin").style.display = "none";

	sql	= "select count(id) from enchere where enchere.Enchereur=" + session_id;

	var nombreArticles = 0;
	var nombreRows = 0;
	var nombreCols = 0;
	var nombreArticlesLeft = 0;
	var div;
	
	var nombreArticles = 0;
	var nombreRows = 0;
	var nombreCols = 0;
	var nombreArticlesLeft = 0;
	var div;

	var ids = [];
	var noms = [];
	var descriptions = [];
	var vendeurs = [];
	var vendeurIDs = [];
	var expirations = [];
	var encheres = [];
	var directs = [];
	var negociations = [];
	var prixDirects = [];
	var prixEncheres = [];
	var images = [];
	var categories = [];

	var liveIndex = 0;

	var panierTypeVentes = [];
	var panierPrixVentes = [];



	$.get("../PHP-GET.php", {"data" : sql}, (data) => {
		if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
			console.log("ERROR");
			return;
		} else {
			var arr = data.split('\n');
			nombreArticles=ajust(arr[0]);
			nombreArticlesLeft=ajust(arr[0]);
			nombreRows=Math.floor(nombreArticles/3);

			console.log(nombreArticles);

			sql="select * from item, enchere where item.id = enchere.item and enchere.enchereur = "+session_id;

			$.get("../PHP-GET.php", {"data" : sql}, (data) => {
				if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
					console.log("ERROR");
					return;
				} else {
					var arr = data.split('\n');

					//gathering and storing the info

					for(var indexCounter=0; indexCounter<nombreArticles;indexCounter++)
					{
						ids[indexCounter] = ajust(arr[0+22*indexCounter]);
						noms[indexCounter] = ajust(arr[1+22*indexCounter]);
						descriptions[indexCounter] = ajust(arr[2+22*indexCounter]);
						vendeurIDs[indexCounter] = ajust(arr[3+22*indexCounter]);
						expirations[indexCounter] = ajust(arr[7+22*indexCounter]);
						encheres[indexCounter] = ajust(arr[8+22*indexCounter]);
						directs[indexCounter] = ajust(arr[9+22*indexCounter]);
						negociations[indexCounter] = ajust(arr[10+22*indexCounter]);
						prixDirects[indexCounter] = ajust(arr[11+22*indexCounter]);
						prixEncheres[indexCounter] = ajust(arr[12+22*indexCounter]);
						images[indexCounter] = ajust(arr[15+22*indexCounter]);
						categories[indexCounter] = ajust(arr[16+22*indexCounter]);

						panierTypeVentes[indexCounter] = ""
						panierPrixVentes[indexCounter] = ajust(arr[20+22*indexCounter]);
					}
				}
				console.log(panierTypeVentes);

				sql="select count(id) from vendeur"

				$.get("../PHP-GET.php", {"data" : sql}, (data) => {
					if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
						return;
					} else {
						var arr = data.split('\n');
								
						var nbVendeurs=ajust(arr[0]);

						sql="select id,prenom,nom from vendeur"

						$.get("../PHP-GET.php", {"data" : sql}, (data) => {
							if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
								return;
							} else {
								var arr = data.split('\n');
								
								for(var i=0;i<nombreArticles;i++) //gathering vendor names
								{
									for(var j=0;j<nbVendeurs;j++)
									{
										if(ajust(arr[0+4*j])==vendeurIDs[i])
										{
											vendeurs[i] = ajust(arr[1+4*j]) + " " + ajust(arr[2+4*j]);
											j=nbVendeurs;
										}
									}
								}

								if(filtrer)
								{
									reloadPageEnVente(panierTypeVentes,panierPrixVentes,noms,descriptions,vendeurs,vendeurIDs,expirations,encheres,directs,negociations,prixDirects,prixEncheres,images,categories,nombreArticles,nombreRows,nombreCols,nombreArticlesLeft,div,liveIndex);
								}
								else
								{
									genererEnVente(panierTypeVentes,panierPrixVentes,noms,descriptions,vendeurs,vendeurIDs,expirations,encheres,directs,negociations,prixDirects,prixEncheres,images,categories,nombreArticles,nombreRows,nombreCols,nombreArticlesLeft,div,liveIndex,ids);
								}
							}
						});
					}
				});
			});
		}
	});
}

function genererEnVente(panierTypeVentes,panierPrixVentes,noms,descriptions,vendeurs,vendeurIDs,expirations,encheres,directs,negociations,prixDirects,prixEncheres,images,categories,nombreArticles,nombreRows,nombreCols,nombreArticlesLeft,div,liveIndex,ids) {
	
	for(var j=0;j<=nombreRows;j++) //creating rows
	{
		div = document.createElement("div");
		div.setAttribute("class","row");
		div.setAttribute("id","row" + j);
		div.setAttribute("style","margin-bottom: 15px");
		document.getElementById("main-container").appendChild(div);
		if(nombreArticlesLeft>=3)
		{
			nombreCols=3;
		}
		else
		{
			nombreCols=nombreArticles%3
		}
		for(var i=0;i<nombreCols;i++) //creating cols
		{
			//the card
			div = document.createElement("div");
			div.setAttribute("class","card");
			div.setAttribute("id","card" + liveIndex);
			div.setAttribute("style","max-width: 300px;margin: auto;");
			document.getElementById("row"+j).appendChild(div);

			//the name
			div = document.createElement("div");
			div.setAttribute("style","font-size: 20px;height: 100px");
			div.setAttribute("class","card-header");
			div.setAttribute("id","name" + liveIndex);
			document.getElementById("card" + liveIndex).appendChild(div);

			document.getElementById("name" + liveIndex).innerHTML = noms[liveIndex];
			
			//image
			div = document.createElement("img");
			div.setAttribute("style","object-fit: cover;height: 200px;min-width: 296px");
			div.setAttribute("src",images[liveIndex]);
			document.getElementById("card"+liveIndex).appendChild(div);

			//button plus d'infos
			div = document.createElement("button");
			div.setAttribute("type","button");
			div.setAttribute("class","btn btn-light");
			div.setAttribute("data-toggle","modal");
			div.setAttribute("data-target","#infoitem" + liveIndex);
			div.setAttribute("id","buttoninfo" + liveIndex);
			document.getElementById("card"+liveIndex).appendChild(div);

			document.getElementById("buttoninfo" + liveIndex).innerHTML = "Cliquez ici pour plus d'infos";



			///////////////////////////////////////////////modal plus d'infos
			
			div = document.createElement("div");
			div.setAttribute("class","modal fade");
			div.setAttribute("id","infoitem" + liveIndex);
			div.setAttribute("role","dialog");
			div.setAttribute("aria-labelledby","exampleModalLabel");
			div.setAttribute("aria-hidden","true");
			document.getElementById("card"+liveIndex).appendChild(div);

			div = document.createElement("div");
			div.setAttribute("class","modal-dialog modal-lg");
			div.setAttribute("role","document");
			div.setAttribute("style","min-width:1000px");
			div.setAttribute("id","infoitemdialog" + liveIndex);
			document.getElementById("infoitem"+liveIndex).appendChild(div);

			div = document.createElement("div");
			div.setAttribute("class","modal-content");
			div.setAttribute("id","infoitemcontent" + liveIndex);
			document.getElementById("infoitemdialog"+liveIndex).appendChild(div);

			div = document.createElement("div");
			div.setAttribute("class","modal-body");
			div.setAttribute("id","infoitemcontentbody" + liveIndex);
			document.getElementById("infoitemcontent"+liveIndex).appendChild(div);

			div = document.createElement("div");
			div.setAttribute("class","container");
			div.setAttribute("id","modalcontainer" + liveIndex);
			document.getElementById("infoitemcontentbody"+liveIndex).appendChild(div);

			div = document.createElement("h1");
			div.setAttribute("class","text-center");
			div.setAttribute("id","articletitle" + liveIndex);
			document.getElementById("modalcontainer"+liveIndex).appendChild(div);

			document.getElementById("articletitle" + liveIndex).innerHTML = noms[liveIndex];
			
			div = document.createElement("h5");
			div.setAttribute("class","text-center");
			div.setAttribute("id","articlecateg" + liveIndex);
			document.getElementById("modalcontainer"+liveIndex).appendChild(div);

			document.getElementById("articlecateg" + liveIndex).innerHTML = categories[liveIndex];
			
			div = document.createElement("div");
			div.setAttribute("class","card");
			div.setAttribute("id","modalcard" + liveIndex);
			document.getElementById("modalcontainer"+liveIndex).appendChild(div);

			div = document.createElement("img");
			div.setAttribute("style","object-fit: cover;height: 500px;min-width: 700px");
			div.setAttribute("src",images[liveIndex]);
			document.getElementById("modalcard"+liveIndex).appendChild(div);
			
			div = document.createElement("div");
			div.setAttribute("class","card-body");
			div.setAttribute("id","modalcard-body" + liveIndex);
			document.getElementById("modalcard"+liveIndex).appendChild(div);
			
			div = document.createElement("p");
			div.setAttribute("class","card-text");
			div.setAttribute("id","modalcard-text-description" + liveIndex);
			document.getElementById("modalcard-body"+liveIndex).appendChild(div);

			document.getElementById("modalcard-text-description" + liveIndex).innerHTML = descriptions[liveIndex];
			
			div = document.createElement("p");
			div.setAttribute("class","card-text");
			div.setAttribute("id","modalcard-text-expiration" + liveIndex);
			document.getElementById("modalcard-body"+liveIndex).appendChild(div);

			document.getElementById("modalcard-text-expiration" + liveIndex).innerHTML = "Expire le: " + expirations[liveIndex];
			
			div = document.createElement("p");
			div.setAttribute("class","card-text");
			div.setAttribute("id","modalcard-text-vendor" + liveIndex);
			document.getElementById("modalcard-body"+liveIndex).appendChild(div);

			document.getElementById("modalcard-text-vendor" + liveIndex).innerHTML = "Par: " + vendeurs[liveIndex];

			//boutons modal
			if(!nobody)
			{
				div = document.createElement("button");
				div.setAttribute("type","button");
				div.setAttribute("disabled","true");
				div.setAttribute("id","buttonpamodal" + liveIndex);
				document.getElementById("modalcard-body"+liveIndex).appendChild(div);

				if(panierTypeVentes[liveIndex]=="Enchere")
				{
					div.setAttribute("class","btn btn-primary");
				}
				else if(panierTypeVentes[liveIndex]=="Achat Immediat")
				{
					div.setAttribute("class","btn btn-success");
				}
				else if(panierTypeVentes[liveIndex]=="Meilleure Offre")
				{
					div.setAttribute("class","btn btn-danger");
				}

				document.getElementById("buttonpamodal" + liveIndex).innerHTML = panierTypeVentes[liveIndex] + " " + panierPrixVentes[liveIndex] + " €";
			}

			div = document.createElement("div");
			div.setAttribute("class","modal-footer");
			div.setAttribute("id","infoitemcontentfooter" + liveIndex);
			document.getElementById("infoitemcontent" + liveIndex).appendChild(div);

			div = document.createElement("button");
			div.setAttribute("type","button");
			div.setAttribute("data-dismiss","modal");
			div.setAttribute("class","btn btn-secondary");
			div.setAttribute("id","buttonclosemodal" + liveIndex);
			document.getElementById("infoitemcontent" + liveIndex).appendChild(div);

			document.getElementById("buttonclosemodal" + liveIndex).innerHTML = "Fermer";

			///////////////////////////////fin modal

			//expiration
			div = document.createElement("div");
			div.setAttribute("class","card-body");
			div.setAttribute("id","card-body" + liveIndex);
			document.getElementById("card" + liveIndex).appendChild(div);

			//expiration text
			div = document.createElement("p");
			div.setAttribute("class","card-text");
			div.setAttribute("id","card-text" + liveIndex);
			document.getElementById("card-body" + liveIndex).appendChild(div);

			document.getElementById("card-text" + liveIndex).innerHTML = "Expire le " + expirations[liveIndex];

			div = document.createElement("h5");
			div.setAttribute("class","text-center");
			div.setAttribute("style","font-size: 15px");
			div.setAttribute("id","articlenavcateg" + liveIndex);
			document.getElementById("card"+liveIndex).appendChild(div);

			document.getElementById("articlenavcateg" + liveIndex).innerHTML = categories[liveIndex];

			div = document.createElement("button");
			div.setAttribute("type","button");
			div.setAttribute("disabled","true");
			div.setAttribute("id","buttonpa" + liveIndex);
			document.getElementById("card"+liveIndex).appendChild(div);


			div.setAttribute("class","btn btn-primary");

			document.getElementById("buttonpa" + liveIndex).innerHTML = panierTypeVentes[liveIndex] + " " + panierPrixVentes[liveIndex] + " €";

			
			liveIndex++;
		}
		nombreArticlesLeft-=nombreCols;
	}
}

function reloadPageEnVente(panierTypeVentes,panierPrixVentes,noms,descriptions,vendeurs,vendeurIDs,expirations,encheres,directs,negociations,prixDirects,prixEncheres,images,categories,nombreArticles,nombreRows,nombreCols,nombreArticlesLeft,div,liveIndex) {
	var categs = []
	categs[0] = "Ferraille ou Tresor";
	categs[1] = "Bon pour le Musee";
	categs[2] = "Accessoire VIP";
	var canceled = false;
	var corresponding = false;

	for(var i=0;i<nombreArticles;i++)
	{
		if((!document.getElementById("feraillecheck").checked)&&(categories[i]==categs[0]))
		{
			canceled = true;
		}
		else if((!document.getElementById("boncheck").checked)&&(categories[i]==categs[1]))
		{
			canceled = true;
		}
		else if((!document.getElementById("vipcheck").checked)&&(categories[i]==categs[2]))
		{
			canceled = true;
		}
		if((document.getElementById("encherecheck").checked)&&(encheres[i]==1))
		{
			corresponding = true;
		}
		if((document.getElementById("directcheck").checked)&&(directs[i]==1))
		{
			corresponding = true;
		}
		if((document.getElementById("negociationcheck").checked)&&(negociations[i]==1))
		{
			corresponding = true;
		}

		if(!corresponding)
		{
			canceled = true;
		}

		if(!canceled)
		{
			document.getElementById("card"+i).style.display = ""
		}
		else
		{
			document.getElementById("card"+i).style.display = "none"
		}
		canceled = false;
		corresponding = false;
	}
}


function ajust(str) {
	if (str == "NULL") return "";
	return str;
}

function supprimer(index)
{
	var sql = "delete from item where item.id = " + index;
	$.post('../PHP-POST.php', {'data' : sql}, (data) => {location.reload();})
}

function passerCommande() {
	var sql = "select * from panier where panier.client=" + session_id;

	$.get("../PHP-GET.php", {'data': sql}, (data) => {
		var rows = data.split('\n');
		console.log(data);

		while (rows.length > 1) {

			var type = rows[3];

			if (type == "Achat Immediat") {

				var sql = "insert into commande values (null, " + session_id + ", " + rows[2] + ")";
				$.post("../PHP-POST.php", {'data': sql});

			} else if (type == "Enchere") {

				var sql = "insert into enchere values (null, " + rows[2] + ", " + session_id + ", (select CURRENT_TIMESTAMP), " + rows[4] + ")";
				$.post("../PHP-POST.php", {'data': sql});

			} else if (type == "Meilleure Offre") {

				var sql = "insert into negociation values (null, 1, 1, " + session_id + ", null, " + rows[4] + ", 0, " + rows[2] + ")";
				$.post("../PHP-POST.php", {'data': sql});
			}

			rows.splice(0, 6);
		}
	});

	viderPanier();
}

function viderPanier() {
	var sql = "delete from panier where panier.client = " + session_id;

	$.post("../PHP-POST.php", {"data" : sql});

	location.reload();
}

