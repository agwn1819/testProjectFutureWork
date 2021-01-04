var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
/* c.fillStyle = "green";
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillStyle = "yellow";
c.fillRect(300, 300, 100, 100);

// Line
// c.beginPath(); // start a path
// c.moveTo(50, 300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "green";
// c.stroke();

// arc // circle
c.beginPath(); // start a path
c.arc(200, 300, 50, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

for (var i = 0; i < 3; i++) {
    // arc // circle
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var col =
        c.beginPath(); // start a path
    c.arc(x, y, 50, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();

}
 */



function Circle(x,y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function(){
        c.beginPath(); // start a path
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fill();
    }
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}
var circleArray = [];
for (var i = 0; i < 100; i++){
    var radius = 30;
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x,y, dx, dy, radius));
}
var circle = new Circle(200, 200, 3, 3, 30);

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();