class Form_2 {
    constructor() {
        this.campaign = createSprite((350/2048)*width,(500/1000)*height,(600/2048)*width,(600/1000)*height);
        this.campaign.addImage("campaign", campaignImg);
        this.campaign.scale = 0.4;

        this.survival = createSprite((1000/2048)*width,(500/1000)*height,(600/2048)*width,(600/1000)*height);
        this.survival.addImage("survival", survivalImg);
        this.survival.scale = 0.4;

        this.multiplayer = createSprite((1650/2048)*width,(500/1000)*height,(600/2048)*width,(600/1000)*height);
        this.multiplayer.addImage("multiplayer", multiplayerImg);
        this.multiplayer.scale = 0.4;

        this.backbutton1 = createSprite((135/1500)*width,(655/735)*height,(25/256)*width, (1/10)*height);        
        this.backbutton1.addImage("backb1", backbuttonImg);
        this.backbutton1.scale = 0.6;

        this.campaign.visible = false;
        this.survival.visible = false;
        this.multiplayer.visible = false;
        this.backbutton1.visible = false;
    
    }

    display() {
        form2.hideNot();

        if(mousePressedOver(this.campaign)){
            gs = 3;
        }
        if(mousePressedOver(this.backbutton1)){
            form2.hide();
            gs = 1;
            
        }
    }

    hideNot() {
        this.campaign.visible = true;
        this.survival.visible = true;
        this.multiplayer.visible = true;
        this.backbutton1.visible = true;
    }

    hide() {
        this.campaign.visible = false;
        this.survival.visible = false;
        this.multiplayer.visible = false;
        this.backbutton1.visible = false;
    }

}