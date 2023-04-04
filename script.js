
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mt_behind = document.getElementById('mt_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mt_front = document.getElementById('mt_front');
let meteor = document.getElementById('meteor');
let lake = document.getElementById('lake');


window.addEventListener("scroll", function() {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener('scroll', function(){
    let value = window.scrollY; 
    stars.style.left = value * 0.2 + 'px';
    meteor.style.left = value * -0.25 + 'px';
    meteor.style.top = value * 0.55 + 'px';
    moon.style.top = value * 1.5 + 'px';
    mt_behind.style.top = value * 0.5 + 'px';
    mt_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    
})
