<?php

	include "config.php";

	// Create connection to the server.
	$conn = new mysqli($host, $user, $pass, $dBas);

	// Check connection.
	if ($conn->connect_error) {
		die("Connection failed : " . $conn->connect_error);
	}

	// Receive sql command.
	$sql = $_REQUEST["data"];

	// Execute query and get result.
	$result = $conn->query($sql);

	// Check wether result exists or not.
	if ($result) {
		if ($result->num_rows > 0) { // Check if rows have been returned.
			while ($row = $result->fetch_assoc()) { // Merges 'duplicated' keys.
				foreach ($row as $v) { // Loop through rows.
					if ($v == "") { // If null.
						echo "NULL\n";
					} else { // Print.
						echo $v . "\n";
					}
				}
				echo "******************\n"; // Separation between rows.
			}
		}
	} else {
		echo "Error : " . $conn->error;
	}

	// Close connection.
	$conn->close();

	/* 
	Sources :
	
	https://www.w3schools.com/php/php_mysql_insert.asp
	*/
?>