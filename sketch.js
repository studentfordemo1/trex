var trex,trex_running,trex_collided;
var ground,invisiblegrpound,groundimage;


var cloudsgroup,cloudimage;
var obstaclesgroup,obstacle1,obstacle2,obstacle3,
    obstacle4,obstacle5,obstacle6;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png",
                            "trex4.png")
  trex_collided=loadImage("trex_collided.png");
  groundimage=loadImage("gorund2.png");
  cloudimage=loadImage("cloud.png");
  
  obstacle1=loadImage("obstacle1.png");
   obstacle2=loadImage("obstacle2.png");
   obstacle3=loadImage("obstacle3.png");
   obstacle4=loadImage("obstacle4.png");
   obstacle5=loadImage("obstacle5.png");
   obstacle6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,180,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  
  ground=createSprite(200,180,400,10);
  ground.addImage("ground",groundimage);
  
  invisibleground=createSprite(200,190,400,10);
    invisibleground.visible=false;
  
  cloudsgroup=new Group();
  obstaclesgroup=new Group();
  
  
}

function draw() {

  background(180);
  
   if(keyDown("space")){
      trex.velocityY = -12 ;
   }
     
     trex.velocityY = trex.velocityY + 0.8;
     
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
    trex.collide(invisibleGround);
  spawnClouds;
  spawnObstacles();
  score = score + Math.round(frameRate/60);
  text("score:"+score,500,50);
    
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(randomNumber(80,120));
    cloud.addImage(clouimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsgroup.add(cloud);
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
        case 1:obsatcle.addImage("obstacle1.png");
        break;
        case 2:obsatcle.addImage("obstacle2.png");
        break;
        case 3:obsatcle.addImage("obstacle3.png");
        break;
        case 4:obsatcle.addImage("obstacle4.png");
        break;
        case 5:obsatcle.addImage("obstacle5.png");
        break;
        case 6:obsatcle.addImage("obstacle6.png");
        break;
        default:break;
    }
   
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesgroup.add(obstacle);
  }
}