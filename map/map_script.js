// Description: This script is used to create the map and the functions to change the view of the map to the selected continent.

// Functions to change the map view to the selected continent
var fuc = 0; // function use counter    0 = no function used yet

//Urls for the js
const kontinente_url = './Files/Used_Data/json/Kontinente.json';
const geojson_url = '../Files/Used_Data/geojson/Dumplingpoints.geojson';

// variable for the map
var map;

function map_selection(region) {
    //console.log(region);
    switch (region) {
        case "worldmap":
            worldmap();
            add_geo_points(region, 'worldmap');
            break;
        case "europe":
            europe();
            add_geo_points(region, 'EUR');
            break;
        case "asia":
            asia();
            add_geo_points(region, 'ASI');
            break;
        case "africa":
            africa();
            add_geo_points(region, 'AFR');
            break;
        case "northamerica":
            northamerica();
            add_geo_points(region, 'AME');
            break;
        case "southamerica":
            southamerica();
            add_geo_points(region, 'AME');
            break;
        case "australia":
            australia();
            add_geo_points(region, 'AOA');
            break;
        default:
            console.error("Invalid selection");
    }
}

// Functions to create the map for each continent
function worldmap(){
    if (fuc == 0) {
    map = L.map('map').setView([0, 0], 0);
    start_map(map);
    fuc++;
    } else {
        if (!map.getCenter().equals([0, 0]) || map.getZoom() !== 0) {
            map.flyTo([0, 0], 0);
        }
    }          
}
function europe() {
    if (fuc == 0) {
        map = L.map('map').setView([54.34, 20.88], 4);
    start_map(map);
    fuc++;
    } else {
        map.flyTo([54.34, 20.88], 4);
    }
}
function asia() {
    if (fuc == 0) {
        map = L.map('map').setView([48.63, 110.63], 3);
        start_map(map);
        fuc++;
    } else {
        map.flyTo([48.63, 110.63], 3);
    }
}
function africa() {
    if (fuc == 0) {
        map = L.map('map').setView([1.10, 25.90], 4);
        start_map(map);
        fuc++;
    } else {
        map.flyTo([1.10, 25.90], 4);
    }
}
function northamerica() {
    if (fuc == 0) {
        map = L.map('map').setView([53.80, -96.53], 3);
        start_map(map);
        fuc++;
    } else {
        map.flyTo([53.80, -96.53], 3);
    }
}
function southamerica() {
    if (fuc == 0) {
        map = L.map('map').setView([-22.72, -57.52], 4);
        start_map(map);
        fuc++;
    } else {
        map.flyTo([-22.72, -57.52], 4);
    }
}
function australia() {
    if (fuc == 0) {
        map = L.map('map').setView([-26.94, 153.58], 4);
        start_map(map);
        fuc++;
    } else {
        map.flyTo([-26.94, 153.58], 4);
    }
}
// Function to add a base layer to the map -> OpenStreetMap
function start_map(map) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 6,
        attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

// Function to add the geo points to the map
function add_geo_points(region, selected_region) {

    var geojson_layer = L.geoJSON();

    //geojson_layer.removeLayer();
    

    if (selected_region == 'worldmap') {
        // Get all the data from the geojson file -> https://www.reddit.com/r/learnjavascript/comments/13vuuq7/how_to_import_json_files_in_js/
        fetch(geojson_url)
            .then(response => response.json())
            .then(data => {
                geojson_layer.addData(data, {
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup(feature.properties.popupContent);
                    }
                }).addTo(map);
            });
    } else {
        // TODO: Implement functionality for adding geo points for the selected region.
    }

}
    

// Get the data from the json "Kontinente" file and connect its Region Tag to "region"
/* function get_data(region) {
    async function get_json() {
        const response = await fetch(kontinente_url);
        const data = await response.json();
        return data;
    } 

    //region_codes = get_json();

    switch (region) {
        case "worldmap":
            return 'worldmap';
        case "europe":
            return 'EUR';
        case "asia":
            return 'ASI';
        case "africa":
            return'AFR';
        case "northamerica":
            return 'AME';
        case "southamerica":
            return 'AME';
        case "australia":
            return 'AOA';
        default:
            console.error("No valid selection! at: get_data()");
    }
} */
