describe("El juego niveles incialmente...", function() {
	var juego;
  var modelo=require('./modelo.js');


	beforeEach(function(){
		juego=new modelo.Juego();
	});

  it("una coleccion de niveles", function() {
  	expect(juego.niveles.length).toEqual(0);
  	expect(juego.usuarios.length).toEqual(0);
  });

  it("agregar usuario",function(){
  	var usuario=new modelo.Usuario("Pepe");
  	juego.agregarUsuario(usuario);
  	
  	expect(juego.usuarios[0]).toEqual(usuario);
  	expect(juego.usuarios[0].nombre).toEqual("Pepe");
  })
  it("agregar nivel",function(){
  	var nivel=new modelo.Nivel(0);
  	juego.agregarNivel(nivel);

  	expect(juego.niveles[0]).toEqual(nivel);
  	expect(juego.niveles[0].nivel).toEqual(0);
  })
});