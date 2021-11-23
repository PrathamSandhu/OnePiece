function preload(){
  bgImage =loadImage("Image/bg.jpg");
  PirateShipImage = loadImage("Image/PirateShip.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  bg1.addImage(bgImage);
  bg1.scale = 1.3;
  bg1.debug = true;

  bg2 = createSprite(windowWidth + windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  bg2.addImage(bgImage);
  bg2.scale = 1.3;
  bg2.debug = true;

  ps = createSprite(250, windowHeight/2, 50, 50);
  ps.addImage(PirateShipImage);
  ps.scale = 0.5;
}

function draw() {
  background(255);
  bg1.velocityX = -5;
  bg2.velocityX = -5; 

  if(bg1<0){
    bg1.X = windowWidth;
  }
  

  drawSprites();
}