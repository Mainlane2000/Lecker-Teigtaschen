// Description: This script is used to create the map and the functions to change the view of the map to the selected continent.

// Functions to change the map view to the selected continent

//Urls for the json files
const geojson_url = '../../Database/Map_Data/geojson/Dumplingpoints.geojson';


// variable for the map
var map;
var fuc = 0; // function use counter    0 = no function used yet
var onetimer = false; // one time function use

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
    //initialising variable 
    var geojson_layer;

    //var to chose mode of add_geo_points
    const mode = 0; // 0 = deploy all points, 1 = change region mode

    //fetching the geojson file
    fetch(geojson_url)
    .then(response => response.json())
    .then(data => {

        //mode 0 = deploy all points
        if (mode == 0 && onetimer == false) {
            onetimer = true;
            L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(feature.properties.popupContent);
                }
            }).addTo(map);
            
        //mode 1 = change region mode
        //@ToDo: add functinality to change the regionmarkers on the map
        } else if (mode == 1) {

            switch (selected_region) {
                case "worldmap":
                    geojson_layer = L.geoJSON(data, {
                        onEachFeature: function (feature, layer) {
                            layer.bindPopup(feature.properties.popupContent);
                        }
                    }).addTo(map);
                    break;
                case "europe":
                    geojson_layer.removeLayer();
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
            
        } else {
            console.error("No valid mode selected!");
        }
    });
}