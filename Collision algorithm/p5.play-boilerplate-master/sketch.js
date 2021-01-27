var rect1,rect2,rect3,rect4,rect5,rect6;

function setup() {
  createCanvas(1200,800);
 rect1= createSprite(400, 200, 100, 50);
 rect2=createSprite(300,100,150,40);
 rect3=createSprite(200,300,150,40);
 rect4=createSprite(500,600,150,40);
 rect5=createSprite(100,400,150,40);
 rect6=createSprite(600,200,150,40);

 rect1.shapeColor="red";
 rect2.shapeColor="red";
 rect3.shapeColor="red";
 rect4.shapeColor="red";
 rect5.shapeColor="red";
 rect6.shapeColor="red";
}

function draw() {
  background(0);  

rect4.x=World.mouseX;
rect4.y=World.mouseY;
// Calling the function
if(COLLISION(rect4,rect6)) {
  rect4.shapeColor="yellow";
  rect6.shapeColor="yellow";
}
else{
  rect4.shapeColor="red";
  rect6.shapeColor="red";


}
  drawSprites();
}
