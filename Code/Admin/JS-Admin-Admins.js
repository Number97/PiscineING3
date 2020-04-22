function charge() {

	var sql = "select * from admin where not admin.id = " + id + ";";

	$.get("../PHP-GET.php", {'data' : sql}, (data) => {
		console.log(data);
		var rows = data.split('\n');

		while (rows.length > 1) {

			var div = document.createElement("div");
			div.setAttribute("class", "row");

			var d = document.createElement("div");
			d.setAttribute("class", "col-md-10");

			var a = document.createElement("div");
			a.setAttribute("class", "card mb-3");
			a.setAttribute("style", "max-width: 1400px;margin: auto;height: 140px;");

			var b = document.createElement("div");
			b.setAttribute("class", "row no-gutters");

			var c = document.createElement("div");
			c.setAttribute("class", "col-md-10");
			c.setAttribute("style", "font-size: 20px;text-align: center;");

			var e = document.createElement("p");
			e.setAttribute("class", "card-text");

			var f = "<br>Admin " + rows[0] + "<br>Mail : " + rows[1] + "<br>Pseudo : " + rows[3];

			e.innerHTML = f;
			c.appendChild(e);
			b.appendChild(c);
			a.appendChild(b);
			d.appendChild(a);
			div.appendChild(d); // End first part.

			a = document.createElement("div");
			a.setAttribute("class", "col-md-1");

			b = document.createElement("form");
			b.setAttribute('style', "margin: 10px;");

			c = document.createElement("button");
			c.setAttribute("class", "btn btn-dark"); // Add JS click handler.

			var com = "var sql = 'delete from admin where admin.id = " + rows[0] + "'; \
$.post('../PHP-POST.php', {'data' : sql}, (data) => {window.location.href = \"EceBay-Admin-Admins.php\";});"

			c.setAttribute("onclick", com);
			c.innerHTML = "Supprimer";

			b.appendChild(c);
			a.appendChild(b);
			div.appendChild(a);

			document.getElementById("div-admins").appendChild(div);

			rows.splice(0, 5);
		}

	});
}