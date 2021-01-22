
var monkey , monkey_running;
var score;
var ground;
var background
var gameState = 0;

function preload(){
  
  
  monkey_running = loadAnimation("Idle (2).png");
  Background = loadImage("BACKGROUND.jpg");
}



function setup() {
  createCanvas(displayWidth - 20, displayHeight-100);
  
  monkey = createSprite(100,250,20,20);
  monkey.addAnimation("monnkey",monkey_running)
  monkey.scale=0.2;
 
  ground = createSprite(300,280,3000,10); 
  ground.shapeColor = "orange"
        

  
  score = 0;
}


function draw() {
  background(Background);
  
 

if(gameState === 0){
  imageMode(CENTER);
  image(Background,500 ,displayHeight , 50,50);
  if(keyDown("space") && monkey.y>130){
  monkey.velocityY=-12
}
  camera.position.x = displayWidth/2;
  camera.position.y = monkey.y;
  camera.position.x = monkey.x;

  if(keyDown("UP")){
    monkey.velocityY=-5
  }
  if(keyDown("DOWN")){
    monkey.velocityY=5
  }
  if(keyDown("LEFT")){
    monkey.velocityX=-5
  }
  if(keyDown("RIGHT")){
    monkey.velocityX=5
  }
  
  if (monkey.velocityY > 0) {
    monkey.velocityY = monkey.velocityY - 1;
  }
  if (monkey.velocityY < 0) {
    monkey.velocityY = monkey.velocityY + 1;
  }
  if (monkey.velocityX > 0) {
    monkey.velocityX = monkey.velocityX - 1;
  }
  
  if (monkey.velocityX < 0) {
    monkey.velocityX = monkey.velocityX + 1;
  }
    
  if(ground.x<0) {
    
    ground.x=ground.width/2
    
  }
   monkey.collide(ground);
   stroke("red");
   textSize(30);
   fill("red");
   text("COW BOY TOWN",400,-100);
   
  stroke("Brown");
   textSize(20);
   fill("Brown");
   text("YOU HAVE 30 SECONDS OF EXPLORING TIME TO EXPLORE THE COW BOY TOWN ",-600,-100);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Exploring Time: "+survivalTime,100,50)
}
if(gameState === 1){
  background("orange");
  
   fill("black");
   textSize(30);
   text("YOU ARE A EXPLORER!!",100,100);

   monkey.x = 180;
   monkey.y = 200;
 
  }



 drawSprites();
  
  
  
  
  if(survivalTime === 30){
    gameState = 1;
  }


}
