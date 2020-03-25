# Festivalkart for The Gathering 
En enkel side som viser et kart over Hamar og steder du kan trenge å besøke under The Gathering i tillegg til annen informasjon som kan være nyttig eller morsom.

## Demo
 <a href='https://immandl.github.io/temaoppgave_festivalkart/'>Demo av siden på github pages</a>

## Prosjekt struktur
Denne siden...
- bruker <a href='https://www.mapbox.com/'>mapbox.</a> API for å hente frem et kart. 
- bruker <a href='https://www.highcharts.com/'>highchart</a> for å vise statistikk for The Gathering gjennom tidene
- bruker <a href='https://openweathermap.org/'>open weather map</a> for å kunne vise en live værmelding

Mapbox API hentes inn i header og brukes i map.js
```html
    <!-- Mapbox -->
    <script src='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
```

Javscript filene i bunnen av body
```html
    <script src="./js/map.js"></script> <!-- The map and sidebar information -->
    <script src="./js/weather.js"></script> <!-- Weather card -->
    <script src="./js/sidebar.js"></script> <!-- Sidebar opener -->
    <script src="https://code.highcharts.com/highcharts.js"></script> <!-- Highchart -->
    <script src="./js/timeline.js"></script> <!-- My chart -->
    <script src="./js/overlay.js"></script> <!-- Turns on overlay -->
```
