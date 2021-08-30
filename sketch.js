var dungeonImg, dungeon1;
var dungeon2Img, dungeon2; 

var mainCharacterImg, mainCharacter;

var gameState;

function preload(){
  dungeonImg = loadImage("dungeon1.jpg");
  dungeon2Img = loadImage("dungeon2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  dungeon1 = createSprite(width/2, height/2);
  dungeon1.addImage(dungeonImg);
  dungeon1.scale = 2.46;

  mainCharacter = createSprite(200, 670);

  gameState = 1;
}

function draw() {
  background(220);
  mainCharacter.velocityX = 0;
  if(keyIsDown(UP_ARROW)){
    mainCharacter.y -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    mainCharacter.y += 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    mainCharacter.velocityX = -3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    mainCharacter.velocityX = 3;
  }

  if(mainCharacter.x >= 1244 && mainCharacter.y <= 520){
    gameState = 2;
  }

  if(gameState === 2){
    dungeon1.addImage(dungeon2Img)
    dungeon1.scale = 2.5;
    mainCharacter.x = 175;
  }

  console.log("x" + mainCharacter.x);
  console.log(mainCharacter.y);
  drawSprites();
}