"use strict";

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Si el usuario ha desplazado más de 50px
        navbar.classList.add('bg-scroll');
    } else {
        navbar.classList.remove('bg-scroll');
    }
});

