var dumpling_name = localStorage.getItem("dumplingName");
var dumplingnameArray = JSON.parse(localStorage.getItem("nameArray"));
var everything = JSON.parse(localStorage.getItem("allData"));
var every_country = JSON.parse(localStorage.getItem("allCountries"));
localStorage.clear();

//console.log(dumpling_name);
//console.log(dumplingnameArray);
//console.log(everything);
console.log(every_country);

var selected_dumpling = [];
var lat;
var long;

function content_creation() {
    for(var i = 0; i < dumplingnameArray.length; i++) {
        if(dumplingnameArray[i] == dumpling_name) {
            for(o = 0; o < everything.length; o++) {
                if(dumplingnameArray[i] == everything[o].Name_Teigtasche) {
                    selected_dumpling.push(everything[o])
                }
            }
        }
    }
    var country;
    for(var p = 0; p < every_country.length; p++) {
        if(every_country[p].Index == selected_dumpling[0].Landesindex) {
            country = every_country[p].Country;
            lat = every_country[p].LAT;
            long = every_country[p].LONG;
        }
    }
    var getSiteDiv = document.getElementById("hier_rein");
    var neuer_div = "";
    var description = selected_dumpling[0].Description;
    description = description.replaceAll("_",",");
    var natlang = selected_dumpling[0].Name_Landesprache;
    var dumpling_img = "";
    if(selected_dumpling[0].Bilder_Link == "na") {
        dumpling_img = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";
    } else {
        dumpling_img = selected_dumpling[0].Bilder_Link;
    }
    

    neuer_div += 
    '<div class="erstelltes-container">'+
    '<div class="erstelltes">'+
        '<div class="left">'+
            '<div class="left_name">'+
                dumpling_name+
                ' aus '+
                country+
            '</div>'+
            '<div class="left_nat">'+
                natlang+
            '</div>'+
            '<div class="left_des">'+
                description+
            '</div>'+
        '</div>'+
        '<div class="right">'+
            '<div class="erstelltes-bild-container">'+
        '<img src="'+dumpling_img+'" alt="" class="erstelltes-bild">'+
    '</div>'+
            '<div class="right_map">'+
                '<div id="map"></div>'+
            '</div>'+
        '</div>'
    '</div>'+
'</div>';
    //console.log(neuer_div);
    //console.log("test");
    getSiteDiv.innerHTML = neuer_div;

    //timeout for map creation
    setTimeout(() => {
        minimap();
    }, 40);
}

content_creation();
//console.log(selected_dumpling);

function minimap (){
    var map;
    map = L.map('map').setView([lat, long], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        noWrap: true,
        maxZoom: 4,
        minZoom: 4,
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([lat, long]).addTo(map);
}
