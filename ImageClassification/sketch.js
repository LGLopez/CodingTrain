let mobileNet;
let label= '';
let confi= '';
let video;

function modelReady(){
    console.log('El modelo esta listo!');
    finished = Math.floor(Date.now() / 1000);
    console.log('El modelo tardo encargar: ', finished - first, ' segundos');
    mobileNet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        // console.log(results);
        label = results[0].label;
        confi = results[0].confidence;
        // createP(label);
        // createP(prob);
        mobileNet.predict(gotResults);
    }
}

// function imageReady() {
//     image(photo, 0, 0, width, height);
// }

function setup() {
    createCanvas(640, 480);
    background(0);

    video = createCapture(VIDEO);
    first = Math.floor(Date.now() / 1000);
    mobileNet = ml5.imageClassifier('MobileNet', video, modelReady);

    video.hide();
}

function draw() {
    image(video, 0, 0);
    fill(255);
    textSize(32);
    text(label, 10, height-400);
    text(confi, 10, height-450);
}