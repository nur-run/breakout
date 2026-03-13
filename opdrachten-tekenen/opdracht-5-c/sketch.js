function setup() {
    createCanvas(400, 400);
    background(150);

    // ik heb de numberOfCircles een hoger getal gegeven zodat ik meer circles en rect krijg
    let numberOfCircles = 20;
    let circleSize = width/numberOfCircles;

    let rectSize = width/numberOfCircles;

    for(let row = 0; row < numberOfCircles; row++) {
        for (let col = 0; col < numberOfCircles; col++) {

            let circleX = circleSize/2 + col * circleSize;
            let circleY = circleSize/2 + row * circleSize;

            let rectX = rectSize/2 + col * rectSize;
            let rectY = rectSize/2 + row * rectSize;

            // row en col samen gebruikt
            if((row + col) % 2) {
                rectMode(CENTER);
                rect(rectX, rectY, rectSize);
            } else {
                circle(circleX, circleY, circleSize);  
            }

            fill("white");
        }
    }


}

