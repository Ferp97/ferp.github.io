<?php

	$conexion = new mysqli("localhost", "root", "", "tuiter");

	if($conexion->connect_error){
	}else{
		$nombre = $_GET["buscar"];
		$sql = "SELECT Usuario, fecha, Tuit from tuits where Usuario like '$nombre' order by fecha desc";
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