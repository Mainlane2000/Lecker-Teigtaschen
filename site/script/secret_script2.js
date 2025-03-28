function game() {
    var n = Math.floor(12 *Math.random())+1;
    var rdm_fact = fact_arr[n];
    var rein = "";
    var getSiteDiv = document.getElementById("hier_rein");
    
    rein += rdm_fact.text;
    getSiteDiv.innerHTML = rein;
}
function reroll() {
    var n = Math.floor(12 *Math.random())+1;
    var rdm_fact = fact_arr[n];
    var rein = "";
    var getSiteDiv = document.getElementById("hier_rein");
    
    rein += rdm_fact.text;
    getSiteDiv.innerHTML = rein;
}

var fact_arr = [
    {
        "id":0,
        "text":"platzhalter"
    },
    {
        "id":1,
        "text":"Es gibt 3 Arten Teigtaschen zuzubereiten; Sie können gekocht, gedämpft oder frittiert werden."
    },
    {
        "id":2,
        "text":"Die meisten Teigtaschen sind nicht dazu gedacht geschnitten zu werden, sie können in einem Bissen gegessen werden."
    },
    {
        "id":3,
        "text":"Am 5. Tag des neuen Jahres werden in China Teigtaschen gegessen welche Reichtum und Wohlstand repräsentieren."
    },
    {
        "id":4,
        "text":"Auf chinesisch heißt Wonton -Wolken schlucken-"
    },
    {
        "id":5,
        "text":"Die Perfekte Dippingsauce für Gyoza besteht aus 1/3 Reisessig, 1/3 Sojasauce und 1/3 Chiliöl."
    },
    {
        "id":6,
        "text":"Teigtaschen können auch eine süße Füllung enthalten."
    },
    {
        "id":7,
        "text":"Man kann nicht zu viele Teigtaschen essen."
    },
    {
        "id":8,
        "text":"Chicken Nuggets werden ab und zu fälschlicher Weise als Teigtasche missidentifiziert, jedoch handelt es sich hierbei um ein meist industrielle paniertes Produkt."
     },
    {
        "id":9,
        "text":"Man könnte Backen als eine Garform für Teigtaschen betrachten, wir Persönlich sehen das genauso und haben deshalb gebackene Teigtaschen auch in die Sammlung aufgenommen, allerdings gelten sie durch ihre Zubereitungsart eigentlich als Backwaren."
    },
    {
        "id":10,
        "text":"Teigtaschen sind niemals füllungslos."
    },
    {
        "id":11,
        "text":"Es gibt Teigtaschen die nicht ganz geschlossen sind. Ein Beispiel dafür sind Boraki aus Armenien."
    },
    {
        "id":12,
        "text":"Es gibt immer eine Teigtasche die man noch nie zuvor probiert hat, und es lohnt sich dem nachzukommen."
    }
];

//json data
var data;
var json_url = "../../Database/TeigtaschenDerWelt.json";

async function fetchData() {
    try {
        const response = await fetch(json_url);
        data = await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();

function trivia() {

    var n = Math.floor(Math.random() * data.length);

    if (data[n].Name_Teigtasche != "na" && data[n].Bilder_Link != "na") {
        
        var hTmL = document.getElementById("trivia_content");
        var trivia_Game = "";
        trivia_Game += "<h2>Trivia</h2>";
        trivia_Game += "<figure><img src='" + data[n].Bilder_Link + "' alt='Teigtasche' width='300' height='300'><figcaption>'" + data[n].Credit_link + "'</figcaption></figure>";
        trivia_Game += "<p>Wie heißt diese Teigtasche?</p>";
        trivia_Game += "<button class='btn' id='btn1' onclick='checkAnswer(0)'>" + data[n].Name_Teigtasche + "</button>";
        if (data[n + 10].Name_Teigtasche != "na") {
            if (n + 10 >= data.length) {
                trivia_Game += "<button class='btn' id='btn2' onclick='checkAnswer(1)'>" + data[n + 10].Name_Teigtasche + "</button>";
            }
            trivia_Game += "<button class='btn' id='btn2' onclick='checkAnswer(1)'>" + data[n - 10].Name_Teigtasche + "</button>";
        }
        hTmL.innerHTML = trivia_Game;
    } else {
        trivia();
    }
}

function checkAnswer(answer) {
    
}