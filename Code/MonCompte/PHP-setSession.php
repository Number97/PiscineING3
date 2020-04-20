<?php

session_start();

$_SESSION["id"] = $_REQUEST["id"];
$_SESSION["email"] = $_REQUEST["email"];
$_SESSION["back"] = $_REQUEST["back"];
$_SESSION["type"] = $_REQUEST["type"];

// header("Location : EceBay-MonCompte.php");

?>