window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    var logo = document.querySelector(".logodiv");
    logo.classList.toggle("scrolling", window.scrollY > 0);
});


$(document).ready(function(){
    $('.carousel').carousel({
        padding: 200
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
});
let dayNight = document.querySelector('.dayNight')
let body = document.querySelector('body')
let moon = document.querySelector('.t1')
let lime = document.querySelector('.t2')

dayNight.onclick = function() {
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
    moon.classList.toggle('active')
    lime.classList.toggle('active')
}
