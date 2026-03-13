let snelheid = {
    x: [],
    y: []
}

let circleMove = {
    x: [],
    y: []
}

let numCircles = 1;

let paddleX = 300;

function setup() {
    createCanvas(400, 400);

    // startpositie van de bal
    circleMove.x.push(Math.random() * 300);
    circleMove.y.push(Math.random() * 300);
    
    snelheid.x.push(Math.random() * 4 - 2 || 1); 
    snelheid.y.push(2); 
}

function draw() {
    background(100);

    // key is pressed toegevoegd
    if (keyIsPressed) {
        if (key === 'ArrowLeft') {
            paddleX -= 5;
        }
        if (key === 'ArrowRight') {
            paddleX += 5;
        }
    }

    for (let i = 0; i < numCircles; i++) {

        // balpositie updaten
        circleMove.x[i] += snelheid.x[i];
        circleMove.y[i] += snelheid.y[i];

        // paddle collision
        if (
            circleMove.x[i] + 20 > paddleX &&          // rechterkant bal
            circleMove.x[i] - 20 < paddleX + 160 &&   // linkerkant bal
            circleMove.y[i] + 20 >= 370 &&           // onderkant bal bereikt paddle
            snelheid.y[i] > 0                         // alleen als bal naar beneden gaat
        ) {
            snelheid.y[i] *= -1;                      // bal stuitert terug
            circleMove.y[i] = 370 - 20;              // voorkomt vastzitten in paddle
        }

        // canvas randen
        if (circleMove.x[i] > 380 || circleMove.x[i] < 20) snelheid.x[i] *= -1;
        if (circleMove.y[i] > 380 || circleMove.y[i] < 20) snelheid.y[i] *= -1;

        // bal tekenen
        circle(circleMove.x[i], circleMove.y[i], 40);

        // paddle tekenen
        rect(paddleX, 370, 160, 30);
    }
}