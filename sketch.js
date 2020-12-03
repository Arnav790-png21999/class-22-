var fix
var move
var o1;
var o2;



function setup() {
  createCanvas(1200,800);

o1=createSprite(130,270,70,100);
o1.shapeColor="blue";

o2=createSprite(190,600,70,220);
o2.shapeColor="yellow";

  fix=createSprite(200,100,50,100);
  fix.shapeColor="green";
  
  move=createSprite(300,300,100,50);
  move.shapeColor="green";
  fix.debug=true;
  move.debug=true;
  console.log(move.x-fix.x)
}

function draw() {
  background(0);  
  move.y=World.mouseY;
  move.x=World.mouseX;
  console.log(move.x-fix.x);
  
 if (isTouching(o1,move)){
  o1.shapeColor="red";
  move.shapeColor="red";

 }
 else{
  o1.shapeColor="green";
  move.shapeColor="green";


 }


drawSprites();
  }

  












