<?php

session_start();

	$nom = $_SESSION['usuario'];

	$conexion = new mysqli("localhost", "root", "", "tuiter");

	if($conexion->connect_error){
	}else{
		$sql = "SELECT Usuario, fecha, Tuit from tuits where Usuario like '$nom' order by fecha desc LIMIT 1" ;
		$conexion->set_charset("utf8");
		$respuesta = $conexion->query($sql);		
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

?>