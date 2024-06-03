// <!-- DROPDAWN DEL NAVBAR -->
document.querySelectorAll('.nav__link--drop').forEach(function (dropdown) {
    dropdown.addEventListener('wheel', function (event) {
        var delta = event.deltaY; // Dirección del scroll
        var scrollTop = this.scrollTop; // Posición actual del scroll
        var scrollHeight = this.scrollHeight; // Altura total del contenido
        var height = this.clientHeight; // Altura visible del contenedor

        var remainingHeight = scrollHeight - height - scrollTop; // Altura restante para llegar al final

        if ((delta > 0 && remainingHeight <= 0) || (delta < 0 && scrollTop <= 0)) {
            // Cuando el scroll está en el límite y sigue intentando avanzar
            event.preventDefault(); // Previene el scroll de la página
        }
    }, { passive: false }); // { passive: false } permite que preventDefault funcione correctamente
});

// <!-- MENU HAMBURGUESA -->
document.querySelector(".menu__hamburguesa").addEventListener("click", animatebars)

let line1 = document.querySelector(".menu__line1")
let line2 = document.querySelector(".menu__line2")
let line3 = document.querySelector(".menu__line3")
let menu = document.querySelector(".nav__list")
let modalanv = document.querySelector(".header__nav")
let header = document.querySelector(".header__float")

function animatebars() {
    line1.classList.toggle("activemenu__line1")
    line2.classList.toggle("activemenu__line2")
    line3.classList.toggle("activemenu__line3")
    menu.classList.toggle("nav__list--active")
    modalanv.classList.toggle("header__nav--active")
    header.classList.toggle("header__float--active")
    document.body.classList.toggle("body--disabled")
}

header.addEventListener("click", function (cerramodal) {
    if (event.target === header) {
        line1.classList.remove("activemenu__line1")
        line2.classList.remove("activemenu__line2")
        line3.classList.remove("activemenu__line3")
        menu.classList.remove("nav__list--active")
        modalanv.classList.remove("header__nav--active")
        header.classList.remove("header__float--active")
        document.body.classList.toggle("body--disabled")
    }
})