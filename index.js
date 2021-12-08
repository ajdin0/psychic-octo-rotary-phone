let hello = document.getElementById("hello");
let Bio = document.getElementById("Bio");
let Edu = document.getElementById("Edu");
let Skills = document.getElementById("Skills");
let Lang = document.getElementById("Lang");
let Address = document.getElementById("Address");
let nexttext1 = document.getElementById("nexttext1");
let nexttext2 = document.getElementById("nexttext2");
let nexttext3 = document.getElementById("nexttext3");
let nexttext4 = document.getElementById("nexttext4");
let nexttext5 = document.getElementById("nexttext5");
let object = {};
let nexttext =[nexttext1, nexttext2, nexttext3, nexttext4, nexttext5]
var counter=0;
const hartopacity = document.querySelector("div.hartopacity");
const helloopacity = document.querySelector("div.helloopacity");
const hart = document.querySelector("div.hart");

function Biosibleoff(){
    Bio.style.visibility = "hidden";
    nexttext[0].style.visibility = "hidden";
    nexttext[1].style.visibility = "visible";
    Edu.style.visibility = "visible";
}
function Edusibleoff(){
    Edu.style.visibility = "hidden";
    nexttext[1].style.visibility = "hidden";
    nexttext[2].style.visibility = "visible";
    Skills.style.visibility = "visible";
}
function Skillssibleoff(){
    Skills.style.visibility = "hidden";
    nexttext[2].style.visibility = "hidden";
    nexttext[3].style.visibility = "visible";
    Lang.style.visibility = "visible";
}
function Langsibleoff(){
    Lang.style.visibility = "hidden";
    nexttext[3].style.visibility = "hidden";
    nexttext[4].style.visibility = "visible";
    Address.style.visibility = "visible";
}
function Addresssibleoff(){
    Address.style.visibility = "hidden";
    nexttext[4].style.visibility = "hidden";
}
function hellopacityon(){
    $("#helloopacity").animate({
        opacity: 1,
    }, 2000, function(){

    });
}
function hellopacityoff(){
    $("#helloopacity").animate({
        opacity: 0,
    }, 2000, function(){

    });
}
function hellovisibleoff(){
    hello.style.visibility = "hidden";
    Bio.style.visibility = "visible";
    nexttext1.style.visibility = "visible";
    hellopacityon();
}
function hartoff(){
    $("#hart").animate({
        opacity: 0,
    }, 2000, function(){

    });
}
function harton(){
    $("#hart").animate({
        opacity: 1,
    }, 2000, function(){

    });
}
function hartopacityoff(){
    $("#hartopacity").animate({
        opacity: 0,
    }, 2000, function(){

    });
}
function hartopacityon(){
    $("#hartopacity").animate({
        opacity: 1,
    }, 2000, function(){

    });
}
for(let counter=0; counter<6; counter++){
    switch(counter){
        case 0:
            hello.onclick = hellovisibleoff;
            break;
        case 1:
            nexttext1.onclick = Biosibleoff;
            break;
        case 2:
            nexttext2.onclick = Edusibleoff;
            break;
        case 3:
            nexttext3.onclick = Skillssibleoff;
            break;
        case 4:
            nexttext4.onclick = Langsibleoff;
            break;
        case 5:
            nexttext5.onclick = Addresssibleoff;
            break;
    }
}
hart.addEventListener("click", e => {
    hartoff();
    hartopacityon();
})
hartopacity.addEventListener("click", e => {
    harton();
    hartopacityoff();
})
helloopacity.addEventListener(`click`, e => {
    hello.style.visibility = "visible";
    Bio.style.visibility = "hidden";
    Edu.style.visibility = "hidden";
    Skills.style.visibility = "hidden";
    Lang.style.visibility = "hidden";
    Address.style.visibility = "hidden";

    nexttext[0].style.visibility = "hidden";
    nexttext[1].style.visibility = "hidden";
    nexttext[2].style.visibility = "hidden";
    nexttext[3].style.visibility = "hidden";
    nexttext[4].style.visibility = "hidden";
    hellopacityoff();
})
