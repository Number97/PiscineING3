<?php
session_start();

$_SESSION = Array();

session_destroy();

unset($_SESSION);

echo '<script type="text/javascript">',
     'window.location.href = \'EceBay-MonCompte.php\';',
     '</script>';

?>