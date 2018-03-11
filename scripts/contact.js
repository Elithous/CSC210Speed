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

    

}
