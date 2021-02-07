<?php
$uN = "root";
$uP = "";
$baseDeDatos = "tuiter";

$conexion = new mysqli("localhost", $uN, $uP, $baseDeDatos);

if($conexion->connect_error){
}else{
	$nombre = $_GET["nombreUsuario"];
	$correo = $_GET["correoUsuario"];
	$contraseña = $_GET["contraseñaUsuario"];
	$usuario = $_GET["usuario"];
	
	$sql = "INSERT into usuario values ('$usuario', '$contraseña', '$correo', '$nombre')";
	mysqli_query($conexion, $sql);	
	$conexion -> close();
}
?>