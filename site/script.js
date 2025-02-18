function search(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        suchfunktion(data);
        }
    };
    xhttp.open("GET", "../test.json", true);
    xhttp.send();

    function suchfunktion(data) {
        //console.log(data);
        //var namearray = [];

        for(var i = 0; i < data.length; i++) {
            for(var i in data) {
                if(namearray.indexOf(data[i].name) < 0) {
                    namearray.push(data[i].name);
                }
                else {

                }
            }
        }
        //console.log(namearray);
    }
}
var namearray = [];
search();
console.log(namearray);