"use strict";

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Si el usuario ha desplazado más de 50px
        navbar.classList.add('bg-scroll');
    } else {
        navbar.classList.remove('bg-scroll');
    }
});

// Función para cerrar el menú de navegación en celulares y tablet
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los enlaces dentro del navbar
    let links = document.querySelectorAll('#main-navbar .nav-link');

    // Función para cerrar el menú de navegación
    function closeNavbar() {
        let navbarCollapse = document.querySelector('.navbar-collapse.collapse');
        // Si está utilizando Bootstrap 5, puede utilizar las funciones de utilidad de Bootstrap
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            }).hide();
        }
    }

    // Añade un evento de clic a cada enlace para cerrar el menú al hacer clic
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            closeNavbar();
        });
    });
});