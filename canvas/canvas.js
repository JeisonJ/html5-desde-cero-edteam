
// 1. Obtener el elemento canvas del html.
var canvas = document.getElementById("firstcanvas");

// Verificando que todo vaya bien.
//alert(canvas);
//console.log(canvas);

// 2. Obtener el contexto(lienzo) donde voy a dibujar.
var contexto = canvas.getContext("2d");

// 3. Entender el sistema de coordenadas (x,y).

// 4. Dibujar.

/* Para dibujar lineas se necesita un punto inicial y un punto final.
 * 
 * Lineas.
 */
contexto.moveTo(250,250); // Punto desde donde partira el dibujo.
contexto.lineTo(0,500);   // Para definir el punto final para el dibujo.
contexto.lineTo(500,250); // Comenzara donde finaliza la anterior.
contexto.lineTo(250,250); // Comenzara donde finaliza la anterior.
contexto.stroke();		  // Metodo obligatorio para dibujar, dibuja la linea.

// Para dibujar nuevas lineas independientes.
contexto.beginPath(); 	  		// Creando nueva ruta.
contexto.moveTo(0,0);     		// Punto de partida del dibujo.
contexto.lineTo(200,200); 		// Punto final de dibujo.
contexto.strokeStyle = "green"; // Dandole un color a la linea.
contexto.lineWidth   = 20; 		// Asignandole un ancho a la linea.
contexto.stroke();				// Dibujando.
