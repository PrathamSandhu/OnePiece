const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ballC = [];

var reload = 25;

var cannonBall;

function preload(){
  bgImage =loadImage("Image/bg.jpg");
  PirateShipImage = loadImage("Image/PirateShip.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world

  ground = createSprite(width/2,height/2,width,2);
  ground.addImage(bgImage);
  ground.scale = 2;

  ps = createSprite(250, windowHeight/2, 50, 50);
  ps.addImage(PirateShipImage);
  ps.scale = 0.5;

  warShip = new WarShip(400,windowHeight/4, 10, 10, 400);
     
  

}

function draw() {
  background(255);
  Engine.update(engine);
  ground.velocityX = -2; 

  if (ground.x < windowWidth/4){ 
    ground.x = windowWidth/2; 
  }
  drawSprites();
  
 
  //cannonBall.display();

  for (var i = 0; i < ballC.length; i++) {
    showCannonBalls(ballC[i]);
  }



}



function keyPressed() {
  if (keyCode === 32) {

   

    var ball = new CannonBalls(ps.x, ps.y);
    ball.trajectory = [];
    ballC.push(ball);
    console.log("Trace1");
    
    
  }
}

function showCannonBalls(ballC) {
  if (ballC) {
    ballC.display();
  }
}

function keyReleased() {
  if (keyCode === 32) {
    ballC[ballC.length - 1].shoot();
  }
}

