var plane , back;
var backgroundImg;
var obstacle;
function preload(){
backgroundImg = loadImage("bgImage.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  back = createSprite(0,0,windowWidth,windowHeight);
  back.scale = 5;
  back.addImage(backgroundImg);

  plane = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  plane.x = mouseX
  plane.y = mouseY

  obstacles();

  drawSprites();
}

function obstacles(){
if(frameCount %100 == 0){
  obstacle = createSprite(random(100,windowWidth),100,50,50)
  obstacle.velocityY = 3
  
}
}
