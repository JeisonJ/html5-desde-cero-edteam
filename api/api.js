
//console.log(window);

/**
 * Ojeto en JavaScript
 */
 var miMascota = {
 	nombre : "Dino",
 	tipo   : "Perro",
 	color  : "Blanco",
 	peso   : "30kg",
 	correr : function() {
 		console.log("Dino esta corriendo");
 	},
 	comidas: {
 		favorita : "Pollo",
 		prohibida: "Pescado",
 		diarias  : 3
 	}
 }

 console.log(miMascota);
 console.log(miMascota.peso);
 console.log(miMascota.comidas.favorita);

 /**
  * Eventos en JS
  */

  var titulo = document.getElementById('titulo'); // Obteniendo el elemento con el id titulo del html.
  titulo.addEventListener('click', clickTitulo);
    
    function clickTitulo(){
        console.log("Has hecho click en el titulo");
    }
 
