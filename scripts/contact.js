//Google Map API: AIzaSyAObERjOmieg4vRHlYQbYxHeYQpxX3YF50
var request = new XMLHttpRequest();
var map;

loadData();

function loadData() {
    request.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address=143+Main+Steet,Salt+Lake+City,UT&key=AIzaSyAObERjOmieg4vRHlYQbYxHeYQpxX3YF50');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    map = JSON.parse(request.responseText);
    console.log(map);
    $("#address").html(map.results[0].address_components[0].long_name+" ");
    $("#address").append(map.results[0].address_components[1].long_name+" ");
    $("#city").html(map.results[0].address_components[3].long_name+", ");
    $("#city").append(map.results[0].address_components[5].long_name+" ");
    var aClicked = true;
    $("#address").on("click", function(){
        if(aClicked){
            aClicked=!aClicked;
            $("#address").css("font-size","2.5em");
            cClicked=aClicked;
            $("#city").css("font-size","2.5em");
        } else{
            aClicked=!aClicked;
            $("#address").css("font-size","1em");
            cClicked=aClicked;
            $("#city").css("font-size","1em");
        }
    });
    var cClicked = true;
    $("#city").on("click", function(){
        if(cClicked){
            cClicked=!cClicked;
            $("#city").css("font-size","2.5em");
            aClicked=cClicked;
            $("#address").css("font-size","2.5em");
        } else{
            cClicked=!cClicked;
            $("#city").css("font-size","1em");
            aClicked=cClicked;
            $("#address").css("font-size","1em");
        }
    });
    var pClicked = true;
    $("#phone").on("click", function(){
        if(pClicked){
            pClicked=!pClicked;
            $("#phone").css("font-size","2.5em");
            $("#phone img").css("width","50px");
        } else{
            pClicked=!pClicked;
            $("#phone").css("font-size","1em");
            $("#phone img").css("width","20px");
        }
    });
    var eClicked = true;
    $("#email").on("click", function(){
        if(eClicked){
            eClicked=!eClicked;
            $("#email").css("font-size","2.5em");
            $("#email img").css("width","50px");
        } else{
            eClicked=!eClicked;
            $("#email").css("font-size","1em");
            $("#email img").css("width","20px");
        }
    });
    var tClicked = true;
    $("#twitter").on("click", function(){
        if(tClicked){
            tClicked=!tClicked;
            $("#twitter").css("font-size","2.5em");
            $("#twitter img").css("width","50px");
        } else{
            tClicked=!tClicked;
            $("#twitter").css("font-size","1em");
            $("#twitter img").css("width","20px");
        }
    });
    var iClicked = true;
    $("#instagram").on("click", function(){
        if(iClicked){
            iClicked=!iClicked;
            $("#instagram").css("font-size","2.5em");
            $("#instagram img").css("width","50px");
        } else{
            iClicked=!iClicked;
            $("#instagram").css("font-size","1em");
            $("#instagram img").css("width","20px");
        }
    });
    var sClicked = true;
    $("#snapchat").on("click", function(){
        if(sClicked){
            sClicked=!sClicked;
            $("#snapchat").css("font-size","2.5em");
            $("#snapchat img").css("width","50px");
        } else{
            sClicked=!sClicked;
            $("#snapchat").css("font-size","1em");
            $("#snapchat img").css("width","20px");
        }
    });
}

