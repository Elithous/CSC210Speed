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
    console.loadComplete(map);
    $("#googleMap").html(map.formatted_address);

}
