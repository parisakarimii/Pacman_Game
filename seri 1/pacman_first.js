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
    [250, 200, 10, 110],
    [150, 200, 10, 110],
    [200, 0, 400, 20],
    [200, 400, 400, 20],
    [0, 200, 20, 400],
    [400, 200, 20, 400],
    [160, 150, 30, 10],
    [240, 150, 30, 10],
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
    [250, 200, 10, 110],
    [150, 200, 10, 110],
    [200, 0, 400, 20],
    [200, 400, 400, 20],
    [0, 200, 20, 400],
    [400, 200, 20, 400],
    [160, 150, 30, 10],
    [240, 150, 30, 10],
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
var totalLevels = wallLevels.length;
var walls = [];
var coin1 = createSprite(225,325,10,10);
var coin2 = createSprite(275,325,10,10);

var coin3 = createSprite(325,325,10,10);
var coin4 = createSprite(375,325,10,10);
var coin5 = createSprite(25,325,10,10);
var coin6 = createSprite(75,325,10,10);
var coin7 = createSprite(125,325,10,10);
var coin8 = createSprite(175,325,10,10);
var coin9 = createSprite(25,375,10,10);
var coin10 = createSprite(75,375,10,10);
var coin11 = createSprite(125,375,10,10);
var coin12 = createSprite(275,375,10,10);
var coin13 = createSprite(325,375,10,10);
var coin14 = createSprite(375,375,10,10);
var coin15 = createSprite(25,275,10,10);
var coin16 = createSprite(75,275,10,10);
var coin17 = createSprite(125,275,10,10);
var coin18 = createSprite(175,275,10,10);
var coin19 = createSprite(225,275,10,10);
var coin20 = createSprite(275,275,10,10);
var coin21 = createSprite(325,275,10,10);
var coin22 = createSprite(375,275,10,10);
var coin23 = createSprite(25,225,10,10);
var coin24 = createSprite(75,225,10,10);
var coin25 = createSprite(125,225,10,10);
var coin26 = createSprite(275,225,10,10);
var coin27 = createSprite(325,225,10,10);
var coin28 = createSprite(375,225,10,10);
var coin29 = createSprite(25,175,10,10);
var coin30 = createSprite(75,175,10,10);
var coin31 = createSprite(125,175,10,10);
var coin32 = createSprite(275,175,10,10);
var coin33 = createSprite(325,175,10,10);
var coin34 = createSprite(375,175,10,10);
var coin35 = createSprite(25,125,10,10);
var coin36 = createSprite(75,125,10,10);
var coin37 = createSprite(125,125,10,10);
var coin38 = createSprite(175,125,10,10);
var coin39 = createSprite(225,125,10,10);
var coin40 = createSprite(275,125,10,10);
var coin41 = createSprite(325,125,10,10);
var coin42 = createSprite(375,125,10,10);
var coin43 = createSprite(25,75,10,10);
var coin44 = createSprite(75,75,10,10);
var coin45 = createSprite(125,75,10,10);
var coin46 = createSprite(175,75,10,10);
var coin47 = createSprite(225,75,10,10);
var coin48 = createSprite(275,75,10,10);
var coin49 = createSprite(325,75,10,10);
var coin50 = createSprite(375,75,10,10);

var pacman = createSprite(200,375,20,20);

var red = createSprite(200,200,30,30);
red.velocityY = -3 ;

var blue = createSprite(200,200,30,30);
blue.velocityY = -3 ;
function loadLevel() {
  clearSprites();
  for (var i = 0; i < wallLevels[level - 1].length; i++) {
    var thisItem = wallLevels[level - 1][i];
    var wall = createSprite(thisItem[0], thisItem[1], thisItem[2], thisItem[3]);
    walls.push(wall); 
}
}
loadLevel(level-1);
function clearSprites(){
  for (var i = 0; i < walls.length; i++) {
    walls[i].destroy();
}
}
function draw() {
  background("black");
  logo.setAnimation("لوگو pacman.png_1");
  heartLives();
  logo.scale = 0.25 ;
  if (isStarted == 0){
  pacman.setAnimation("pacmanR");
  pacman.scale = 0.02;
  isStarted = 1;
  }
  textSize(25);
  stroke("white");
  fill("white");
  
  coin1.setAnimation("coin_gold_1");
  coin1.scale = 0.4 ;
  coin2.setAnimation("coin_gold_1");
  coin2.scale = 0.4 ;
  coin3.setAnimation("coin_gold_1");
  coin3.scale = 0.4 ;
  coin4.setAnimation("coin_gold_1");
  coin4.scale = 0.4 ;
  coin5.setAnimation("coin_gold_1");
  coin5.scale = 0.4 ;
  coin6.setAnimation("coin_gold_1");
  coin6.scale = 0.4 ;
  coin7.setAnimation("coin_gold_1");
  coin7.scale = 0.4 ;
  coin8.setAnimation("coin_gold_1");
  coin8.scale = 0.4 ;
  coin9.setAnimation("coin_gold_1");
  coin9.scale = 0.4 ;
  coin10.setAnimation("coin_gold_1");
  coin10.scale = 0.4 ;
  coin11.setAnimation("coin_gold_1");
  coin11.scale = 0.4 ;
  coin12.setAnimation("coin_gold_1");
  coin12.scale = 0.04 ;
  coin13.setAnimation("coin_gold_1");
  coin13.scale = 0.04 ;
  coin14.setAnimation("coin_gold_1");
  coin14.scale = 0.04 ;
  coin15.setAnimation("coin_gold_1");
  coin15.scale = 0.04 ;
  coin16.setAnimation("coin_gold_1");
  coin16.scale = 0.04 ;
  coin17.setAnimation("coin_gold_1");
  coin17.scale = 0.04 ;
  coin18.setAnimation("coin_gold_1");
  coin18.scale = 0.04 ;
  coin19.setAnimation("coin_gold_1");
  coin19.scale = 0.04 ;
  coin20.setAnimation("coin_gold_1");
  coin20.scale = 0.04 ;
  coin21.setAnimation("coin_gold_1");
  coin21.scale = 0.04 ;
  coin22.setAnimation("coin_gold_1");
  coin22.scale = 0.04 ;
  coin23.setAnimation("coin_gold_1");
  coin23.scale = 0.04 ;
  coin24.setAnimation("coin_gold_1");
  coin24.scale = 0.04 ;
  coin25.setAnimation("coin_gold_1");
  coin25.scale = 0.04 ;
  coin26.setAnimation("coin_gold_1");
  coin26.scale = 0.04 ;
  coin27.setAnimation("coin_gold_1");
  coin27.scale = 0.04 ;
  coin28.setAnimation("coin_gold_1");
  coin28.scale = 0.04 ;
  coin29.setAnimation("coin_gold_1");
  coin29.scale = 0.04 ;
  coin30.setAnimation("coin_gold_1");
  coin30.scale = 0.04 ;
  coin31.setAnimation("coin_gold_1");
  coin31.scale = 0.04 ;
  coin32.setAnimation("coin_gold_1");
  coin32.scale = 0.04 ;
  coin33.setAnimation("coin_gold_1");
  coin33.scale = 0.04 ;
  coin34.setAnimation("coin_gold_1");
  coin34.scale = 0.04 ;
  coin35.setAnimation("coin_gold_1");
  coin35.scale = 0.04 ;
  coin36.setAnimation("coin_gold_1");
  coin36.scale = 0.04 ;
  coin37.setAnimation("coin_gold_1");
  coin37.scale = 0.04 ;
  coin38.setAnimation("coin_gold_1");
  coin38.scale = 0.04 ;
  coin39.setAnimation("coin_gold_1");
  coin39.scale = 0.04 ;
  coin40.setAnimation("coin_gold_1");
  coin40.scale = 0.04 ;
  coin41.setAnimation("coin_gold_1");
  coin41.scale = 0.04 ;
  coin42.setAnimation("coin_gold_1");
  coin42.scale = 0.04 ;
  coin43.setAnimation("coin_gold_1");
  coin43.scale = 0.04 ;
  coin44.setAnimation("coin_gold_1");
  coin44.scale = 0.04 ;
  coin45.setAnimation("coin_gold_1");
  coin45.scale = 0.04 ;
  coin46.setAnimation("coin_gold_1");
  coin46.scale = 0.04 ;
  coin47.setAnimation("coin_gold_1");
  coin47.scale = 0.04 ;
  coin48.setAnimation("coin_gold_1");
  coin48.scale = 0.04 ;
  coin49.setAnimation("coin_gold_1");
  coin49.scale = 0.04 ;
  coin50.setAnimation("coin_gold_1");
  coin50.scale = 0.04 ;
  
  red.setAnimation("red_ghost");
  red.scale = 0.036;
  blue.setAnimation("blue_ghost");
  blue.scale = 0.027;
  heart1.setAnimation("heart");
  heart1.scale = 0.18;
  heart2.setAnimation("heart");
  heart2.scale = 0.18;
  heart3.setAnimation("heart");
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
  
  
  if(pacman.isTouching(coin1)){
    coin1.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin2)){
    coin2.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin3)){
    coin3.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin4)){
    coin4.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin5)){
    coin5.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin6)){
    coin6.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin7)){
    coin7.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin8)){
    coin8.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin9)){
    coin9.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin10)){
    coin10.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin11)){
    coin11.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin12)){
    coin12.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin13)){
    coin13.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin14)){
    coin14.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin15)){
    coin15.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin16)){
    coin16.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin17)){
    coin17.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin18)){
    coin18.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin19)){
    coin19.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin20)){
    coin20.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin21)){
    coin21.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin22)){
    coin22.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin23)){
    coin23.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin24)){
    coin24.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin25)){
    coin25.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin26)){
    coin26.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin27)){
    coin27.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin28)){
    coin28.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin29)){
    coin29.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin30)){
    coin30.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin31)){
    coin31.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin32)){
    coin32.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin33)){
    coin33.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin34)){
    coin34.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin35)){
    coin35.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin36)){
    coin36.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin37)){
    coin37.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin38)){
    coin38.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin39)){
    coin39.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin40)){
    coin40.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin41)){
    coin41.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin42)){
    coin42.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin43)){
    coin43.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin44)){
    coin44.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin45)){
    coin45.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin46)){
    coin46.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin47)){
    coin47.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin48)){
    coin48.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin49)){
    coin49.destroy();
    score+=1 ;
  }
  if(pacman.isTouching(coin50)){
    coin50.destroy();
    score+=1 ;
  }
  
  
  if(keyWentDown("up")){
    pacman.setAnimation("pacmanU");
    pacman.scale = 0.02;
    pacman.velocityY = -4 ;
    pacman.velocityX = 0 ;
  }
  if(keyWentUp("up")){
    pacman.velocityY = 0 ;
  }
  
  if(keyWentDown("down")){
    pacman.setAnimation("pacmanD");
    pacman.scale = 0.02;
    pacman.velocityY = 4 ;
    pacman.velocityX = 0 ;
  }
  if(keyWentUp("down")){
    pacman.velocityY = 0 ;
  }
  
  if(keyWentDown("left")){
    pacman.setAnimation("pacmanL");
    pacman.scale = 0.02;
    pacman.velocityX = -4 ;
    pacman.velocityY = 0 ;
  }
  if(keyWentUp("left")){
    pacman.velocityX = 0 ;
  }
  
  if(keyWentDown("right")){
    pacman.setAnimation("pacmanR");
    pacman.scale = 0.02;
    pacman.velocityX = 4 ;
    pacman.velocityY = 0 ;
  }
  if(keyWentUp("right")){
    pacman.velocityX = 0 ;
  }
  if(score == 2 && level < totalLevels){
    textSize(25);
    stroke("white");
    fill("white");
    score = 0;
    level++;
    loadLevel(level-1);
  }else if(level == totalLevels && score == 2){
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
