<!--

    Pierre HERDUIN & Ernest POPOVICI TD03
    Projet Piscine Web Dynamique
    15/04/2020

    Ce fichier php gère le back-end de la page CreationCompteAcheteur

-->

<?php
	$host = "localhost";
	$user = "root";
	$pass = "";
	$dBas = "databaseprojectpiscine";

	// Create connection to the server.
	$conn = new mysqli($host, $user, $pass, $dBas);

	// Check connection.
	if ($conn->connect_error) {
		die("Connection failed : " . $conn->connect_error);
	}

	echo "Connected successfully ! <br>";

	$sql = "SELECT * FROM Client";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
			foreach ($row as $v) {
				if ($v == "") {
					echo "NULL <br>";
				} else {
					echo $v . "<br>";
				}
			}
			echo "******************<br>";
		}
	}

	$conn->close();
?>