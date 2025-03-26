var dumpling_name = localStorage.getItem("dumplingName");
var dumplingnameArray = JSON.parse(localStorage.getItem("nameArray"));
var everything = JSON.parse(localStorage.getItem("allData"));
var every_country = JSON.parse(localStorage.getItem("allCountries"));
localStorage.clear();

//console.log(dumpling_name);
//console.log(dumplingnameArray);
//console.log(everything);
//console.log(every_country);

var selected_dumpling = [];

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
        }
    }
    var getSiteDiv = document.getElementById("hier_rein");
    var neuer_div = "";
    var description = selected_dumpling[0].Description;
    description = description.replaceAll("_",",");
    var natlang = selected_dumpling[0].Name_Landesprache;

    
    neuer_div += '<div class ="erstelltes"><div class="left"><div class="left_name">'+dumpling_name+'</div><div class="left_nat">'+natlang+'</div><div class="left_des">'+description+'</div></div><div class="right"><div class="right_country"><p>Aus '+country+'</p></div></div></div>';
    
    //console.log(neuer_div);
    
    getSiteDiv.innerHTML = neuer_div;
}

content_creation();
//console.log(selected_dumpling);
