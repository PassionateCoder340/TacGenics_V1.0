class Loading_Screen {
    constructor() {}

    display() {
        load = load + round(getFrameRate()/60);
        if(load <= 100) {
        text(load+" % Loading...",width/2, height/2);
        }
        else{
            
            text("Press [  SPACE  ] to Start", width/2, (3/4)*height)
            if(keyDown("space"))
            {gs = 1;}
        }
    }
}