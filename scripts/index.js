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

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageInput = document.querySelector('#textoInputs')
const emailForm = document.querySelector("#email-Form")

emailForm.addEventListener('submit', function (event) {
  event.preventDefault();


  nomeRecebido = nameInput.value;
  emailRecebido = emailInput.value;
  messageRecebida = messageInput.value;

  // const isValid = validateEmail(emailRecebido);


    if (nomeRecebido === "" || emailRecebido === "" || messageRecebida === "") {
      Toastify({
        text: "Preencha todos os campos do formulário",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          width: 300,
        },
        onClick: function(){} // Callback after click
      }).showToast();
        return;
    } else {
      const templateParams = {
        from_name: nomeRecebido,
        message: messageRecebida,
        email: emailRecebido
    }

    emailjs.send("service_5iy45mn","template_4dhg4fb", templateParams, "djP1Jof0FYewmztXu")
    .then((response) => {
      Toastify({
        text: "Email enviado com sucesso",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }, (err) => {
      Toastify({
        text: "Infelizmente tivemos um erro. Tente novamente em instantes.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    })
      nameInput.value = ""
      emailInput.value = ""
      messageInput.value = ""
  }

  

})

// //Função para validar email

// const validateEmail = (email) => {
//   const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
//   return regex.test(email)
// }