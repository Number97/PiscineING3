<?php

	include "../config.php";

	// Create connection to the server.
	$conn = new mysqli($host, $user, $pass, $dBas);

	// Check connection.
	if ($conn->connect_error) {
		die("Connection failed : " . $conn->connect_error);
	}

	// Receive sql command.
	$sql = $_REQUEST["data"];

	// Check result of query
	if ($conn->query($sql) === TRUE) {
		echo "New record created";
	} else {
		echo "Error : " . $sql . "<br>" . $conn->error;
	}

	// Close connection.
	$conn->close();

?>