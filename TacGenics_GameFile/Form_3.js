class Form_3 {
    constructor() {
        //8 levs

        this.lev1 = createSprite((470/1500)*width,(230/735)*height,(100/1500)*width,(100/735)*height);        
        this.lev1.addImage("lev1p", level1Image);
        this.lev1.scale = 0.25;

        this.lev2 = createSprite((670/1500)*width,(230/735)*height,(100/1500)*width,(100/735)*height);        
        this.lev2.addImage("lev2p", level2Image);
        this.lev2.scale = 0.25;
        
        
        this.lev3 = createSprite((870/1500)*width,(230/735)*height,(100/1500)*width,(100/735)*height);            
        this.lev3.addImage("lev3p", level3Image);
        this.lev3.scale = 0.25;
        
        
        this.lev4 = createSprite((1070/1500)*width,(230/735)*height,(100/1500)*width,(100/735)*height); 
        this.lev4.addImage("lev4p", level4Image);
        this.lev4.scale = 0.25;

        
        this.lev5 = createSprite((470/1500)*width,(430/735)*height,(100/1500)*width,(100/735)*height);     
        this.lev5.addImage("lev5p", level5Image);
        this.lev5.scale = 0.25;

        
        this.lev6 = createSprite((670/1500)*width,(430/735)*height,(100/1500)*width,(100/735)*height);        
        this.lev6.addImage("lev6p", level6Image);
        this.lev6.scale = 0.25;

        
        this.lev7 = createSprite((870/1500)*width,(430/735)*height,(100/1500)*width,(100/735)*height);      
        this.lev7.addImage("lev7p", level7Image);
        this.lev7.scale = 0.25;

        
        this.lev8 = createSprite((1070/1500)*width,(430/735)*height,(100/1500)*width,(100/735)*height);        
        this.lev8.addImage("lev8p", level8Image);
        this.lev8.scale = 0.25;

        this.backbutton2 = createSprite((925/1024)*width,(655/735)*height,(25/256)*width, (1/10)*height);
        this.backbutton2.addImage("backb2", backbuttonImg);
        this.backbutton2.scale = 0.6;

        this.lev1.visible = false;
        this.lev2.visible = false;
        this.lev3.visible = false;
        this.lev4.visible = false;
        this.lev5.visible = false;
        this.lev6.visible = false;
        this.lev7.visible = false;
        this.lev8.visible = false;
        this.backbutton2.visible = false;

    }

    display() {
        form3.hideNot();
        if(mousePressedOver(this.lev1)){
            gs = l1;
        }

        if(mousePressedOver(this.backbutton2)){
            form3.hide();
            gs = 2;
        }
    }

    hide() {
        this.lev1.visible = false;
        this.lev2.visible = false;
        this.lev3.visible = false;
        this.lev4.visible = false;
        this.lev5.visible = false;
        this.lev6.visible = false;
        this.lev7.visible = false;
        this.lev8.visible = false;
        this.backbutton2.visible = false;

    }

    hideNot() {
        this.lev1.visible = true;
        this.lev2.visible = true;
        this.lev3.visible = true;
        this.lev4.visible = true;
        this.lev5.visible = true;
        this.lev6.visible = true;
        this.lev7.visible = true;
        this.lev8.visible = true;
        this.backbutton2.visible = true;
    }
}