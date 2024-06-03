document.addEventListener('DOMContentLoaded', function () {
    // Aplicar el tema guardado al cargar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    document.getElementById('theme-dropdown').addEventListener('click', function (event) {
        var content = document.getElementById('theme-menu');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
    });

    window.addEventListener('click', function () {
        var content = document.getElementById('theme-menu');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        }
    });

    // Cambiar el tema al hacer clic en una opción y guardar la selección
    document.querySelectorAll('#theme-menu a').forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir que el enlace navegue
            const selectedTheme = this.getAttribute('data-theme');
            document.body.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme); // Guardar el tema en el almacenamiento local
            updateThemeIcon(selectedTheme);
            document.getElementById('theme-menu').style.display = 'none'; // Ocultar el menú después de seleccionar
        });
    });
});

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme__dropbtn i');
    if (theme === 'dark') {
        themeIcon.className = 'bi bi-moon-fill';
    } else {
        themeIcon.className = 'bi bi-brightness-high-fill';
    }
}