function search(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        suchfunktion(data);
        }
    };
    xhttp.open("GET", "../../Database/TeigtaschenDerWelt.json", true);
    xhttp.send();

    function suchfunktion(data) {
        //console.log(data);
        for(var i = 0; i < data.length; i++) {
            for(var i in data) {
                all_data.push(data[i]);
                if(namearray.indexOf(data[i].Name_Teigtasche) < 0) {
                    namearray.push(data[i].Name_Teigtasche);
                }
                else {

                }
            }
        }
        //console.log(namearray);
    }
}
function suchen(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data2 = JSON.parse(this.responseText);
        suchfunktion2(data2);
        }
    };
    xhttp.open("GET", "../../Database/countries.json", true);
    xhttp.send();
    
    function suchfunktion2(data2) {
        for(var i = 0; i < data2.length; i++) {
            for(var i in data2) {
                all_countries.push(data2[i]);
            }
        }
    }
}
var namearray = [];
var all_data = [];
var all_countries = [];
search();
suchen();
//console.log(namearray);
//console.log(all_data);
//console.log(all_countries);

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if(!val) {return false;}
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);
        //console.log(a + "a1");
        for(i = 0; i < arr.length; i++) {
            if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                //console.log(b);
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
        //console.log(b);
        //console.log(a + "a2");
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if(e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if(e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if(e.keyCode == 13) {
            e.preventDefault();
            if(currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("myInput"), namearray);
var toStorage;
var getInputValue = document.getElementById("myInput");

getInputValue.addEventListener("keyup", function(e){
    if(e.key == "Enter") {
        for(var i = 0; i < namearray.length; i++) {
            if(namearray[i] == getInputValue.value) {
                toStorage = getInputValue.value;
            }
        }
        if(getInputValue.value != toStorage) {
            toStorage = null;
        }
    }
    console.log(toStorage);
    if(toStorage != null) {
        localStorage.setItem("dumplingName", toStorage);
        localStorage.setItem("nameArray", JSON.stringify(namearray));
        localStorage.setItem("allData", JSON.stringify(all_data));
        localStorage.setItem("allCountries", JSON.stringify(all_countries));
        window.location.href = "modular-site.html";
    }
});