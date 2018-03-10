var slideshow = $("#slideshow")
var image = $("#nowSlide");

var numOfImages = 5;
var imageIndex = 1;

var width = 800;
var height = 600;

function changeImage() {
    slideshow.css({"background-image" : "url(images/slideshow/" + imageIndex + ".jpg)"});
    image.fadeOut(700, function() {
        image.attr("src", "images/slideshow/" + imageIndex + ".jpg");
        image.css({"display" : "inherit"})
        imageIndex++;
        if (imageIndex >= numOfImages) {
            imageIndex = 0;
        }
    });
    
}
window.onload = function() {
    slideshow.css({"width": width, "height": height, "background-size" : width + "px " + height + "px"});
    image.attr("width", width + "px");
    image.attr("height", height + "px");
    image.css({"position" : "absolute"})
    setInterval(changeImage,4000);
} 