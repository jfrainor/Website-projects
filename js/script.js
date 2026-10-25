// Script para ocultar el menú de navegación en móviles después de hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header__nav-item a');
    const menuCheckbox = document.getElementById('open-menu');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Desmarcar el checkbox para ocultar el menú
            menuCheckbox.checked = false;
        });
    });

    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
});