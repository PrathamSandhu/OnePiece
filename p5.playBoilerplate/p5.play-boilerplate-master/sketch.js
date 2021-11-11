function preload(){
  bgImage =loadImage("Image/bg.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(0, windowHeight/2, windowWidth, windowHeight);
  bg.addImage(bgImage);
  bg.scale = 1.3;

  pc = createSprite(250, windowHeight/2, 50, 50);
}

function draw() {
  background(255);
  bg.velocityX = -5; 
  if(bg.x < 0){
    bg.x = bg.width/8;
  }

  drawSprites();
}