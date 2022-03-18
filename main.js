function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nq8FGaT7e/model.json', modelReady);
    }
    
    function modelReady() {
    classifier.classify(gotResults);
    }
    
    function gotResults() {
    console.log("Got the Results");
    }