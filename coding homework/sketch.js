
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, groundImage;
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 groundImage = loadImage("jungle.jpg")
}



function setup() {
  createCanvas(1000,1000);
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  ground = createSprite(400,750,1200,10)
 
}


function draw() {
  background("white")
  
if(keyDown("space")){
  monkey.velocityY = -15
}
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.destroyEach();
  
  }
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime= Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+ survivalTime,100,50)
  spawnBanana();
  spawnObstacles();
monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
  drawSprites();
}

function spawnBanana(){
  if (frameCount % 80===0 ){
    banana= createSprite(900,500,10,10)
    banana.addImage(bananaImage)
    banana.scale= 0.2
    banana.y = Math.round(random(550,700))
    banana.velocityX = -3 
    bananaGroup.add(banana)
  }
   
}
function spawnObstacles(){
  if (frameCount % 300===0 ){
    obstacle= createSprite(900,700,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.velocityX = -5
    obstacleGroup.add(obstacle)
  }
    
}


