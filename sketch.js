var runner,runnerImg,road,roadImg
function preload(){
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  roadImg=loadImage("path.png")
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites hererunner=createSprite(200,350,200,200);
  road=createSprite(200,200,200,200);
  road.addImage("roadw",roadImg);
  runner=createSprite(200,350,200,200);
  runner.addAnimation("boy",runnerImg);
  runner.scale=0.1;
  road.depth = runner.depth;

}

 

function draw() {
  background(0);
  runner.x=mouseX;
drawSprites();
}
