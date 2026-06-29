const images = [

    "images (2).jpg",
    "coffee.webp",
    "espresso.webp",
    "images (6).jpg"

];

let current = 0;

const slider = document.getElementById("slider");

document.getElementById("next").onclick = function(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    slider.src = images[current];

}

document.getElementById("prev").onclick = function(){

    current--;

    if(current < 0){

        current = images.length - 1;

    }

    slider.src = images[current];

}
setInterval(function(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    slider.src = images[current];

},3000);