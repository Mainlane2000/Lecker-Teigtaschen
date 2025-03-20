var dumpling_name = localStorage.getItem("dumplingName");
var dumplingnameArray = JSON.parse(localStorage.getItem("nameArray"));
var everything = JSON.parse(localStorage.getItem("allData"));
localStorage.clear();

console.log(dumpling_name);
console.log(dumplingnameArray);
console.log(everything);

var selected_dumpling = [];

function content_creation() {
    for(var i = 0; i < dumplingnameArray.length; i++) {
        if(dumplingnameArray[i] == dumpling_name) {
            for(o = 0; o < everything.length; o++) {
                if(dumplingnameArray[i] == everything[o].name) {
                    selected_dumpling.push(everything[o])
                }
            }
        }
    }
    var getSiteDiv = document.getElementById("hier_rein");
    var neuer_div = "";
    var description = selected_dumpling[0].description;
    var natlang = selected_dumpling[0].nativelanguagename;
    var country = selected_dumpling[0].country;

    neuer_div += '<div class ="erstelltes"><div class="left"><div class="left_name">'+dumpling_name+'</div><div class="left_nat">'+natlang+'</div><div class="left_des">'+description+'</div></div><div class="right"><div class="right_country"><p>From '+country+'</p></div></div></div>';
    
    console.log(neuer_div);
    
    getSiteDiv.innerHTML = neuer_div;
}
content_creation();
console.log(selected_dumpling);
