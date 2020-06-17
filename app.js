var color;

function randomColor() {
    var characters = "0123456789ABCDEF";
    var color = "#";
    console.log(characters);
    for (i = 0; i < 6; i++) {
        var randomCharacter = Math.floor(Math.random() * 16);
        console.log(randomCharacter);
        color += characters[randomCharacter];
    }

    console.log(color);
    return color;
}



var createdTime;
var clickedTime;
var responseTime;


makeBox();

function makeBox() {
    var time = Math.random() * 5000;
    console.log("Time: "+time);

    setTimeout(function () {

        if (Math.random() > .5) {
            document.getElementById("box").style.borderRadius = "100px";
        }
        else {
            document.getElementById("box").style.borderRadius = "0px";
        }

        var top = Math.random();
        top = top * 300;
        console.log(top);

        var left = Math.random();
        left = left * 500;

        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.top = (top)/10 + "rem";
        document.getElementById("box").style.left = (left)/10 + "rem";
        document.getElementById("box").style.background = randomColor();
        createdTime = Date.now();
        console.log(createdTime);
    }, );
}

document.getElementById("box").addEventListener("click", myFunction);


function myFunction() {
    clickedTime = Date.now();
    responseTime = (clickedTime - createdTime) / 1000;
    console.log("Response"+responseTime);
    document.getElementById("time").innerHTML = responseTime;
    console.log(this);
    this.style.display="none";
    makeBox();

}