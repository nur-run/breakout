let mode = 0;

// js objects gebruikt voor circle interactie
let snelheid = {
    x: [],
    y: []
}

let circleMove = {
    x: [],
    y: []
}

const radius = 40;  // circle radius

////////////

// const gegeven aan de paddle
const paddle = {
    y: 440,
    w: 160,
    h: 30
}

let paddleX = 430;

////////////

let cnv;    // canvas
let numCircles = 1;
let i = 0;

////////////

let brickActive = [];
let numRects = 7;
let numRows = 4;


function setup() {
    // canvas gecentreerd
    cnv = createCanvas(640, 480);
    let newCanvasX = (windowWidth- 640)/2;
    let newCanvasY = (windowHeight- 480)/2;
    cnv.position(newCanvasX, newCanvasY);
  
    // circle spawend op een random plek binnen de canvas
    circleMove.x.push(Math.random() * 550);
    circleMove.y.push(Math.random() * 400);
    
    // verzorgd ervoor hoe snel de circle beweegt
    snelheid.x.push(Math.random() * 8 - 6);
    snelheid.y.push(Math.random() * 8 - 6);

    // een for gemaakt in setup zodat ze niet telkens opnieuw worden getekent in draw
    for (let row = 0; row < numRows; row++) {
        brickActive[row] = [];
        for (let col = 0; col < numRects; col++) {
            brickActive[row][col] = true;
        }
    }

}


function draw() {

    if (mode == 0) {
        splashScreen();
    }

    if (mode == 1) {


        // KLEUR CANVAS
        background(54, 1, 63);


    ////////////


        // LOOP CIRCLE
        for (let moving = 0; moving < numCircles; moving++) {
            fill("white");
            circle(circleMove.x[moving] += snelheid.x[moving], circleMove.y[moving] += snelheid.y[moving], radius);
        }



    ////////////


        // ARROW KEYS BEWEGING
        // als je arrowleft klikt gaat hij 5 pixels naar links
        // en als je arrowright klikt gaat hij 5 pixels naar rechts
        if (keyIsPressed) {
            if (key == 'ArrowLeft') {
                paddleX -= 5;
            }
            if (key == 'ArrowRight') {
                paddleX += 5;
            }
        }


    ////////////

        // PADDLE BLIJFT IN CANVAS
        // paddle gaat nu niet uit de canvas
        if (paddleX < 0) {
            paddleX += 5;   // zelfde als paddleX = paddleX + 5
        }

        if (paddleX > 480) {
            paddleX -= 5;
        }


    ////////////


        // paddle aanraking met circle
        let paddleLeft = paddleX;
        let paddleRight = paddleX + paddle.w;
        let paddleTop = paddle.y;
        let paddleBottom = paddle.y + paddle.h;

        // positie circle
        let circleX = circleMove.x[i]
        let circleY = circleMove.y[i]


        // CIRCLE & PADDLE BOTSING
        // deze if statement zorgt voor een botsing met circle en paddle
        // radius-20 gedaan omdat de raius op 40 staat in de const
        if (circleX >= paddleLeft && 
            circleX <= paddleRight && 
            circleY + radius-20 >= paddleTop &&
            circleY + radius-20 <= paddleBottom) {
            snelheid.y[i] *= -1;
        } 

        // PADDLE
        rect(paddleX, paddle.y, paddle.w, paddle.h);


    ////////////


        // BRICKS
        
        let marginSide = 10                             //ruimte links en rechts van de buitenste blokjes
        let marginTop = 10;                             //hoe ver van de bovenkant
    
        let brickHeight = 20;                           // hoogte van de blokje

        let cellWidth = (width - 2 * marginSide) / numRects;

        let brickWidth = cellWidth * .9;                //de echte breedte van je blokje (kleiner dan de ruimte per “vakje”)
        let gapInsideCell = cellWidth - brickWidth;     // ruimte tussen blokjes

        let verticaleGap = 10;

        let bricksLeft = false;

        for (let row = 0; row < numRows; row++) {
            
            let brickY = marginTop + row * (brickHeight + verticaleGap);

            for (let counter = 0; counter < numRects; counter++) {

                // regenboog kleur gegeven aan bricks met map()
                let redValue = map(row, 0, numRows - 1, 0, 255);
                let blueValue = map(row, 0, numRows - 1, 255, 0);
                let greenValue = map(counter, 0, numRows - 1, 0, 255);

                fill(redValue, greenValue, blueValue);

                if (brickActive[row][counter]) {
                    bricksLeft = true; // er is nog een brick
                }

                // slaat deze brick over als hij al kapot is
                if (!brickActive[row][counter]) {
                    continue;  // ga naar de volgende brick in de loop
                }

                let vakjeBeginX = marginSide + counter * cellWidth;
                let brickX = vakjeBeginX + gapInsideCell / 2;

                let brickLeft = brickX;
                let brickRight = brickX + brickWidth;
                let brickTop = brickY;
                let brickBottom = brickY + brickHeight;

                let circleTop = circleY - radius;
                let circleBottom = circleY + radius;

                if(circleX >= brickLeft &&
                    circleX <= brickRight &&
                    circleBottom + radius-20 >= brickTop &&
                    circleTop + radius-20 <= brickBottom
                ) {
                    snelheid.y[i] *= -1;
                    brickActive[row][counter] = false;  //brick "verdwijnt" na aanraking
                }

                rect(brickX, brickY, brickWidth, brickHeight);
            }
        }

        if (!bricksLeft) {
            mode = 3;
        }



    ////////////


        // CIRCLE & CANVAS BOTSING
        // if's gebruikt om aan te geven waneer hij aan de rand komt
        // waanneer hij de rand aanraakt gaat hij naar de andere kant
        if (circleMove.x[i] > 620) {
            snelheid.x[i] *= -1;
        }

        if(circleMove.x[i] < 20) {
            snelheid.x[i] *= -1;
        }

        if(circleMove.y[i] < 20) {
            snelheid.y[i] *= -1;
        }

        if(circleMove.y[i] > 460) {
            mode = 2;
        }
    }

    if (mode == 2) {
        resetButton();
    }

    if (mode == 3) {
        victoryScreen();
    }

}


function resetButton() {
    background(255, 0, 0);
    fill(255);
    textSize(50);
    text("Game Over!", 180, 240);

    fill("black");
    rect(230, 300, 200, 50, 20);

    textSize(30);
    fill(0, 0, 255);
    text("Reset game", 245, 335);

    if(mouseX >= 230 && mouseX <= 430 && mouseY >= 300 && mouseY <= 350 && mouseIsPressed == true) {

        // reset bal positie
        circleMove.x[i] = random(100, 500);
        circleMove.y[i] = random(100, 200);

        // reset snelheid
        snelheid.x[i] = random(-5, 5);
        snelheid.y[i] = random(3, 6);

        resetBricks();

        mode = 0;
    }
}


function victoryScreen() {
    background(0, 255, 0);
    fill(255);
    textSize(50);
    text("VICTORY🤩", 190, 240);

    fill("black");
    rect(230, 300, 200, 50, 20);

    textSize(30);
    fill(0, 0, 255);
    text("Reset game", 245, 335);

    if(mouseX >= 230 && mouseX <= 430 && mouseY >= 300 && mouseY <= 350 && mouseIsPressed == true) {

        // reset bal positie
        circleMove.x[i] = random(100, 500);
        circleMove.y[i] = random(100, 200);

        // reset snelheid
        snelheid.x[i] = random(-5, 5);
        snelheid.y[i] = random(3, 6);

        resetBricks();

        mode = 0;
    }

}



function splashScreen() {
    background(0, 0, 0); //zwart achtergrond
    fill(255, 0, 0);     //rood
    textSize(60);
    text('Mia Breakout', 150, 150);
    fill(255, 250, 0);      //geel
    textSize(20);
    
    fill("yellow");
    rect(230, 300, 200, 50, 20);

    textSize(30);
    fill(0, 0, 255);
    text("Click to Start", 245, 335);

    if(mouseX >= 230 && mouseX <= 430 && mouseY >= 300 && mouseY <= 350 && mouseIsPressed == true) {
        //did i click my mouse
        mode = 1; //start game
    }

}


function resetBricks() {

    for(let row = 0; row < numRows; row++) {
        for(let col = 0; col < numRects; col++) {
            brickActive[row][col] = true;
        }
    }
}


function updatemode() {
  mode = mode + 1;
}