function createTiles(everything) {
    var rein = "";
    var getDiv = document.getElementById("rezepte_rein");

    rein+= '<div class = "rein"> ';
    for(var i = 0; i < 233; i++) {
        console.log(i);
        rein += '<figure class="hover-img"><img src="'+ everything[i].Link +'"/><figcaption><h3>'+ everything[i].Credit_link +'</h3></figcaption></figure>';
    }
    rein += '</div>';
    getDiv.innerHTML = rein;
    console.log(rein);
}

console.log(all_data[0].Index);

createTiles(all_data);


