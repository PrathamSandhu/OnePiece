var reload = 25

function preload(){
  bgImage =loadImage("Image/bg.jpg");
  PirateShipImage = loadImage("Image/PirateShip.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(width/2,height/2,width,2);
  ground.addImage(bgImage);
  ground.scale = 2;

  ps = createSprite(250, windowHeight/2, 50, 50);
  ps.addImage(PirateShipImage);
  ps.scale = 0.5;


  /*

  for( var i = reload; i >= 0 ; i=i-1){

     cannonBall = new CannonBalls(ps.x, ps.y);


  }



  */
  cannonBall = new CannonBalls(ps.x, ps.y);
}

function draw() {
  background(255);
  ground.velocityX = -2; 

  if (ground.x < windowWidth/4){ 
    ground.x = windowWidth/2; 
  }
  drawSprites();
  cannonBall.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    ps.y -= 10;
    cannonBall.y -= 10;
  }
  if(keyCode === DOWN_ARROW){
    ps.y += 10;
    cannonBall.y += 10;
  }
}

function keyReleased(){
  if(keyCode === 32){
    cannonBall.x = cannonBall.x+2;
  }
}

