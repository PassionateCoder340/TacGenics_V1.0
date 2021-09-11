class Form_1 {
    constructor() {
        this.tacHeader = createSprite((500/1024)*width, (125/735)*height, (25/256)*width, (1/10)*height);
        this.tacHeader.addImage("TacHeader", tacHeaderImg);

        this.playbutton = createSprite((900/1024)*width, (327/735)*height, (25/256)*width, (1/10)*height);        
        this.playbutton.addImage("playbuttonImg", playButtonImg);
        this.playbutton.scale = 0.5;

        this.storylinebutton = createSprite((900/1024)*width, (395/735)*height, (10/256)*width, (3/100)*height);
        this.storylinebutton.addImage("storylineButtonImg", storylineButtonImg);
        this.storylinebutton.scale = 0.48;

        this.optionbutton = createSprite((900/1024)*width, ((395 + 395-327)/735)*height, (10/256)*width, (3/100)*height);
        this.optionbutton.addImage("optionsButtonImg", optionsButtonImg);
        this.optionbutton.scale = 0.5;

        this.tutorialbutton = createSprite((900/1024)*width, ((395 + (395-327)*2)/735)*height, (10/256)*width, (3/100)*height);
        this.tutorialbutton.addImage("tutbutton", tutorialbuttonImg);
        this.tutorialbutton.scale = 0.5;

        this.creditsbutton = createSprite((900/1024)*width, ((395 + (395-327)*3)/735)*height, (10/256)*width, (3/100)*height);
        this.creditsbutton.addImage("crebutton", creditsbuttonImg);
        this.creditsbutton.scale = 0.5;



        this.optionbutton.visible=false;
        this.playbutton.visible = false;
        this.storylinebutton.visible = false;
        this.tacHeader.visible = false;
        this.tutorialbutton.visible = false;
        this.creditsbutton.visible = false;
        
    }

    displayForm1() {
        
        
       form1.hideNot();
        if(mousePressedOver(this.playbutton)){
            gs = 2;
        }
    }

    hide(){
        this.playbutton.visible = false;
        this.storylinebutton.visible = false;
        this.optionbutton.visible=false;
        this.tacHeader.visible = false;
        this.tutorialbutton.visible = false;
        this.creditsbutton.visible = false;
    }

    hideNot() {
        this.playbutton.visible = true;
        this.storylinebutton.visible = true;
        this.optionbutton.visible=true;
        this.tacHeader.visible = true;
        this.tutorialbutton.visible = true;
        this.creditsbutton.visible = true;
    }
}