let numCircles;
let rowX;

function calculateX(start, index, offset){
    let x = start + index * offset;
    return x;
}

function drawRowOfCircles(y, numCircles, circleDiameter){
    for (let i = 0; i < numCircles; i++) {
        // calculate the x of the circle
        rowX = calculateX(50, i, 25);
        fill(0, 0, 200);
        circle(rowX, y, circleDiameter);
    }
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(135, 206, 235);

    drawRowOfCircles(100, 10, 10);
}