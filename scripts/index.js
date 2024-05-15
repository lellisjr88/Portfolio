const button = document.querySelector('#iconMenu')
const menu = document.querySelector('.nav')

button.addEventListener('click',openMenu);

function openMenu() {
    menu.classList.toggle('open');
}

window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      menu.classList.remove("open");
    }
});
