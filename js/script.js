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
});