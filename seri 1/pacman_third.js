var logo = createSprite(260,28,10,10);

var lives = 3 ;
var score = 0 ;
var isStarted = 0;
var heart1 = createSprite(37,27,10,10);
var heart2 = createSprite(77,27,10,10);
var heart3 = createSprite(117,27,10,10);
var level = 1;
var wallLevels = [
    [
    [200, 250, 110, 10],
    [200, 0, 400, 20],
    [200, 400, 400, 20],
    [0, 200, 20, 400],
    [400, 200, 20, 400],
    [200, 50, 400, 10],
    [200, 300, 10, 100],
    [150, 375, 10, 50],
    [250, 375, 10, 50],
    [125, 300, 150, 10],
    [275, 300, 150, 10],
    [50, 350, 100, 10],
    [350, 250, 100, 10],
    [350, 250, 100, 10],
    [50, 250, 100, 10],
    [200, 100, 300, 10],
    [100, 150, 10, 100],
    [300, 150, 10, 100],
    [50, 200, 10, 100],
    [350, 200, 10, 100],
    ],
    [
    [200, 250, 110, 10],
    [200, 0, 400, 20],
    [200, 400, 400, 20],
    [0, 200, 20, 400],
    [400, 200, 20, 400],
    [200, 50, 400, 10],
    [100, 200, 10, 100],
    [150, 375, 10, 50],
    [250, 375, 10, 50],
    [125, 300, 250, 10],
    [275, 300, 150, 10],
    [50, 350, 100, 10],
    [250, 250, 100, 10],
    [350, 250, 100, 10],
    [50, 250, 100, 10],
    [200, 100, 300, 10],
    [100, 150, 10, 100],
    [300, 150, 10, 100],
    [50, 200, 10, 100],
    [350, 200, 10, 100],
    ]
];
var coinLevels = [
  [
    [225, 325, 10, 10],  
    [275, 325, 10, 10],  
    [325, 325, 10, 10],  
    [375, 325, 10, 10],  
    [25, 325, 10, 10],   
    ],
    [
    [75, 325, 10, 10],   
    [125, 325, 10, 10],  
    [175, 325, 10, 10],  
    [25, 375, 10, 10],   
    [75, 375, 10, 10]    
      ]
];
var winLevels = [2,4];
var totalLevels = wallLevels.length;
var walls = [];
var coins = [];

var pacman = createSprite(200,375,20,20);

var red = createSprite(200,200,30,30);
red.velocityY = -3 ;

var blue = createSprite(200,200,30,30);
blue.velocityY = -3 ;

function ghostMove(){
  var signal = 1;
  var change = 2;
  var ghostVel = 10;
  if(pacman.x-red.x>0)signal*=1;else signal*=-1;
  red.velocityX=signal*ghostVel+random(-change,change);
  if(pacman.y-red.y>0)signal*=1;else signal*=-1;
  red.velocityY=signal*ghostVel+random(-change,change); 
  if(pacman.x-blue.x>0)signal*=1;else signal*=-1;
  blue.velocityX=signal*ghostVel+random(-change,change);
  if(pacman.y-blue.y>0)signal*=1;else signal*=-1;
  blue.velocityY=signal*ghostVel+random(-change,change); 
}

function loadLevel() {
  clearSprites();
  for (var i = 0; i < wallLevels[level - 1].length; i++) {
    var thisItem = wallLevels[level - 1][i];
    var wall = createSprite(thisItem[0], thisItem[1], thisItem[2], thisItem[3]);
    walls.push(wall); 
  }
  for (var i = 0; i < coinLevels[level - 1].length; i++) {
    var thisItem = coinLevels[level - 1][i];
    var coin = createSprite(thisItem[0], thisItem[1], thisItem[2], thisItem[3]);
    coins.push(coin); 
}
}
loadLevel(level-1);
function clearSprites(){
  for (var i = 0; i < walls.length; i++) {
    walls[i].destroy();
  }
  for (var i = 0; i < coins.length; i++) {
    coins[i].destroy();
}
}
var frameCount = 0;
function draw() {
  frameCount++;
  if(frameCount % 30 == 0){
    ghostMove();
  }
  background("black");
  logo.setAnimation("pacman logo.png_1");
  heartLives();
  logo.scale = 0.25 ;
  if (isStarted == 0){
  pacman.setAnimation("pacman right");
  pacman.scale = 0.02;
  isStarted = 1;
  }
  textSize(25);
  stroke("white");
  fill("white");
  for (var i = 0;i < coins.length;i++){
    coins[i].setAnimation("pacman coins.png_1");
    coins[i].scale = 0.04 ;
    if(pacman.isTouching(coins[i])){
    coins[i].destroy();
    score+=1 ;
  }
  }
  
  red.setAnimation("red ghost");
  red.scale = 0.036;
  blue.setAnimation("blue ghost");
  blue.scale = 0.027;
  heart1.setAnimation("retro_red_heart_1");
  heart1.scale = 0.18;
  heart2.setAnimation("retro_red_heart_1");
  heart2.scale = 0.18;
  heart3.setAnimation("retro_red_heart_1");
  heart3.scale = 0.18;
  
  for (var i = 0; i < walls.length; i++) {
    walls[i].shapeColor = "blue" ;
  }
  for (var j = 0; j < walls.length; j++) {
    red.bounceOff(walls[j]);
    blue.bounceOff(walls[j]);
    pacman.collide(walls[j]);
  }

  if(pacman.isTouching(red)){
    lives -= 1 ;
    pacman.visible = false ;
    pacman.x = 200 ;
    pacman.y = 375 ;
    pacman.visible = true ;
    red.x = 200;
    red.y = 200;
    red.velocityY = -4 ;
    red.velocityX = 0 ;
    blue.x = 200;
    blue.y = 200;
    blue.velocityY = -4 ;
    blue.velocityX = 0 ;
  }
  
  if(pacman.isTouching(blue)){
    lives -= 1 ;
    pacman.visible = false ;
    pacman.x = 200 ;
    pacman.y = 375 ;
    pacman.visible = true ;
    red.x = 200;
    red.y = 200;
    red.velocityY = -4 ;
    red.velocityX = 0 ;
    blue.x = 200;
    blue.y = 200;
    blue.velocityY = -4 ;
    blue.velocityX = 0 ;
  }
  
  if(keyWentDown("up")){
    pacman.setAnimation("pacman top");
    pacman.scale = 0.02;
    pacman.velocityY = -4 ;
    pacman.velocityX = 0 ;
  }
  if(keyWentUp("up")){
    pacman.velocityY = 0 ;
  }
  
  if(keyWentDown("down")){
    pacman.setAnimation("pacman down");
    pacman.scale = 0.02;
    pacman.velocityY = 4 ;
    pacman.velocityX = 0 ;
  }
  if(keyWentUp("down")){
    pacman.velocityY = 0 ;
  }
  
  if(keyWentDown("left")){
    pacman.setAnimation("pacman left.");
    pacman.scale = 0.02;
    pacman.velocityX = -4 ;
    pacman.velocityY = 0 ;
  }
  if(keyWentUp("left")){
    pacman.velocityX = 0 ;
  }
  
  if(keyWentDown("right")){
    pacman.setAnimation("pacman right");
    pacman.scale = 0.02;
    pacman.velocityX = 4 ;
    pacman.velocityY = 0 ;
  }
  if(keyWentUp("right")){
    pacman.velocityX = 0 ;
  }
  if(score == winLevels[level-1] && level < totalLevels){
    textSize(25);
    stroke("white");
    fill("white");
    score = 0;
    level++;
    loadLevel(level-1);
  }else if(level == totalLevels && score == winLevels[level-1]){
    textSize(25);
    stroke("white");
    fill("white");
    text("You Won",200,200);
    red.velocityY = 0;
    red.velocityX = 0;
    blue.velocityY = 0;
    blue.velocityX = 0;
    pacman.velocityY = 0;
    pacman.velocityX = 0;
  }
  
  drawSprites();
}

function heartLives() {
  if(lives == 2){
    heart3.destroy();
  }
  if(lives == 1){
    heart2.destroy();
  }
  if(lives == 0){
    heart1.destroy();
    textSize(30);
    stroke("white");
    fill("white");
    text("Game Over",120,135);
    red.velocityY = 0;
    red.velocityX = 0;
    blue.velocityY = 0;
    blue.velocityX = 0;
    pacman.velocityY = 0;
    pacman.velocityX = 0;
  }
  
}
