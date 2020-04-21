function loadItems() {
	//load background image if connected

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
	}

	sql="select count(id) from item"

	var nombreArticles = 0;
	var nombreRows = 0;
	var nombreCols = 0;
	var nombreArticlesLeft = 0;
	var div;

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

	$.get("../PHP-GET.php", {"data" : sql}, (data) => {
		if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
			console.log("ERROR");
			return;
		} else {
			var arr = data.split('\n');
			nombreArticles=ajust(arr[0]);
			nombreArticlesLeft=ajust(arr[0]);
			nombreRows=Math.floor(nombreArticles/3);

			sql="select * from item"

			$.get("../PHP-GET.php", {"data" : sql}, (data) => {
				if (data.match("Error :") != null) { // Error. Reload and ask to connect again ?
					console.log("ERROR");
					return;
				} else {
					var arr = data.split('\n');

					//gathering and storing the info

					for(var indexCounter=0; indexCounter<nombreArticles;indexCounter++)
					{
						noms[indexCounter] = ajust(arr[1+18*indexCounter]);
						descriptions[indexCounter] = ajust(arr[2+18*indexCounter]);
						vendeurIDs[indexCounter] = ajust(arr[3+18*indexCounter]);
						expirations[indexCounter] = ajust(arr[7+18*indexCounter]);
						encheres[indexCounter] = ajust(arr[8+18*indexCounter]);
						directs[indexCounter] = ajust(arr[9+18*indexCounter]);
						negociations[indexCounter] = ajust(arr[10+18*indexCounter]);
						prixDirects[indexCounter] = ajust(arr[11+18*indexCounter]);
						prixEncheres[indexCounter] = ajust(arr[12+18*indexCounter]);
						images[indexCounter] = ajust(arr[15+18*indexCounter]);
						categories[indexCounter] = ajust(arr[16+18*indexCounter]);
					}
				}

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
										if(ajust(arr[0+4*j])==vendeurs[i])
										{
											vendeurIDs[i] = ajust(arr[1+4*j]) + " " + ajust(arr[2+4*j]);
											j=nbVendeurs;
										}
									}
								}

								generer(noms,descriptions,vendeurs,vendeurIDs,expirations,encheres,directs,negociations,prixDirects,prixEncheres,images,categories,nombreArticles,nombreRows,nombreCols,nombreArticlesLeft,div,liveIndex);

							}
						});
					}
				});
			});
		}
	});
}

function filtrer() {
	var i = 0;
	while(document.getElementById("row"+i)) {
		document.getElementById("row"+i).remove();
		i++;
	}
}

function generer(noms,descriptions,vendeurs,vendeurIDs,expirations,encheres,directs,negociations,prixDirects,prixEncheres,images,categories,nombreArticles,nombreRows,nombreCols,nombreArticlesLeft,div,liveIndex) {
	for(var j=0;j<nombreRows;j++) //creating rows
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

			//boutons modal
			if(!nobody)
			{
				if(session_type=="acheteur")
				{
					if(encheres[liveIndex]==1)
					{
						div = document.createElement("button");
						div.setAttribute("type","button");
						div.setAttribute("class","btn btn-primary");
						div.setAttribute("id","buttonemodal" + liveIndex);
						document.getElementById("modalcard-body"+liveIndex).appendChild(div);

						document.getElementById("buttonemodal" + liveIndex).innerHTML = "Enchérir<br>" + prixEncheres[liveIndex] + " €";
					}
					if(directs[liveIndex]==1)
					{
						div = document.createElement("button");
						div.setAttribute("type","button");
						div.setAttribute("class","btn btn-success");
						div.setAttribute("id","buttondmodal" + liveIndex);
						document.getElementById("modalcard-body"+liveIndex).appendChild(div);

						document.getElementById("buttondmodal" + liveIndex).innerHTML = "Achat Immédiat<br>" + prixDirects[liveIndex] + " €";
					}
					if(negociations[liveIndex]==1)
					{
						div = document.createElement("button");
						div.setAttribute("type","button");
						div.setAttribute("class","btn btn-danger");
						div.setAttribute("id","buttonnmodal" + liveIndex);
						document.getElementById("modalcard-body"+liveIndex).appendChild(div);

						document.getElementById("buttonnmodal" + liveIndex).innerHTML = "Meilleure Offre<br><br>";
					}
				}
				
				if((session_type=="admin")||((session_type=="vendeur")&&(session_id!=vendeurIDs[liveIndex])))
				{
					div = document.createElement("button");
					div.setAttribute("type","button");
					div.setAttribute("class","btn btn-secondary");
					div.setAttribute("id","buttonmmodal" + liveIndex);
					document.getElementById("modalcard-body"+liveIndex).appendChild(div);

					document.getElementById("buttonmmodal" + liveIndex).innerHTML = "Modifier<br><br>";
					
					div = document.createElement("button");
					div.setAttribute("type","button");
					div.setAttribute("class","btn btn-warning");
					div.setAttribute("id","buttonsmodal" + liveIndex);
					document.getElementById("modalcard-body"+liveIndex).appendChild(div);

					document.getElementById("buttonsmodal" + liveIndex).innerHTML = "Supprimer<br><br>";
				}
			}

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

			//boutons
			if(!nobody)
			{
				if(session_type=="acheteur")
				{
					if(encheres[liveIndex]==1)
					{
						div = document.createElement("button");
						div.setAttribute("type","button");
						div.setAttribute("class","btn btn-primary");
						div.setAttribute("id","buttone" + liveIndex);
						document.getElementById("card"+liveIndex).appendChild(div);

						document.getElementById("buttone" + liveIndex).innerHTML = "Enchérir<br>" + prixEncheres[liveIndex] + " €";
					}
					if(directs[liveIndex]==1)
					{
						div = document.createElement("button");
						div.setAttribute("type","button");
						div.setAttribute("class","btn btn-success");
						div.setAttribute("id","buttond" + liveIndex);
						document.getElementById("card"+liveIndex).appendChild(div);

						document.getElementById("buttond" + liveIndex).innerHTML = "Achat Immédiat<br>" + prixDirects[liveIndex] + " €";
					}
					if(negociations[liveIndex]==1)
					{
						div = document.createElement("button");
						div.setAttribute("type","button");
						div.setAttribute("class","btn btn-danger");
						div.setAttribute("id","buttonn" + liveIndex);
						document.getElementById("card"+liveIndex).appendChild(div);

						document.getElementById("buttonn" + liveIndex).innerHTML = "Meilleure Offre<br><br>";
					}
				}
				
				if((session_type=="admin")||((session_type=="vendeur")&&(session_id!=vendeurIDs[liveIndex])))
				{
					div = document.createElement("button");
					div.setAttribute("type","button");
					div.setAttribute("class","btn btn-secondary");
					div.setAttribute("id","buttonm" + liveIndex);
					document.getElementById("card"+liveIndex).appendChild(div);

					document.getElementById("buttonm" + liveIndex).innerHTML = "Modifier<br><br>";
					
					div = document.createElement("button");
					div.setAttribute("type","button");
					div.setAttribute("class","btn btn-warning");
					div.setAttribute("id","buttons" + liveIndex);
					document.getElementById("card"+liveIndex).appendChild(div);

					document.getElementById("buttons" + liveIndex).innerHTML = "Supprimer<br><br>";
				}
			}
			liveIndex++;
		}
		nombreArticlesLeft-=nombreCols;
	}
}

function ajust(str) {
	if (str == "NULL") return "";
	return str;
}