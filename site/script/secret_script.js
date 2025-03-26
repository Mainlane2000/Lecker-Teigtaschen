function game() {
    var n = Math.floor(6 *Math.random())+1;
    var rdm_fact = fact_arr[n];
    var rein = "";
    var getSiteDiv = document.getElementById("hier_rein");
    
    rein += rdm_fact.text;
    getSiteDiv.innerHTML = rein;
}
function reroll() {
    var n = Math.floor(6 *Math.random())+1;
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
        "text":"Fact3"
    },
    {
        "id":4,
        "text":"Fact4"
    },
    {
        "id":5,
        "text":"Fact5"
    },
    {
        "id":6,
        "text":"Teigtaschen können auch eine süße Füllung enthalten."
    }
]