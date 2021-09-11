class Level1_Game {
    constructor() {
        
        
    }
    displayGame1() {  
        
        level1game.hideNot();
        level1game.movement();
        imageMode(CENTER);
       image(carImg, 185, 575, 310, 92);
       if(player.x > 1365) {
           gs = l1p2;
       }
        
        
        
    }
    hideNot() {
        player.visible = true;
    }
    
    movement() {
        
        if(keyDown("right")){
            player.changeAnimation("walkRight", walkingRight);
            player.x = player.x + 3;  
            if(keyWentDown("x") && bulletCount > 0){
                bulletCount = bulletCount - 1;
                player.changeAnimation("shootright", shootrightImg);
                bullet_right = createSprite(player.x + 40, player.y - 10, 5, 2.5);              //ERRORMAY
                bullet_right.velocityX = 15;
                bullet_right.shapeColor = "red";
                bullet_right.lifetime = 50;
                bullet_right_Grp.add(bullet_right);
                
               
            }          
        }
        else if(keyDown("left")){
            player.changeAnimation("walkLeft", walkingLeft);
            player.x = player.x - 3;
            if(keyWentDown("x") && bulletCount > 0){
                bulletCount = bulletCount - 1;
                player.changeAnimation("shootleft",shootleftImg);
                bullet_left = createSprite(player.x - 40, player.y - 10, 5, 2.5);              //ERRORMAY
                bullet_left.velocityX = -15;
                bullet_left.shapeColor = "red";
                bullet_left.lifetime = 50;
                bullet_left_Grp.add(bullet_left);
                
            }
        }

        
        
        else{
            player.changeAnimation("standing", standing);
            
            
        }
    }
}