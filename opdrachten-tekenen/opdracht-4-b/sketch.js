function setup() {
    createCanvas(400, 400);
    background(150);

    let numberOfLines = 10;
    let afstand = 40;

    for(let counter = 0; counter < numberOfLines; counter++) {
        
        // eerste boog
        let x1 = 0;
        let y1 = height - counter * afstand;
        let x2 = afstand * counter;
        let y2 = 0;
        line(x1, y1, x2 ,y2);


        // tweede boog - lijkt op de eerste boog maar dan ietjes anders

        let x3 = width;                         //rechterrand
        let y3 = afstand * counter;             //boven naar beneden
        let x4 = height - counter * afstand;    //rechts naar links
        let y4 = height;                        //onderrand
        line(x3, y3, x4, y4);
    }
    
}

function draw() {
    
}