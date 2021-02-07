function RegistrarUsuario(){
	var nombreUsuario = document.getElementById("nombreUsuario").value;
	var correoUsuario = document.getElementById("correoUsuario").value;
	var contraseñaUsuario = document.getElementById("contraseñaUsuario").value;
	var usuario = document.getElementById("Usuario").value;
	var divR = document.getElementById("res");

	var con = new XMLHttpRequest();

	if ( nombreUsuario != "" && correoUsuario != "" && contraseñaUsuario != "" && usuario != "") {
	con.open("GET","registro.php?nombreUsuario="+nombreUsuario+"&correoUsuario="+correoUsuario+
		"&contraseñaUsuario="+contraseñaUsuario+"&usuario="+usuario);
	con.send(null);

	con.onreadystatechange = function(){
	if(con.readyState == 4 && con.status == 200){
		location.href='./inicioSesion.html';
		}
	}
	}else{
		divR.innerHTML = "*** Debe llenar todos los espacios";
	}
}

function VerificarUsuario(){
	var contraseñaUsuario = document.getElementById("Contraseña").value;
	var Usuario = document.getElementById("Usuario").value;
	var divR = document.getElementById("prueba");
	var con = new XMLHttpRequest();
	con.open("GET","is.php?contraseñaUsuario="+contraseñaUsuario+"&Usuario="+Usuario,true);
	con.send(null);

	con.onreadystatechange = function(){
		if(con.readyState == 4 && con.status == 200){
			if (con.responseText != "") {
			var res = JSON.parse(con.responseText);
			for(var entrada in res){
			location.href='tuiter.php';	
			MostrarTuits();
			}
		}else{
		divR.innerHTML = "Ese usuario no existe";
		}
	}
		
	}
}

function Tuitear(){
	var tuit = document.getElementById("Tweet").value;
	var caracteres = tuit.length;
	var alert = document.getElementById("advertencia");
	if (tuit != "") {
		if (caracteres < 140) {

		var con = new XMLHttpRequest();
		con.open("GET","tuit.php?tuit="+tuit,true);
		con.send(null);
		}else{
			alert.innerHTML = "Solo puede utilizar 140 caracteres";
		}
		document.getElementById("Tweet").value = "";
		MostrarTuitsNuevo();
	}
}

function MostrarTuits(){
		var con = new XMLHttpRequest();
		con.open("GET","mostrar.php?",true);
		con.send(null);
		con.onreadystatechange = function(){
		if(con.readyState == 4 && con.status == 200){
			if (con.responseText != "") {
			var res = JSON.parse(con.responseText);
			for(var entrada in res){
					var div = document.createElement("div");
					div.classList.add("tuits");		
					var h1 = document.createElement("p");
					var br1 = document.createElement("br");
					var br2 = document.createElement("br");
					var br3 = document.createElement("br");
					var br4 = document.createElement("br");
					var br5 = document.createElement("br");
					var link = document.createElement("a");
					var href = document.createAttribute('href');											
					var textoh1 = document.createTextNode(res[entrada].Usuario + " ");
					var textoh2 = document.createTextNode(res[entrada].Tuit+" ");
					var textoh3 = document.createTextNode("      "+res[entrada].fecha);
					var usuario = res[entrada].Usuario;
					link.setAttribute('href','perfilNuevo'+usuario+'.html');
					link.appendChild(textoh1);
					h1.appendChild(link);
					h1.appendChild(br1);
					h1.appendChild(textoh2);
					h1.appendChild(br2);
					h1.appendChild(textoh3);
					h1.appendChild(br3);
					div.appendChild(h1);
					var div2 = document.getElementById("divTuits");
					div2.appendChild(div);
					div2.appendChild(br4);
					div2.appendChild(br5);	
			}
		}
	}		
	}
}



function MostrarTuitsPerfil(){
		var con = new XMLHttpRequest();
		con.open("GET","mostrarPerfil.php?",true);
		con.send(null);
		con.onreadystatechange = function(){
		if(con.readyState == 4 && con.status == 200){
			if (con.responseText != "") {
			var res = JSON.parse(con.responseText);
			for(var entrada in res){
					var div = document.createElement("div");
					div.classList.add("tuits");		
					var h1 = document.createElement("p");
					var br1 = document.createElement("br");
					var br2 = document.createElement("br");
					var br3 = document.createElement("br");
					var textoh1 = document.createTextNode("@"+res[entrada].Usuario + " ");
					var textoh2 = document.createTextNode(res[entrada].Tuit+" ");
					var textoh3 = document.createTextNode(res[entrada].fecha);
					h1.appendChild(textoh1);
					h1.appendChild(br1);
					h1.appendChild(textoh2);
					h1.appendChild(br2);
					h1.appendChild(textoh3);
					h1.appendChild(br3);
					div.appendChild(h1);
					var div2 = document.getElementById("divTuits");
					div2.appendChild(div);	
			}
		}
	}		
	}
}

function MostrarTuitsPerfilBuscado(res){
		var con = new XMLHttpRequest();
		con.open("GET","perfilBuscar.php?buscar="+res,true);
		con.send(null);
		con.onreadystatechange = function(){
		if(con.readyState == 4 && con.status == 200){
			if (con.responseText != "") {
			var res = JSON.parse(con.responseText);
			for(var entrada in res){
					var div = document.createElement("div");
					div.classList.add("tuits");		
					var h1 = document.createElement("p");
					var br1 = document.createElement("br");
					var br2 = document.createElement("br");
					var br3 = document.createElement("br");
					var textoh1 = document.createTextNode(res[entrada].Usuario + " ");
					var textoh2 = document.createTextNode(res[entrada].Tuit+" ");
					var textoh3 = document.createTextNode(res[entrada].fecha);
					h1.appendChild(textoh1);
					h1.appendChild(br1);
					h1.appendChild(textoh2);
					h1.appendChild(br2);
					h1.appendChild(textoh3);
					h1.appendChild(br3);
					div.appendChild(h1);
					var div2 = document.getElementById("divTuits");
					div2.appendChild(div);	
			}
		}
	}		
	}
}

function MostrarTuitsNuevo(){
		var con = new XMLHttpRequest();
		con.open("GET","tiutNuevo.php?",true);
		con.send(null);
		con.onreadystatechange = function(){
		if(con.readyState == 4 && con.status == 200){
			if (con.responseText != "") {
			var res = JSON.parse(con.responseText);
			for(var entrada in res){
					var div = document.createElement("div");
					div.classList.add("tuits");		
					var h1 = document.createElement("p");
					var br1 = document.createElement("br");
					var br2 = document.createElement("br");
					var br3 = document.createElement("br");
					var textoh1 = document.createTextNode("@"+res[entrada].Usuario + " ");
					var textoh2 = document.createTextNode(res[entrada].Tuit+" ");
					var textoh3 = document.createTextNode(res[entrada].fecha);
					h1.appendChild(textoh1);
					h1.appendChild(br1);
					h1.appendChild(textoh2);
					h1.appendChild(br2);
					h1.appendChild(textoh3);
					h1.appendChild(br3);
					div.appendChild(h1);
					var div2 = document.getElementById("divTuits");
					div2.appendChild(div);	
			}
		}else{
		}
	}
	}
}

function cerrarSesion(){
	var con = new XMLHttpRequest();
		con.open("GET","cerrarSesion.php?",true);
		con.send(null);
		location.href='./inicioSesion.html';
}





