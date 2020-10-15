const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".page-header-nav-menu");

btn.addEventListener("click", function() {
    nav.classList.toggle("show");
});