function setup() {
    createCanvas(400, 400);
    background(100);

    let numberOfCircles = 10;
    let circleSize = width/numberOfCircles;

    for(let counter = 0; counter < numberOfCircles; counter++) {
        fill("white");
        circle(circleSize/2 + counter * circleSize, height/2, circleSize);
    }
}

function draw() {
    // for (let i = 0; i < 100; i++) {
    //     circle(25 + i * 50, 25, height/10, 49);
    // }
}