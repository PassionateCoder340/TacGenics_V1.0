var load = 0, loading, form1, form2, form3, game, level1, l1p2, level1game;
var gs =0;
var player, player2;
var standing, walkingDown, WalkingUp, walkingRight, walkingLeft;

var l1 = 4, l2=5,l3=6,l4=7,l5=8,l6=9,l7=10,l8=11;
var p2 = 44; 
var bgImg;
//actual games begin from 100;
var l1g = 100;

//bgImages
var tacgen_bgImg, tacgen_bgImg2;

//buttons - play, exit, option
var level1Image, level3Image, level4Image, level5Image, level6Image, level7Image, level8Image, backbuttonImg, playbuttonImg, campaignImg, multiplayerImg, survivalImg;
var shootleftImg, shootrightImg;
var optionsButtonImg, storylineButtonImg, tacHeaderImg, creditsbuttonImg, tutorialbuttonImg;
var bg1Img;

var bullet_left, bullet_right, carImg;
var level1part2;
var bg2Img;

var zombie;

//level 1 sprites

var bulletCount = 15;
var car;
var bullet_right_Grp, bullet_left_Grp;
var zombie_hurt;
var sad;

var zombieState = 0;


function preload() {
  standing = loadAnimation("images/TacGenics_SpriteAnimations/Standing/stand (1).png",
                          "images/TacGenics_SpriteAnimations/Standing/stand (2).png",
                          "images/TacGenics_SpriteAnimations/Standing/stand (3).png");
                            
  
  walkingRight = loadAnimation("images/TacGenics_SpriteAnimations/WalkingRight/right (1).png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/right (2).png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/right (3).png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/right (4).png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/right (5).png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/right (6).png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/right (7).png",
                            "images/TacGenics_SpriteAnimations/WalkingRight/right (8).png")
                            
  walkingLeft = loadAnimation("images/TacGenics_SpriteAnimations/WalkingLeft/left (1).png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/left (2).png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/left (3).png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/left (4).png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/left (5).png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/left (6).png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/left (7).png",
                            "images/TacGenics_SpriteAnimations/WalkingLeft/left (8).png");

  Zombie_Walking = loadAnimation("images/TacGenics_SpriteAnimations/Zombie_walk/z1.gif",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z2.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z3.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z4.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z5.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z6.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z7.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z8.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z9.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z10.png",
                                "images/TacGenics_SpriteAnimations/Zombie_walk/z11.png");

  shootleftImg = loadAnimation("images/TacGenics_SpriteAnimations/WalkingLeft/shoot_left.png");
  shootrightImg = loadAnimation("images/TacGenics_SpriteAnimations/WalkingRight/shoot_right.png");
  bg2Img = loadImage("images/TacGenics_SpriteAnimations/Buttons/bg2.png");

  zombie_hurt = loadAnimation("images/TacGenics_SpriteAnimations/z_hurt.png");
  sad = loadAnimation("images/TacGenics_SpriteAnimations/sad.png")

  form3_images();
  sounds();


}
function setup() {

  createCanvas(windowWidth,windowHeight);
  //playerSprite
  player = createSprite(175, 580, 30, 30);
  player.visible = false;
  player.addAnimation("standing", standing);
  player.addAnimation("walkRight", walkingRight);
  player.addAnimation("walkLeft", walkingLeft);
  player.addAnimation("shootleft", shootleftImg);
  player.addAnimation("shootright", shootrightImg); 
  player.addAnimation("sad", sad);
  player.scale = 1.5;

  zombie = createSprite(0, 580, 30, 30);
  zombie.visible = false;
  zombie.addAnimation("walkingZombie", Zombie_Walking);
  zombie.addAnimation("hurt", zombie_hurt);
  zombie.scale = 1.5;
  
  
  bullet_left_Grp = new Group();
  bullet_right_Grp = new Group();
  
 
  
  World.frameRate = 60; 
  
  game = new Game();

  
    if(gameSound){
      userStartAudio();
      gameSound.play();
    }
    
  
  
  
  
}

function draw() {
  if(gs === 1){background(tacgen_bgImg);}
  else if (gs === 2){background(tacgen_bgImg2)}
  else if(gs === l1g){background(bg1Img); gameSound.stop();}
  else if(gs === l1p2){background(bg2Img);}
  else{background("#9B0000")}

 
  

  if (gs === 0){
  fill("black");
  stroke("black")
  strokeWeight(2);  
  textAlign(CENTER);
  textSize(30);
  textFont("Georgia")
}
  else{
    fill("white");
  stroke("white")
  strokeWeight(2);  
  textAlign(CENTER);
  textSize(30);
  textFont("Georgia")
  }
  
  game.gamePlay();
  
  drawSprites();
  if(gs === l1g){
    text("← to move left", (1092/1365)*width, (86/665)*height);
    text("→ to move right", (1092/1365)*width, ((86+30)/665)*height);
    text("Bullets: "+ bulletCount, (100/1365)*width, (50/665)*height);
    if(player.x < 415){
      textFont("Times New Roman");
      strokeWeight(0.5);
      text("Oh no! The car is punctured. Now I", 270, 410);
      text("have to travel by foot...", 270, 440)
    }
  }
  if(gs === l1p2){
    text("Bullets: "+ bulletCount, (100/1365)*width, (50/665)*height);

  }
  if(zombieState === 1){
    textFont("Times New Roman");
    strokeWeight(0.5);
    text("To Be Continued...", width/2, 300);
  }
  
}

function form3_images() {  
  tacgen_bgImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/TacGenics_Background1.jpg");
  tacgen_bgImg2 = loadImage("images/TacGenics_SpriteAnimations/Buttons/TacGenics_Background2.jpg");
  tacHeaderImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/TacGenics_header.png");
  playButtonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Start_button.png");
  optionsButtonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Options_button.png");
  storylineButtonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Storyline_button.png");
  backbuttonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Back_button.png");
  creditsbuttonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Credits_button.png");
  tutorialbuttonImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Tutorial_button.png");
  bg1Img = loadImage("images/TacGenics_SpriteAnimations/Buttons/bg1.png");

  campaignImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Campaign_image.jpg");
  multiplayerImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Multiplayer_image.jpg");
  survivalImg = loadImage("images/TacGenics_SpriteAnimations/Buttons/Survival.jpg");
  level1Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level1_image.png");
  level2Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level2_image.png");
  level3Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level3_image.png");
  level4Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level4_image.png");
  level5Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level5_image.png");
  level6Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level6_image.png");
  level7Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level7_image.png");
  level8Image = loadImage("images/TacGenics_SpriteAnimations/LevelSelector/Level8_image.png");  

  carImg = loadImage("images/TacGenics_SpriteAnimations/car.png");
}

function sounds() {
  gameSound = loadSound("sounds/gameMusic.mp3");
}





