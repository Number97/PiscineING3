<?php

$dir = 'Articles/';

// print_r($_FILES);

// print_r("\n");

if (isset($_FILES["files"])) {
	$tmp_name = $_FILES["files"]["tmp_name"][0];
	$name = $_FILES["files"]["name"][0];

	$path = $dir . $name;

	move_uploaded_file($tmp_name, $path);
}
?>