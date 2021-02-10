

// query selectors
var background = document.querySelector("body");
var background1 = document.querySelector("#color1");
var background2 = document.querySelector("#color2");
var p = document.querySelector('.bg-value');
var btnRandom = document.querySelector('.btn-random');

// events
window.addEventListener('load', setGradient);
background1.addEventListener('input', setGradient);
background2.addEventListener('input', setGradient);
btnRandom.addEventListener('click', randomBackground);

// functions
function setGradient(){
    background.style.backgroundImage = "linear-gradient(to right, "
    + background1.value + " , " 
    + background2.value + ")";

    p.textContent = background.style.backgroundImage;
}

function randomBackground(){
    var random1 = Math.floor(Math.random() * 255);
    var random2 = Math.floor(Math.random() * 255);
    var random3 = Math.floor(Math.random() * 255);

    var random4 = Math.floor(Math.random() * 255);
    var random5 = Math.floor(Math.random() * 255);
    var random6 = Math.floor(Math.random() * 255);

    var firstRandom = "rgb("+ random1 +","+random2+","+random3+")";
    var secondRandom = "rgb("+ random4 +","+random5+","+random6+")";

    background.style.backgroundImage = "linear-gradient(to right, "
    + firstRandom + " , " 
    + secondRandom + ")";

    p.textContent = background.style.backgroundImage;
}