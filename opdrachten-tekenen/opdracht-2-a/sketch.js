function setup() {
    createCanvas(400, 400);
    background(100);

    let numberOfCircles = 10;
    let circleSize = width/numberOfCircles;
    
    // buitenste loop; deze gaat 10 keer naar beneden
    for(let row = 0; row < numberOfCircles; row++) {
        // binnenste loop; deze tekent 10 cirkels naast elkaar in 1 rij
        for (let col = 0; col < numberOfCircles; col++) {

            // laat de cirkels naast elkaar/onder lekaar komen
            let x = circleSize/2 + col * circleSize;
            let y = circleSize/2 + row * circleSize;

            fill("white");
            circle(x, y, circleSize);
        }
    }
}

function draw() {
}