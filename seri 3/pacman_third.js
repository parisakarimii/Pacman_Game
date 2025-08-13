
var lives = 3;


var pacman = createSprite(200, 375, 20, 20);
var red = createSprite(200, 180, 30, 30);
var blue = createSprite(200, 200, 30, 30);


var heart1 = createSprite(37, 27, 10, 10);
heart1.setAnimation("heart");
heart1.scale = 0.15;

var heart2 = createSprite(67, 27, 10, 10);
heart2.setAnimation("heart");
heart2.scale = 0.15;

var heart3 = createSprite(97, 27, 10, 10);
heart3.setAnimation("heart");
heart3.scale = 0.15;


var logo = createSprite(260, 28, 10, 10);
logo.setAnimation("لوگو pacman.png_1");
logo.scale = 0.25;

var isStarted = false;


var coin1 = createSprite(225, 325, 10, 10);
var coin2 = createSprite(275, 325, 10, 10);


var score = 0;

function draw() {
  background("black");
 
 
  if (!isStarted) {
    pacman.setAnimation("pacmanR");
    pacman.scale = 0.5;
    isStarted = true;
  }
 

  if (pacman.isTouching(red) || pacman.isTouching(blue)) {
    lives -= 1;
 

    pacman.x = 200;
    pacman.y = 375;
    red.x = 200;
    red.y = 200;
    blue.x = 200;
    blue.y = 200;
  }
 

  if (pacman.isTouching(coin1)) {
    coin1.destroy();
    score += 1;
  }
 
  if (pacman.isTouching(coin2)) {
    coin2.destroy();
    score += 1;
  }
 

  if (score == 50) {
    textSize(25);
    stroke("white");
    fill("white");
    text("You Won", 200, 200);
  }
 

  heartLives();
 

  drawSprites();
 

  textSize(20);
  fill("white");
  text("Score: " + score, 10, 70);
}


function heartLives() {
  if (lives == 2) {
    heart3.destroy();
  }
 
  if (lives == 1) {
    heart2.destroy();
  }
 
  if (lives == 0) {
    heart1.destroy();
 
    textSize(30);
    stroke("white");
    fill("white");
    text("Game Over", 120, 135);
  }
}
