var image = $("#slideshow");
var numOfImages = 4;
var imageIndex = 0;

function changeImage() {
    image.fadeOut("slow", function() {
        image.attr("src","images/slideshow/" + imageIndex + ".jpg");
        image.fadeIn("slow");
    });
    imageIndex++;
    if (imageIndex >= numOfImages) {
        imageIndex = 0;
    }
    console.log("changed");
}
window.onload = function() {
    setInterval(changeImage,4000);
} 