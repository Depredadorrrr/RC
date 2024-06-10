const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      containerFormRegister = document.querySelector(".register"),
      containerFormLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide");
});

document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;

    if (hash === "#login") {
        containerFormLogin.classList.remove("hide");
        containerFormRegister.classList.add("hide");
    } else if (hash === "#register") {
        containerFormRegister.classList.remove("hide");
        containerFormLogin.classList.add("hide");
    } else {
        // Si no hay hash o es incorrecto, mostrar por defecto el formulario de registro
        containerFormRegister.classList.remove("hide");
        containerFormLogin.classList.add("hide");
    }
});
