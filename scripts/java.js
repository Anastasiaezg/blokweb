console.log("hoi");

const menuBtn = document.querySelector("header nav button");
const menu = document.querySelector("header nav ul");
const bodyEl = document.body;

function openMenu() {
    menu.classList.toggle("active");
    bodyEl.classList.toggle("active");
}

menuBtn.addEventListener("click", openMenu);