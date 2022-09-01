window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    var logo = document.querySelector(".logodiv");
    logo.classList.toggle("scrolling", window.scrollY > 0);
})
