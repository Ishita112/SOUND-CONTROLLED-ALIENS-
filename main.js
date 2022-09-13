function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier( 'https://teachablemachine.withgoogle.com/models/vyIqjriJc/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error) {

    } else {
    console.log(results);
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);  
    b = Math.floor(Math.random() * 255);
    
    document.getElementById("label_r").innerHTML = 'I can Hear - '+ results[0].label;
    document.getElementById("confidence_r").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("label_r").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("confidence_r").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("label_r").style.color = "rgb("+r+","+g+","+b+")";

    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');
    img3 = document.getElementById('alien4');

    
    if (results[0].label == "Clap") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
    }

    else if (results[0].label == "Bell") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
    }

    else if (results[0].label == "Snap") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';
    }else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
    }


 }
