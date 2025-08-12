
var pacman = createSprite(200, 375, 20, 20);
var red = createSprite(200, 180, 30, 30);
var blue = createSprite(200, 200, 30, 30);


var heart1 = createSprite(37, 27, 10, 10);
var heart2 = createSprite(77, 27, 10, 10);
var heart3 = createSprite(117, 27, 10, 10);


var wall1 = createSprite(200, 250, 110, 10);
var wall2 = createSprite(200, 230, 110, 10); 

var coin1 = createSprite(225, 325, 10, 10);
var coin2 = createSprite(275, 325, 10, 10);


var score = 0;


function draw() {
  background("black");
 
  pacman.setAnimation("pacmanR");
  pacman.scale = 0.5;
 

  red.setAnimation("red_ghost");
  red.scale = 0.36;
 
 
  blue.setAnimation("blue_ghost");
  blue.scale = 0.3;
 

  heart1.setAnimation("heart");
  heart1.scale = 0.18;
  heart2.setAnimation("heart");
  heart2.scale = 0.18;
  heart3.setAnimation("heart");
  heart3.scale = 0.18;

  wall1.shapeColor = "blue";
  wall2.shapeColor = "blue";
 

  red.bounceOff(wall1);
  red.bounceOff(wall2);
  blue.bounceOff(wall1);
  blue.bounceOff(wall2);
  pacman.collide(wall1);
  pacman.collide(wall2);
 

  if (pacman.isTouching(coin1)) {
    coin1.destroy();
    score += 1;
  }
  if (pacman.isTouching(coin2)) {
    coin2.destroy();
    score += 1;
  }
 

  textSize(20);
  text("Score: " + score, 10, 70);
 
 
  drawSprites();
}
