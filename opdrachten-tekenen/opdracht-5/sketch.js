function setup() {
    createCanvas(400, 400);
    background(150);

    let numberOfCircles = 10;
    let circleSize = width/numberOfCircles;

    let rectSize = width/numberOfCircles;

    for(let counter = 0; counter < numberOfCircles; counter++) {
        fill("white");
        
        if(counter % 2 === 0) {
            rectMode(CENTER);
            rect(rectSize/2 + counter * rectSize, height/2, rectSize);
        } else {
            circle(circleSize/2 + counter * circleSize, height/2, circleSize);  
        }
    }

}

function draw() {
    
}