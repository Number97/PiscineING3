function charge() {

	var sql = "select * from item;";

	$.get("../PHP-GET.php", {'data' : sql}, (data) => {
		console.log(data);
		var rows = data.split('\n');

		while (rows.length > 1) {

			var div = document.createElement("div");
			div.setAttribute("class", "row");

			var a = document.createElement("div");
			a.setAttribute("class", "col-md-10");

			var b = document.createElement("div");
			b.setAttribute("class", "card mb-3");
			b.setAttribute("style", "max-width: 1400px;margin: auto;height: 250px;");

			var c = document.createElement("div");
			c.setAttribute("class", "row no-gutters");

			var d = document.createElement("div");
			d.setAttribute("class", "col-md-6");
			d.setAttribute("style", "font-size: 20px;");

			var e = document.createElement("img");
			e.setAttribute("src", rows[15]);
			e.setAttribute("style", "object-fit: cover;  min-width: 100%; max-height: 68px;");

			var f = document.createElement("div");
			f.setAttribute("class", "col-md-2");

			var g = document.createElement("div");
			g.setAttribute("class", "card-body");

			var h = document.createElement("h6");
			h.setAttribute("class", "card-title");
			h.value = rows[1];

			var i = document.createElement("p");
			i.setAttribute("class", "card-text");
			i.setAttribute("style", "font-size: 10px;");
			i.value = "Expire le : " + rows[7];

			var j = document.createElement("div");
			j.setAttribute("class", "col-md-2");

			var k = document.createElement("div");
			k.setAttribute("class", "card-body");
			k.setAttribute("style", "background-color: #0275d8;height: 68px;");

			var l = document.createElement("h6");
			l.setAttribute('class', "card-title");
			l.setAttribute('style', "color: white;");
			l.value = "Prix direct";

			var m = document.createElement("p");
			m.setAttribute("class", 'card-text');
			m.setAttribute("style", 'color: white;');
			m.value = rows[]

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

			rows.splice(0, 16);
		}

	});
}

/*
<div class="row"> div
    <div class="col-md-10">a
        <div class="card mb-3" style="max-width: 1400px;margin: auto;height: 70px;">b
            <div class="row no-gutters">c
                <div class="col-md-6"  style="font-size: 20px;" >d
                    <img src="../Articles/Article1.jpeg" style="object-fit: cover;  min-width: 100%; max-height: 68px;">e
                </div>
                <div class="col-md-2">f
                    <div class="card-body">g
                        <h6 class="card-title">Article 1</h6>h
                        <p class="card-text" style="font-size: 10px;">Se termine dans 72h</p>i
                    </div>
                </div>
                <div class="col-md-2">j
                    <div class="card-body" style="background-color: #0275d8;height: 68px;">k
                        <h6 class="card-title" style="color: white;">Enchères</h6>l
                        <p class="card-text" style="color: white; font-size: 10px;">267 € par Jean Segado</p>m
                    </div>
                </div>
                <div class="col-md-2">n
                    <div class="card-body" style="background-color: #5cb85c;height: 68px;">o
                        <h6 class="card-title" style="color: white;">Achat Immédiat</h6>p
                        <p class="card-text" style="color: white; font-size: 10px;">1 000 €</p>q
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-1">r
        <form style="margin: 10px;">s
            <button class="btn btn-dark">Supprimer</button>t
        </form>
    </div>
</div>   
*/