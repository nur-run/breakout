function setup() {
    createCanvas(400, 400);
    background(150);

    // hoeveel lijnen er in totaal moeten komen
    let numberOfLines = 10;
    // hoeveel afstand er is tussen de lijnen
    let afstand = 40;

    for(let counter = 0; counter < numberOfLines; counter++) {
        
        let x1 = 0;
        // heigt is 400 en elk lijn gaat daarna omhoog 
        let y1 = height - counter * afstand;

        // x2 gaat telkens van links naar rechts
        let x2 = afstand * counter;
        let y2 = 0;

        line(x1, y1, x2 ,y2);
    }

    
}

function draw() {
    
}