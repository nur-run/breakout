function setup() {
    createCanvas(400, 400);
    background(200);

    let numberOfCircles = 12;
    let circleSize = width/numberOfCircles;
    
    for(let row = 0; row < numberOfCircles; row++) {
        
        for (let col = 0; col < numberOfCircles; col++) {

            let x = circleSize/2 + col * circleSize;
            let y = circleSize/2 + row * circleSize;

            noStroke();
        
            // red en blue value een row gegeven zodat het van links naar rechts gaat
            // green value een col gegeven zodat het van boven naar onder gaat
            // numberOfCircles heb ik een -1 gegeven omdat het 11 word inplaats van 12
            let redValue = map(row, 0, numberOfCircles - 1, 0, 255);
            let blueValue = map(row, 0, numberOfCircles - 1, 255, 0);
            let greenValue = map(col, 0, numberOfCircles - 1, 0, 255);

            fill(redValue, greenValue, blueValue);
            circle(x, y, circleSize);
        }
    }
}

