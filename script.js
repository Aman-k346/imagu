let background = document.querySelector(".background");
let controls = document.querySelector(".controls");
// Controls Selector
let blur = document.querySelector("#blur");
let saturate = document.querySelector("#saturation");
let brightness = document.querySelector("#brightness");
let hue = document.querySelector("#hue");
let contrast = document.querySelector("#contrast");
let grayscale = document.querySelector("#grayscale");
let invert = document.querySelector("#invert");
let sepai = document.querySelector("#sepai");

function blured() {
    let vale = "backdrop-filter: blur(" + blur.value + "px);";
    background.style = vale;
}
function saturated() {
    let vale = "backdrop-filter: brightness(" + saturate.value + "%);";
    background.style = vale;
}
function bright(){
    let vale = "backdrop-filter: saturate(" + brightness.value + "%);";
    background.style = vale;
}
function hued(){
    let vale = "backdrop-filter: hue-rotate(" + hue.value + "deg);";
    background.style = vale;
}

function contrasted(){
    let vale = "backdrop-filter: contrast(" + contrast.value + "%);";
    background.style = vale;
}
function grayed(){
    let vale = "backdrop-filter: grayscale(" + grayscale.value + "%);";
    background.style = vale;
}
function inverted(){
    let vale = "backdrop-filter: invert(" + invert.value + "%);";
    background.style = vale;
}

