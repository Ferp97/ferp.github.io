<?php
    session_start();

    $user =  $_SESSION['usuario'];
?>

<!DOCTYPE html>
<html>
<head>
	<title>Tuiter</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="perfil.css">
    <script type="text/javascript" src="java.js"></script>
</head>
<body onload="MostrarTuitsPerfil()">
	<div id="derecha">
        <div id="iconos">
            <button id="imagen" type="submit" onclick="location.href='./tuiter.php'">
            <img src="imagenes/logo.png" width="30px" height="25px"></img>
            </button>
            <br><br>
            <button id="inicio" type="submit" onclick="location.href='./tuiter.php'">
            <img id="in" src="imagenes/home.png" width="28px" height="28px"></img>
            Inicio
            </button>
            <br><br>
            <button id="hashtag" type="submit">
            <img src="imagenes/hashtag.png" width="28px" height="28px"></img>
            Hashtag
            </button>
            <br><br>
            <button id="noti" type="submit">
            <img src="imagenes/noti.png" width="28px" height="28px"></img>
            Notificaciones
            </button>
            <br><br>
            <button id="msj" type="submit">
            <img src="imagenes/mensaje.png" width="28px" height="28px"></img>
            Mensajes
            </button>
            <br><br>
            <button id="guardado" type="submit">
            <img src="imagenes/guardar.png" width="28px" height="28px"></img>
            Guardados
            </button>
            <br><br>
            <button id="listas" type="submit">
            <img src="imagenes/lista.png" width="28px" height="25px"></img>
            Listas
            </button>
            <br><br>
            <button id="perfil" type="submit" onclick="document.location.reload();">
            <img src="imagenes/persona.png" width="28px" height="28px"></img>
            Perfil
            </button>
            <br><br>
            <button id="masOp" type="submit">
            <img src="imagenes/puntos.png" width="28px" height="28px"></img>
            Más Opciones
            </button>
            <br><br>
            <button id="cerrarSesion" type="submit" onclick="cerrarSesion()">
            <img src="imagenes/apagado.png" width="28px" height="28px"></img>
            Cerrar Sesión
            </button>
            <br><br>
        </div>
	</div>
	<div id="centro">
     <div id="info">
        <div id="user">
            <img src="imagenes/persona.png" width="28px" height="28px"></img>
            <?php echo "@".$user ?>
        </div>
     </div>
        <div id="divTuits"></div>   
    </div>
	<div id="izquierda">
        <div id="buscar">
            <input id="cajabuscar" type="text" placeholder="Buscar en Tuiter">
        </div>
        <br><br><br>
     <div id="tendencias">
        <h3>Tendencias para ti</h3> 
        <br><br>
        #PuraVida
        <br><br>
        Carlos Alvarado
        <br><br>
        Costa Rica
        <br><br>
        Donald Trump
        <br><br>
        #Area51
        <br><br>
        #SismoCR
        <br><br>
        Sergio Ramírez
        <br><br>
        Real Madrid
        <br><br>
        Keilor Navas
        <br><br>
        La Sirenita
        <br><br>
     </div>     
    </div>
</body>
</html>