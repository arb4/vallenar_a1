
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-28.572343, -70.768438],
    zoom: 13,
    zoomControl: true
});


				
var	calles2 = L.geoJson(calles2, {	
              	    style: function(feature) {
        switch (feature.properties.nombre) {
            case 'EMILIO ZALAQUETT ISSA': return {color: "blue"};
            case 'MARTIN GREGORIO DEL VILLAR':   return {color: "green"};
			case 'AVENIDA ARMANDO ROSSEL GOMEZ':   return {color: "blue"};
			case 'PROVIDENCIA':   return {color: "orange"};
			case 'LAUTARO':   return {color: "olive"};
			case 'CARMEN':   return {color: "teal"};
			case 'CAUPOLICAN':   return {color: "purple"};
			case 'JOAQUIN CABEZAS':   return {color: "red"};
			case 'PRESBITERIO BRUNO ZAVALA': return {color: "yellow"};
            case 'HUGO CHACALTANA CRUZ':   return {color: "green"};
			case 'AVENIDA EL BUEN RETIRO':   return {color: "blue"};
			case 'JUAN MULET BOU':   return {color: "orange"};
			case 'QUINTIN ROMERO ROJAS':   return {color: "olive"};
			case 'NELSON BRAVO MARQUEZ':   return {color: "teal"};
			case 'SABINA CUADRA':   return {color: "purple"};
			case 'DANIEL FERNANDEZ': return {color: "yellow"};
            case 'RICHARD ALDAY ROSSEL':   return {color: "green"};
			case 'JORGE PINO ALQUINTA':   return {color: "blue"};
			case 'LUIS HORMAZABAL GODOY':   return {color: "orange"};
			case 'AQUILES MIERES NEIRA':   return {color: "olive"};
			case 'JUAN MULET BOU':   return {color: "teal"};
			case 'LUIS CORTES OVALLE':   return {color: "purple"};
			case 'JOSE VASQUEZ MONTENEGRO':   return {color: "red"};
			case 'HORACIO CRUZ CORTES': return {color: "yellow"};
            case 'LICOYAN ROJAS SAGUA':   return {color: "green"};
			case 'HUMBERTO RIVERA SOTOMAYOR':   return {color: "blue"};
			case 'RIO HUASCO':   return {color: "orange"};
			case 'JUAN SAAVEDRA ESQUIVEL':   return {color: "olive"};
			case 'EUSEBIO LILLO':   return {color: "teal"};
			case 'GABRIELA MISTRAL':   return {color: "purple"};
			case 'MANUEL BULNES':   return {color: "orange"};
			case 'RIQUELME':   return {color: "olive"};
			case 'HONORIO PEREZ':   return {color: "teal"};
			case 'SANTA CRUZ':   return {color: "purple"};
			case 'LOS LIRIOS':   return {color: "red"};
			case 'PASAJE LOS LIRIOS': return {color: "yellow"};
            case 'DIEGO DE ALMAGRO':   return {color: "green"};
			case 'JAVIERA CARRERA':   return {color: "blue"};
			case 'PJE LAGUNA GRANDE':   return {color: "orange"};
			case 'BERNARDO OHIGGINS':   return {color: "olive"};
			case 'ANDRES BELLO':   return {color: "teal"};
			case 'LIBERTAD':   return {color: "purple"};
			
			
        }
    },

     onEachFeature: function (feature, layer) {
	var txt = "Calle :";	 
	var txt2 = "con un numero de";
	var txt3 = "Homepass";
       layer.bindPopup(txt.fontcolor("DarkGreen")+" "+" "+feature.properties.nombre.fontcolor("blue").fontsize(3)+" "+txt2.fontcolor("DarkGreen")+" "+feature.properties.hp.fontcolor("blue").fontsize(3)+" "+txt3.fontcolor("DarkGreen"));
   } 	
                  
              }).addTo(map);
			  
			  
			  
var style1 = {
                    'color': "red",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.5
                };								  
			  
	

var geojsonMarkerOptions = {
    radius: 2.4,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
	
 var cent= L.geoJSON(cent, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);		  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
