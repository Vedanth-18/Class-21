var fixedRect, movingRect;

var rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX=-5;

  movingRect = createSprite(100,200,50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=5;
  
  rect2 = createSprite(100, 100, 50, 80);
  rect2.shapeColor = "green";
  rect2.debug = true;

  rect3 = createSprite(300, 400, 50, 80);
  rect3.shapeColor = "green";
  rect2.debug = true;
}

function draw() {
  background(255);  
  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;


  
 bounceOff(movingRect, fixedRect);
 
  if(isTouching(movingRect,fixedRect)){

      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";

  }else{
    movingRect.shapeColor="red";
      fixedRect.shapeColor="red";


  }


  if(isTouching(movingRect,rect2)){

    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

}else{
  movingRect.shapeColor="black";
    fixedRect.shapeColor="black";


}
  drawSprites();
}

