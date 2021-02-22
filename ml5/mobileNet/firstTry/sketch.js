let mobileNet;

let feline;

function modelReady() {
    console.log('El modelo esta listo!');
    finished = Math.floor(Date.now() / 1000);
    console.log('El modelo tardo en cargar: ' ,finished - first, ' segundos');
    mobileNet.predict(feline, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        let label = results[0].label;
        let prob = results[0].confidence;
        fill(255);
        textSize(64);
        text(label, 10, height-400);
        createP(label);
        createP(prob);
    }
}

function imageReady() {
    image(feline, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    background(0);

    // El primer argumento es el dataset que se utilzo para el modelo pre entrenado
    // Mientras que el segundo argumento es una funcion callback o promise 
    first = Math.floor(Date.now() / 1000);
    mobileNet = ml5.imageClassifier('MobileNet', modelReady);

    feline = createImg('images/mio.jpg', 'mishito', imageReady);

    feline.hide();

}
