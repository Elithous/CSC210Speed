var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var width = 320;
var height = 400;
var space = 30;
var current = 60;
context.font = "16px Arial";
context.fillStyle = "#FFF";
context.fillText("  0___________________________________", 10,335);
context.fillText(" 10___________________________________", 10,335 - (10 *3));
context.fillText(" 20___________________________________", 10,335 - (20* 3));
context.fillText(" 30___________________________________", 10,335- (30 *3))
context.fillText(" 40___________________________________", 10,335- (40 *3))
context.fillText(" 50___________________________________", 10,335- (50 *3))
context.fillText(" 60___________________________________", 10,335- (60 *3))
context.fillText(" 70___________________________________", 10,335- (70 *3))
context.fillText(" 80___________________________________", 10,335- (80 *3))
context.fillText(" 90___________________________________", 10,335- (90 *3))
context.fillText("100___________________________________", 10,335- (100 *3))
context.fillText("              General Stats in Percentages", 10,325- (102 *3));
context.fillText("Arrival",current -5,360);
context.fillText("Safely", current + (space * 2+10) -5, 360);
context.fillText("Accurate", current + (space * 4+10) -5, 360);
context.fillText("Mortality", current + (space * 6 +22) -5, 360);

 drawChart();
 
 function drawSquare(height, width){
    context.fillStyle = "rgb(100,50,200)" ;
    context.fillRect(0,0,width,height);
    
 }

        function drawChart(){

            context.beginPath()
            context.lineWidth="5";
            context.strokeStyle="#EE6C33";
            context.moveTo(current,334);
            context.lineTo(current, 339  - (97 * 3));
            
            context.lineTo (current + space +5 ,339 - (97 * 3));
            context.lineTo (current + space +5 ,334);
            
            context.stroke(); 
            context.closePath();
            context.fillStyle="#EE6C33";
            context.fill();
            current = current + (space *2+10);
            context.moveTo(current,334);
            context.lineTo(current, 339  - (98 * 3));
            
            context.lineTo (current + space +5 ,339 - (98 * 3));
            context.lineTo(current + space +5 ,334);
            
            context.stroke();
            context.closePath();
            context.fill();
            current = current + (space *2+10);
            context.moveTo(current,335);
            context.lineTo(current, 339  - (99 * 3));
            
            context.lineTo (current + space +5 ,339 - (99 * 3));
            context.lineTo(current + space +5 ,335);
            context.stroke();
            context.closePath();
            context.fill();

            current = current + (space *2+10);
            context.moveTo(current,337);
            context.lineTo(current, 337  - (3 * 3));
            
            context.lineTo (current + space +5 ,337 - (3 * 3));
            context.lineTo(current + space +5 ,337);
            context.stroke();
            context.closePath();
            context.fill();
            // context.lineTo(300,300);
            // context.stroke(); 
            // context.closePath();
            // context.fill();
        }