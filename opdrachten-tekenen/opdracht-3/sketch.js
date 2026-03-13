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

            // met noStroke() geef ik aan dat ik geen randje wil om de cirkels
            noStroke();
            // hier heb ik eerst een let gemaakt waar ik met de map() functie aangeef wat ik wil,
            // dus met col geef ik aan dat ik van links naar recht wil gaan en met de cijfers geef ik aan hoe vel het moet zijn
            let redValue = map(col, 0, 12, 0, 255);
            fill(redValue, 0, 0);
            circle(x, y, circleSize);
        }
    }
}

function draw() {
    
}