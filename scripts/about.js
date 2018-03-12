var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var width = 300;
var height = 300;
var space = 30;
var current = 60;
context.font = "16px Arial";
context.fillText("  0___________________________________", 10,315);
context.fillText(" 10___________________________________", 10,315 - (10 *3));
context.fillText(" 20___________________________________", 10,315 - (20* 3));
context.fillText(" 30___________________________________", 10,315- (30 *3))
context.fillText(" 40___________________________________", 10,315- (40 *3))
context.fillText(" 50___________________________________", 10,315- (50 *3))
context.fillText(" 60___________________________________", 10,315- (60 *3))
context.fillText(" 70___________________________________", 10,315- (70 *3))
context.fillText(" 80___________________________________", 10,315- (80 *3))
context.fillText(" 90___________________________________", 10,315- (90 *3))
context.fillText("100___________________________________", 10,315- (100 *3))
context.fillText("Arrival",current -5,340);
context.fillText("Safely", current + (space * 2) -5, 340);
context.fillText("Accurate", current + (space * 4) -5, 340);
context.fillText("Mortality", current + (space * 6 + 20) -5, 340);
 drawChart();
 
 function drawSquare(height, width){
    context.fillStyle = "rgb(100,50,200)" ;
    context.fillRect(0,0,width,height);
    
 }

        function drawChart(){

            context.beginPath()
            context.lineWidth="5";
            context.strokeStyle="green";
            context.moveTo(current,315);
            context.lineTo(current, 318  - (97 * 3));
            
            context.lineTo (current + space +5 ,318 - (97 * 3));
            context.lineTo (current + space +5 ,315);
            
            context.stroke(); 
            context.closePath();
            context.fillStyle="green";
            context.fill();
            current = current + (space *2);
            context.moveTo(current,315);
            context.lineTo(current, 318  - (98 * 3));
            
            context.lineTo (current + space +5 ,318 - (98 * 3));
            context.lineTo(current + space +5 ,315);
            
            context.stroke();
            context.closePath();
            context.fill();
            current = current + (space *2);
            context.moveTo(current,315);
            context.lineTo(current, 319  - (99 * 3));
            
            context.lineTo (current + space +5 ,319 - (99 * 3));
            context.lineTo(current + space +5 ,315);
            context.stroke();
            context.closePath();
            context.fill();

            current = current + (space *2) +20;
            context.moveTo(current,318);
            context.lineTo(current, 318  - (3 * 3));
            
            context.lineTo (current + space +5 ,318 - (3 * 3));
            context.lineTo(current + space +5 ,318);
            context.stroke();
            context.closePath();
            context.fill();
            // context.lineTo(300,300);
            // context.stroke(); 
            // context.closePath();
            // context.fill();
        }