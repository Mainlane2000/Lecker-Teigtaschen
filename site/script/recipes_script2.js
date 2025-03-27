var everything = JSON.parse(localStorage.getItem("allData"));
localStorage.clear();

function createTiles() {
    var rein = "";
    var getDiv = document.getElementById("rezepte_rein");

    rein+= '<div class = "rein"> ';
    for(var i = 0; i < everything.length; i++) {
        if(everything[i].Bilder_Link != "na"){
            rein += '<div class = "rein_div"><div class="field"><a href="'+ everything[i].Link+'"><img src="'+ everything[i].Bilder_Link +'" class = "hover_img"></a><div class = "credits"><span>'+ everything[i].Credit_link +'</span></div></div><div class = "caption"><span>'+ everything[i].Name_Teigtasche+'</span></div></div>';
        } else {
            rein += '<div class = "rein_div"><div class="field"><a href="https://www.schmidhuber.de/wp-content/uploads/2022/02/placeholder-16.png"><img src="'+ everything[i].Bilder_Link +'" class = "hover_img"></a><div class = "credits"><span>'+ everything[i].Credit_link +'</span></div></div><div class = "caption"><span>'+ everything[i].Name_Teigtasche+'</span></div></div>';
        }
    }
    rein += '</div>';
    getDiv.innerHTML = rein;
    console.log(rein);
}
createTiles();


