class Level_1 {
    constructor() {
    }

    display() {        
        background("black");        
        text("Day 1: The outbreak", width/2, (50/665)*height);
        textAlign(LEFT);
        text("Mr. David is a scientist employed in TacGenics Corp. He is a part of a team of 6 scientists who are", 15, (150/665)*height)
        text("working on a project that will allow them to live with minimum food, water and resources.", 15, (200/665)*height)
        text("The company is funded by the government as well, because over population has become", 15, (250/665)*height)
        text(" a major crisis. It has been over a month since the team had started working", 15, (300/665)*height);
        text("on the project. However, TacGenics corp decided to hasten the project. After about another month,", 15, (350/665)*height)
        text("the corp claims to ha ve finshed the project and testing as well. People started getting doses of", 15, (400/665)*height)
        text("the medicine.", 15, (450/665)*height);
        text("On a Saturday midnight, you (Dr. David) are urgently called to the corp for some reason.", 15, (500/665)*height);
        text("Go and figure out what went wrong. Best of luck!", 15, (550/665)*height);
        textAlign(CENTER);
        text("[ SPACE ] to continue", width/2, (700/735)*height);
        if(keyDown("space")){
            gs = l1g;
    }
    
    }

    
}