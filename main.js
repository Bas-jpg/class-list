const box = document.querySelector(".box");

const toggle = document.querySelector(".toggle");
toggle.addEventListener('click', function(){
        box.classList.toggle("error");
});





const colorfield = document.querySelector(".colorfield");

const animate = document.querySelector(".animation");
animate.addEventListener('click', function(){
    colorfield.classList.toggle("blinker");
});