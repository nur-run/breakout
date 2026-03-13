let randomCircles = {
    x: [],
    y: [],
    diameter: [],
    kleur: []
    // een array gegeven voor kleur
};

let snelheid = {
    x: [],
    y: []
};

let numberOfCircles = 11;


function setup() {
    createCanvas(400, 400);

    for(let counter = 0; counter < numberOfCircles; counter++) {
        randomCircles.x.push(Math.random() * 300);
        randomCircles.y.push(Math.random() * 300);
        randomCircles.diameter.push(Math.random() * 200);

        snelheid.x.push(Math.random() * 4 - 2);
        snelheid.y.push(Math.random() * 4 - 2);

        // in map() een random toegevoegd om verschillende grijs tintent te krijgen
        let tint = map(Math.random(), 0, 1, 50, 200);
        randomCircles.kleur.push(tint);
    }
}


function draw() {
    background(70);

    for(let counter = 0; counter < numberOfCircles; counter++) {
        noStroke()
        fill(randomCircles.kleur[counter]);
        circle(randomCircles.x[counter] += snelheid.x[counter], randomCircles.y[counter] += snelheid.y[counter], randomCircles.diameter[counter]);
    }
}
