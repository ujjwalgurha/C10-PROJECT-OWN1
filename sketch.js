 var sea,ship;
var seaImage,shipImage;
function preload(){
 shipAnimation = loadAnimation( "ship-1.png",)
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,600);
  background(0);

  sea = createSprite(600,330,200,200)

  sea.addImage(seaImage);
  sea.velocityX = -10;
  sea.scale = 0.3;
  

  ship = createSprite(210,300,5,5);
  ship.addAnimation("movingShip",shipAnimation);
  ship.scale = 0.6;
}

 
function draw() {
  background(0);
 sea.velocityX = -30;
if(sea.x<0){
  sea.x = sea.width/8;
}
  drawSprites();
}