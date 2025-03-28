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
            add_geo_points('worldmap');
            break;
        case "europe":
            europe();
            add_geo_points('EUR');
            break;
        case "asia":
            asia();
            add_geo_points('ASI');
            break;
        case "africa":
            africa();
            add_geo_points('AFR');
            break;
        case "northamerica":
            northamerica();
            add_geo_points('AME');
            break;
        case "southamerica":
            southamerica();
            add_geo_points('AME');
            break;
        case "australia":
            australia();
            add_geo_points('AOA');
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
        noWrap: true,
        maxZoom: 6,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
//geojson data
var geodata;
fetch(geojson_url)
    .then(response => response.json())
    .then(data => {geodata = data});

     //Layer variable
    //console.log("step 1 layer variable");

    var worldmap_ = L.geoJSON();
    var EUR_ = L.geoJSON();
    var ASI_ = L.geoJSON();
    var AFR_ = L.geoJSON();
    var AME_ = L.geoJSON();
    var AOA_ = L.geoJSON();


// Function to add the geo points to the map
function add_geo_points(selected_region) {

    //var to chose mode of add_geo_points
    const mode = 1; // 0 = deploy all points, 1 = change region mode

    //mode 0 = deploy all points
    if (mode == 0 && onetimer == false) {
        onetimer = true;
        L.geoJSON(geodata, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }).addTo(map);
            
    //mode 1 = change region mode

    //adding the geo points to the variables only once
    } else if (mode == 1) {
        if (onetimer == false){
            onetimer = true;

            //adding markerinfo from geojson to layergroup variables
            L.geoJSON(geodata, {
                onEachFeature: function (feature, layer) {

                    //to worldmap layer
                    worldmap_.addLayer(layer);
                    layer.bindPopup(feature.properties.popupContent);

                    //to specific region layer
                    if (feature.properties.Region == "EUR") {
                        EUR_.addLayer(layer);
                        layer.bindPopup(feature.properties.popupContent);
                    } else if (feature.properties.Region == "ASI") {
                        ASI_.addLayer(layer);
                        layer.bindPopup(feature.properties.popupContent);
                    } else if (feature.properties.Region == "AFR") {
                        AFR_.addLayer(layer);
                        layer.bindPopup(feature.properties.popupContent);
                    } else if (feature.properties.Region == "AME") {
                        AME_.addLayer(layer);
                        layer.bindPopup(feature.properties.popupContent);
                    } else if (feature.properties.Region == "AOA") {
                        AOA_.addLayer(layer);
                        layer.bindPopup(feature.properties.popupContent);
                    }else {
                        console.error("No valid region found!");
                    }
                }
            });
        }

        //removing previous layers
        if(map.hasLayer(worldmap_)) {
            map.removeLayer(worldmap_);
        }
        if(map.hasLayer(EUR_)) {
            map.removeLayer(EUR_);
        }
        if(map.hasLayer(ASI_)) {
            map.removeLayer(ASI_);
        }
        if(map.hasLayer(AFR_)) {
            map.removeLayer(AFR_);
        }
        if(map.hasLayer(AME_)) {
            map.removeLayer(AME_);
        }
        if(map.hasLayer(AOA_)) {
            map.removeLayer(AOA_);
        }

        switch (selected_region) {
            case "worldmap":
                worldmap_.addTo(map);
                break;
            case "EUR":
                EUR_.addTo(map);
                break;
            case "ASI":
                ASI_.addTo(map);
                break;
            case "AFR":
                AFR_.addTo(map);
                break;
            case "AME":
                AME_.addTo(map);
                break;
            case "AOA":
                AOA_.addTo(map);
                break;
            default:
                console.error("No valid selection! at: add_geo_points mode 1");
        }
            
    } else {
        console.error("No valid mode selected!");
    }
    
}