<?php
$uN = "root";
$uP = "";
$baseDeDatos = "tuiter";

$conexion = new mysqli("localhost", $uN, $uP, $baseDeDatos);

if($conexion->connect_error){
}else{
	$usuario= $_GET["Usuario"];
	$contraseña = $_GET["contraseñaUsuario"];
	if ($contraseña != "" && $usuario != "") {
	$sql = "SELECT Usuario, Contraseña from usuario where Usuario like '$usuario' and Contraseña like '$contraseña'";
	$conexion->set_charset("utf8");
	$respuesta = $conexion->query($sql);
	session_start();
	$_SESSION['usuario'] = $usuario;
	
	if($respuesta ->num_rows > 0){
		$resolver = array();
		$registro;		
		while($registro = mysqli_fetch_assoc($respuesta)){
			$resolver[] = $registro;					
		}		
		header("Content-Type: application/json");
		echo json_encode($resolver);

	}else{
		echo "";
	}	
}	
}

?>