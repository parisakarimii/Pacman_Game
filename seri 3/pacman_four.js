
var coin40 = createSprite(375, 125, 10, 10);
coin40.setAnimation("coin_gold_1");
coin40.scale = 0.6;

var power = 0; 
var powerCounter = 0; 


var lives = 3;


var score = 0;

var red = createSprite(200, 180, 30, 30);
var blue = createSprite(200, 200, 30, 30);


var pacman = createSprite(200, 375, 20, 20);


function draw() {
  background("black");
 
  if (pacman.isTouching(coin40)) {
    coin40.destroy();
    power = 1;
  }
 

  if (power == 1 && powerCounter != 150) {
    powerCounter++;
  } else if (power == 1 && powerCounter == 150) {
    power = 0;
    powerCounter = 0;
  }

  if (power == 0) {
    red.setAnimation("red_ghost");
    red.scale = 0.36;
 
    blue.setAnimation("blue_ghost");
    blue.scale = 0.27;
  } else {
    red.setAnimation("good_ghost");
    red.scale = 1;
 
    blue.setAnimation("good_ghost");
    blue.scale = 0.2;
  }
 

  if (pacman.isTouching(red) && power == 0) {
    lives -= 1;
 

    pacman.x = 200;
    pacman.y = 375;
    red.x = 200;
    red.y = 200;
  }
 
  if (pacman.isTouching(blue) && power == 0) {
    lives -= 1;
 

    pacman.x = 200;
    pacman.y = 375;
    blue.x = 200;
    blue.y = 200;
  }

  textSize(18);
  fill("white");
  text("Score: " + score, 10, 20);
  text("Lives: " + lives, 10, 40);
 

  drawSprites();
}
