function setup() {
    createCanvas(400, 400);
    background(150);

    // numberOfCircles veranderd naar 12 zodat ik 144 cirkels krijg
    let numberOfCircles = 12;
    let circleSize = width/numberOfCircles;
    
    // buitenste loop; deze gaat 10 keer naar beneden
    for(let row = 0; row < numberOfCircles; row++) {
        // binnenste loop; deze tekent 10 cirkels naast elkaar in 1 rij
        for (let col = 0; col < numberOfCircles; col++) {

            // laat de cirkels naast elkaar/onder lekaar komen
            let x = circleSize/2 + col * circleSize;
            let y = circleSize/2 + row * circleSize;

            // met de if-statement geef ik met row aan welke rijen ik wil kleuren
            if(row < 4) {
                let redValue = map(col, 0, 12, 0, 255);
                fill(redValue, 0, 0);    
            } 

            if(row >= 4 && row < 8) {
                let greenValue = map(col, 0, 12, 0, 255);
                fill(0, greenValue, 0);
            }
            
            if(row >= 8 && row < 12) {
                let blueValue = map(col, 0, 12, 0, 255);
                fill(0, 0, blueValue);
            }
            
            
            // met noStroke() geef ik aan dat ik geen randje wil om de cirkels
            noStroke();
            circle(x, y, circleSize);
        }
    }

}

function draw() {
    
}