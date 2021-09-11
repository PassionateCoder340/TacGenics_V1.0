class Level1_Game_Part2 {
    constructor() {
        
    }
    displayGame2(){
        zombie.visible = true;
        if(zombieState === 0){
        zombie.x = zombie.x + 0.5;}
        if(player.x < 0){
            gs = l1g;
        }
        //zombie.debug = true;
        zombie.setCollider("rectangle",0, 0, 75, 50);
        zombie.collide(player);
        if(player.x <= zombie.x + 150){
            player.x = player.x + 100;
        }

        if(bullet_left_Grp.isTouching(zombie)){
            bullet_left_Grp.destroyEach();
            zombie.changeAnimation("hurt", zombie_hurt);
            zombieState = 1;

        }
        if(zombieState === 1){
            player.changeAnimation("sad", sad);
            
        }
        
    }
}