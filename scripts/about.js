var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var width = 300;
var height = 300;

context.font = "30px Arial";
context.fillText("Hello World",10,50);

 drawSquare(height, width);
 drawChart();
 
 function drawSquare(height, width){
    context.fillStyle = "rgb(100,50,200)" ;
    context.fillRect(0,0,width,height)
 }

        function drawChart(){

            context.beginPath()
            context.lineWidth="5";
            context.strokeStyle="green";
            context.moveTo(0,0);
            context.lineTo(0,97);
            context.lineTo(10,97-300);
            context.closePath();
            context.fill();
        }