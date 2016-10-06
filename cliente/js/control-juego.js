var url="http://127.0.0.1:1338/";

//Funciones que modifican el index

function inicio(){
	mostrarCabecera();
}

function borrarControl(){
	$('#control').remove();

}

function mostrarCabecera(){
	$('#cabecera').remove();
	$('#control').append('<div id="cabecera"><h2>Panel de control</h2><input type="text" id="nombre" placeholder="introduce tu nombre">');
	botonNombre();
}

function botonNombre(){
	$('#cabecera').append('<button type="button" id="nombreBtn" class="btn btn-primary btn-md">Medium</button>');
	$('#nombreBtn').on('click',function(){
		$('#nombreBtn').remove();
		crearUsuario($('#nombre').val());
		//control de esta variable por si usuarios no meten nada
	});
}

//Funciones de comunicacion con el servidor

function crearUsuario(nombre){
	if (nombre==""){
		nombre="jugador";
	}
	$.getJSON(url+'crearUsuario/'+nombre,function(datos){
		//datos tiene la respuesta del servidor
		//mostrar los datos del usuario
	});
	//mostrar datos 
}