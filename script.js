const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav");

menu.onclick = function() {
    nav.classList.toggle("active");
}

window.onscroll = function() {
    nav.classList.remove("active");
}