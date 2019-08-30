
var circle = new Circle(50, 350);
var square = new Square(200, 50);
var triangle = new Triangle(300, 100);
var pentagon = new Pentagon(250, 250);
var hexagon = new Hexagon(250,50);
var maxWidth = canvas.width;
var maxHeight = canvas.height; 
let diamond = new Hexship(50,500)
let rombus = new Rombus (maxWidth-50, maxHeight-550)


 


function draw(){ 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    circle.draw()
    square.draw()
    triangle.draw()
    pentagon.draw()
    hexagon.draw()
    
    diamond.draw()
    diamond.reload(0, 0)
    rombus.draw()
   
   
    
    pentagon.move()
    hexagon.move()
    triangle.move()
    square.move()
    circle.move()

    
    ///////////////////////////////////////////////////////////////////
    ////////COLLISION DETECTION/////////////////////////////////////
        // console.log(getDistance(diamond.x, diamond.y,hexagon.x, hexagon.y))
    ///CIRCLE V. DIAMOND(PLAYEr)
    if(getDistance(diamond.x, diamond.y,circle.x, circle.y) <= 99){
        console.log("KILLED BY CIRCLE")
        alert(`GAME OVER! 
        KILLED BY CIRCLE!`);
        document.location.reload();
        clearInterval(interval);
    }
    //TRIANGLE
    if(getDistance(diamond.x, diamond.y,triangle.x, triangle.y) <= 75){
        console.log("KILLED BY TRIANGLE")
        alert(`GAME OVER! 
        KILLED BY TRIANGLE!`);
        document.location.reload();
        clearInterval(interval);
    }
    //SQUARE
    if(getDistance(diamond.x, diamond.y,square.x, square.y) <= 99){
        console.log("KILLED BY SQUARE")
        alert(`GAME OVER! 
        KILLED BY SQUARE!`);
        document.location.reload();
        clearInterval(interval);
    }
    //PENTAGON
    if(getDistance(diamond.x, diamond.y,pentagon.x, pentagon.y) <= 99){
        console.log("KILLED BY PENTAGON")
        alert(`GAME OVER! 
        KILLED BY  PENTAGON!`);
        document.location.reload();
        clearInterval(interval);
    }
     //HEXTAGON
    if(getDistance(diamond.x, diamond.y,hexagon.x, hexagon.y) <= 99){
        console.log("KILLED BY HEXAGON")
        alert(`GAME OVER! 
        KILLED BY  HEXAGON!`);
        document.location.reload();
        clearInterval(interval);
    }
    //Rombus
    if(getDistance(diamond.x, diamond.y,rombus.x, rombus.y) === 0){
        console.log("YOU WIN...MADE IT TO GOAL!!!!")
        alert(`YOU WIN!
        MADE IT TO GOAL!!!!`);
        document.location.reload();
        clearInterval(interval);
    }
    ////////////////////////////////////////
    requestAnimationFrame(draw)//////////
    ///////////////////////////
}
draw()




