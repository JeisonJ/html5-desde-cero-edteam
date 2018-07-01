
// Primero obtner el elmento boton del html.
var boton = document.getElementById('boton');
// Agregando el evento al boton.
boton.addEventListener('click',obtenerPosicion);

/**
 * Funcion que accede al objeto navigator y a sus
 * diferentes objetos.
 */
 function obtenerPosicion() {
 	//console.log(navigator);
 	navigator
 	.geolocation
 	.getCurrentPosition(mostrarPosicion);
 }

function mostrarPosicion(position) {
	var latitud = position.coords.latitude;
	var longitud= position.coords.longitude;
	//console.log(longitud,latitud);

	/**
	 * Usando la api de google
	 * Necesita un elemento donde dibujarse.
	 * y opciones: Objeto: punto central del mapa, donde 
	 * se centrara el mapa y el nivel de zoom.
	 */
	 var mapa    = document.getElementById('mapa');
	 var coordenadas = {lat:latitud, lng:longitud};
	 var opciones    = {
	 	center: coordenadas,
	 	zoom  : 10,
	 	styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]			
	 }
	var map = new google.maps.Map(mapa,opciones);

	// Marcador en el mapa.
	var marcador = new google.maps.Marker({
		position: coordenadas,
		map:map
	});
}