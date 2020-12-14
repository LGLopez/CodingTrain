/*
Deteccion de objetos usando imagenes estaticas

let photo;
// Variables donde se guardara el modelo object detector
let detector;

function preload() {
    photo = loadImage('images/animal 2.jpg');
    // Cargar el modelo en la variable, se pasa como parametro el modelo que se usara en este caso cocossd
    detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log('el resultado es:');
        console.log(results);

        results.forEach(result => {
            stroke(0, 255, 0);
            strokeWeight(4);
            noFill();
            rect(result.x, result.y, result.width, result.height);
            noStroke();
            fill(255);
            textSize(24);
            text(result.label, result.x + 10, result.y + 24);
            text(result.confidence, result.x + 10, result.y + 50);
        });

    }
}

function setup() {
    createCanvas(640, 480);
    image(photo, 0, 0, width, height);
    detector.detect(photo, gotDetections);
}

function draw() {

}
*/
let video;
// Variables donde se guardara el modelo object detector
let detector;
// Esta variable se utiliza para poder dibujar en el metodo draw
let detections = [];

function preload() {
    // Cargar el modelo en la variable, se pasa como parametro el modelo que se usara en este caso cocossd
    detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        detections = results;
    }
    detector.detect(video, gotDetections);
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    image(video);
    video.size(640, 480);
    detector.detect(video, gotDetections);
    video.hide();
}

function draw() {
    image(video, 0, 0);
    detections.forEach(result => {
        stroke(0, 255, 0);
        strokeWeight(4);
        noFill();
        rect(result.x, result.y, result.width, result.height);   
        noStroke();
        fill(255);
        textSize(24);
        text(result.label, result.x + 10, result.y + 24);
        textSize(18);
        text(result.confidence.toFixed(3), result.x + 10, result.y + 50);         
    });
}
