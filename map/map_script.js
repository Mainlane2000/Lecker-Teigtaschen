// Description: This script is used to create the map and the functions to change the view of the map to the selected continent.
// Functions to change the map view to the selected continent
var fuc = 0; // function use counter    0 = no function used yet

function worldmap(){
    if (fuc > 0) {
        map.flyTo([0, 0], 0);

    } else {
        var map = L.map('map').setView([0, 0], 0);
        startmap(map)
    }
    fuc++;          
}

function europe() {
    if (fuc > 0) {
        map.panTo([54.34, 20.88], 4);

    } else {
    var map = L.map('map').setView([54.34, 20.88], 4);
    startmap(map)
    }
    fuc++;
}
function asia() {
    if (fuc > 0) {
        map.flyTo([48.63, 110.63], 3);

    } else {
    var map = L.map('map').setView([48.63, 110.63], 3);
    startmap(map)
    }
    fuc++;
}
function africa() {
    if (fuc > 0) {
        map.flyTo([1.10, 25.90], 4);

    } else {
    var map = L.map('map').setView([1.10, 25.90], 4);
    startmap(map)
    }
    fuc++;
}
function northamerica() {
    if (fuc > 0) {
        map.flyTo([53.80, -96.53], 3);

    } else {
    var map = L.map('map').setView([53.80, -96.53], 3);
    startmap(map)
    }
    fuc++;
}
function southamerica() {
    if (fuc > 0) {
        map.flyTo([-22.72, -57.52], 4);

    } else {
    var map = L.map('map').setView([-22.72, -57.52], 4);
    startmap(map)
    }
    fuc++;
}
function australia() {
    if (fuc > 0) {
        L.map.setView([-26.94, 153.58], 4);

    } else {
    var map = L.map('map').setView([-26.94, 153.58], 4);
    startmap(map)
    }
    fuc++;
}

function startmap(map) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 6,
        attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

//Functions to add mapmarkers to the map from geoJSON file 


