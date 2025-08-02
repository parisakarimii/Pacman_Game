var logo = createSprite(260,28,10,10);

var lives = 3 ;
var score = 0 ;
var isStarted = 0;
var heart1 = createSprite(37,27,10,10);
var heart2 = createSprite(77,27,10,10);
var heart3 = createSprite(117,27,10,10);
var level = 1;
var Mode = 2;
var isWin = 0;
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
var SpecCoinLevels = [
  [
    [25, 275, 10, 10],  
    [75, 275, 10, 10],  
    ],
    [
    [175, 275, 10, 10],   
    [125, 275, 10, 10],  
      ]
];
var powerUpLevels = [
  [  
    [225, 275, 10, 10],  
    [275, 275, 10, 10],  
    ],
    [
    [325, 275, 10, 10],   
    [375, 275, 10, 10],  
      ]
];
var SpecCoinLevelsScore = [[4,3],[4,8]];
var winLevels = [4,4];
var totalLevels = wallLevels.length;
var walls = [];
var coins = [];
var SpecCoins = [];
var PowerUps = [];
var power = 0;
var powerCounter = 0;

var red = createSprite(200,200,30,30);
  
var blue = createSprite(200,200,30,30);

    
red.setAnimation("red ghost");
red.scale = 0.036;
blue.setAnimation("blue ghost");
blue.scale = 0.027;

var pacman = createSprite(200,375,20,20);


function ghostMove(){
  var signal = 1;
  var change = 1.5*Mode;
  var ghostVel = 3*Mode;
  if(pacman.x-red.x>0)signal*=1;else signal*=-1;
  red.velocityX=signal*ghostVel+random(-change,change);
  if(pacman.y-red.y>0)signal*=1;else signal*=-1;
  red.velocityY=signal*ghostVel+random(-change,change); 
  if(pacman.x-blue.x>0)signal*=1;else signal*=-1;
  blue.velocityX=signal*ghostVel+random(-change,change);
  if(pacman.y-blue.y>0)signal*=1;else signal*=-1;
  blue.velocityY=signal*ghostVel+random(-change,change); 
}

playSound("Intro.mp3", false);
function loadLevel() {
  clearSprites();
  SpecCoins = []
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
 for (var i = 0; i < SpecCoinLevels[level - 1].length; i++) {
    var thisItem = SpecCoinLevels[level - 1][i];
    var SpecCoin = createSprite(thisItem[0], thisItem[1], thisItem[2], thisItem[3]);
    SpecCoins.push(SpecCoin); 
}
 for (var i = 0; i < powerUpLevels[level - 1].length; i++) {
    var thisItem = powerUpLevels[level - 1][i];
    var powerUp = createSprite(thisItem[0], thisItem[1], thisItem[2], thisItem[3]);
    PowerUps.push(powerUp); 
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
for (var i = 0; i < SpecCoins.length; i++) {
    SpecCoins[i].destroy();
}
for (var i = 0; i < PowerUps.length; i++) {
    PowerUps[i].destroy();
}
}
var frameCount = 0;
var GameState = 0;
function draw() {
  if (GameState == 0){
    background("black");
    textSize(40);
    stroke("black");
    fill("yellow");
    text("PAC-MAN", 295, 150);
    
    textSize(20);
    fill("white");
    text("Press SPACE to Start", 300, 200);
    text("Press M to Enter Settings", 314, 250);
    if (keyWentDown("space")) {
      GameState = 1;
      isStarted = 0;
      loadLevel(level-1); 
    }
    if (keyWentDown("m")) {
      GameState = 2;
    }
  }
  if(GameState == 1){
   if(power == 1 && powerCounter != 150){
    powerCounter++;
  }else if (power == 1 && powerCounter == 150){
    power = 0;
    powerCounter = 0;
  }
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
  for (var i = 0;i < SpecCoins.length;i++){
    SpecCoins[i].setAnimation("special.png");
    SpecCoins[i].scale = 0.05 ;
    if(pacman.isTouching(SpecCoins[i])){
    SpecCoins[i].destroy();
    score+=SpecCoinLevelsScore[level-1][i];
  }
  }
  for (var i = 0;i < PowerUps.length;i++){
    PowerUps[i].setAnimation("power.png");
    PowerUps[i].scale = 0.04 ;
    if(pacman.isTouching(PowerUps[i])){
    PowerUps[i].destroy();
    power = 1;
  }
  }
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

  if(pacman.isTouching(red) && power == 0){
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
  }else if(pacman.isTouching(red) && power == 1){
    red.x = 200;
    red.y = 200;
  }
  
  if(pacman.isTouching(blue) && power == 0){
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
  }else if(pacman.isTouching(blue) && power == 1){
    blue.x = 200;
    blue.y = 200;
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
  if(score >= winLevels[level-1] && level < totalLevels){
    textSize(25);
    stroke("white");
    fill("white");
    score = 0;
    level++;
    loadLevel(level-1);
  }else if(level == totalLevels && score >= winLevels[level-1]){
    GameState = 4;
  }
  drawSprites();
}
  if(GameState == 2){
    background("black");
    textSize(40);
    stroke("black");
    fill("yellow");
    text("Settings", 275, 50);
    textSize(30);
    fill("white");
    text("Game Mode", 228, 100);
    textSize(20);
    if(Mode == 1){
      fill("yellow");
    }else{
      fill("white");
    }
    text("(1) Easy", 140, 140);
    if(Mode == 2){
      fill("yellow");
    }else{
      fill("white");
    }
    text("(2) Medium", 166, 190);
    if(Mode == 3){
      fill("yellow");
    }else{
      fill("white");
    }
    text("(3) Hard", 138, 240);
    if(Mode == 4){
      fill("yellow");
    }else{
      fill("white");
    }
    text("(4) Pac-Man", 175, 290);
    fill("White");
    text("Press X to Back to Main Menu", 340, 380);
    if (keyWentDown("X")) {
      GameState = 0;
    }
    if (keyWentDown("1")) {
      Mode = 1;
    }
    if (keyWentDown("2")) {
      Mode = 2;
    }
    if (keyWentDown("3")) {
      Mode = 3;
    }
    if (keyWentDown("4")) {
      Mode = 4;
    }
    
  }else if(GameState == 3){
    background("Black");
    textSize(30);
    stroke("white");
    fill("white");
    text("Game Over",280,200);
  }else if(GameState == 4){
    background("Black");
    if (isWin == 0){
      playSound("Extra.mp3", false);
      isWin = 1;
    }
    textSize(25);
    stroke("white");
    fill("white");
    text("You Won",260,200);
  }
}
function heartLives() { 
  if(lives == 2){
    heart3.destroy();
  }
  if(lives == 1){
    heart2.destroy();
  }
  if(lives == 0){
    playSound("Death.mp3", false);
    GameState = 3;
  }
  
}
