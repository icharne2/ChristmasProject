window.onload = initLinks;

var galeria = new Array("Obrazy/1.jpg", "Obrazy/2.jpg", "Obrazy/3.jpg", "Obrazy/4.jpg", "Obrazy/5.jpg", "Obrazy/6.jpg", "Obrazy/7.jpg");

var i = 0;

function initLinks(){
    document.getElementById("back").onclick = processPrevious;
    document.getElementById("next").onclick = processNext;
}

function processPrevious(){
    if(i == 0)
        i = galeria.length;
    i--;
    document.getElementById("slider").src = galeria[i];
    return false;
}

function processNext(){
    i++;
    if(i == galeria.length)
        i =0;
    document.getElementById("slider").src = galeria[i];
    return false;
}