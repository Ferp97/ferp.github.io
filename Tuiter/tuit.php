<?php
	
	session_start();

	$nom = $_SESSION['usuario'];

	$conexion = new mysqli("localhost", "root", "", "tuiter");

		$tuit = $_GET["tuit"];
		if ($tuit != "") {
		$conexion->set_charset("UTF8");
		$sql = "INSERT into tuits values ('$nom', sysdate(), '$tuit')";
		mysqli_query($conexion, $sql);	
	}
?>