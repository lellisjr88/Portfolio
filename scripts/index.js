const button = document.querySelector("#iconMenu");
const menu = document.querySelector(".nav");

button.addEventListener("click", openMenu);

function openMenu() {
  menu.classList.toggle("open");
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    menu.classList.remove("open");
  }
});

/*Secão Sobre mim */

const buttonSobre = document.querySelector("#buttonSobre");
const buttonHabilidade = document.querySelector("#buttonHabilidades");
const buttonEducacao = document.querySelector("#buttonEducacao");

const sobreMim = document.querySelector(".sobreMim");
const habilidadesText = document.querySelector(".habilidadesText");
const educacao = document.querySelector(".educacao");

buttonHabilidade.addEventListener("click", function () {
  habilidadesText.style.display = "block";
  sobreMim.style.display = "none";
  educacao.style.display = "none";
  if ((habilidadesText.style.display = "none")) {
    habilidadesText.style.display = "block";
  }
});

buttonEducacao.addEventListener("click", function () {
  educacao.style.display = "block";
  sobreMim.style.display = "none";
  habilidadesText.style.display = "none";

  if ((educacao.style.display = "none")) {
    educacao.style.display = "block";
  }
});

buttonSobre.addEventListener("click", function () {
  sobreMim.style.display = "block";
  educacao.style.display = "none";
  habilidadesText.style.display = "none";

  if ((sobreMim.style.display = "none")) {
    sobreMim.style.display = "block";
  }
});

//Formulário

const buttonEnviar = document.getElementById("botaoEnviar");

buttonEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  alert(
    "Olá, estamos trabalhando neste formulário " +
      "Logo você poderá entrar em contato comigo!"
  );
});
