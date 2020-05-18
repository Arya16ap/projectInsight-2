var girl,girlImage;
var mythEaterImage,mythEater;
var background1Image,background1;
var background2Image,background2;
var play,store;
var gameState = "level1";
var expell = 0,incarsious = 1;killer = 2,protego = 3;
function preload() {
  girlImage = loadImage("character1.jpg");
  background1Image = loadImage("dungon.jpg");
  background2Image = loadImage("bg.png");
  mythEaterImage = loadImage("images.jpg");
}
function setup() {
  createCanvas(1600,1200);
  background1 = createSprite(600,400,1600,1200);
  background1.addImage("background1",background1Image);
  background1.scale = 5.5;
  background2 = createSprite(700,300,1600,1200);
  background2.addImage("background2",background2Image);
  background2.visible = false;
 mythEater = createSprite(700,300,50,50);
  mythEater.addImage(mythEaterImage);
  mythEater.visible = false;
  
  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImage);
  girl.scale = 0.5;

  
}

function draw() {
  background("black"); 
  if(gameState === "level1"){
    play = createButton('play');
    play.position(1000,300);
     store = createButton('store');
    store.Width = 50;
    store.Height = 50;
    store.position(1000,250);
  }
 

  play.mousePressed(function(){
    gameState = "level2" ;
    background2.visible = true;
    play.hide();
    store.hide();
    girl.y = 300;
    background1.visible = false;
    mythEater.visible = true;
  })
  if(gameState === "level2") {
    expell = createButton('expell');
    expell.position(400,400);
    kill = createButton('kill');
    kill.position(350,400);
    incarsious = createButton('incarsious');
    incarsious.position(400,450);
    protego = createButton('protego');
    protego.position(330,450);
  }


  
  drawSprites();
}