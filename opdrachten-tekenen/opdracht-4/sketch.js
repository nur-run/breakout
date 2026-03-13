function setup() {
    createCanvas(400, 400);
    background(150);

    // hoeveel lijnen er in totaal moeten komen
    let numberOfLines = 9;
    // hoeveel afstand er is tussen de lijnen
    let afstand = 40;

    for(let counter = 0; counter < numberOfLines; counter++) {
        // begint op de linkerrand en gaat verder naar beneden
        let x1 = 0;
        let y1 = 25 + counter * afstand;

        // begint aan de rechterkant en gaat verder naar rechts
        let x2 = 25 + counter * afstand;
        let y2 = 0;

        line(x1, y1, x2 ,y2);
    }

    
}

function draw() {
    
}