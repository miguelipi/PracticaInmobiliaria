document.addEventListener("DOMContentLoaded", function () {
    const languageBtn = document.getElementById("language-btn");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const images = document.querySelectorAll(".carousel-images img");
    let currentIndex = 0;

    // Cambio de idioma sin recargar la página
    languageBtn.addEventListener("click", function () {
        const currentLang = languageBtn.textContent.includes("Español") ? "English" : "Español";
        languageBtn.textContent = currentLang === "English" ? "🌍 English" : "🌍 Español";
        // Aquí puedes agregar la lógica para cambiar el contenido de la página dinámicamente
    });

    // Menú hamburguesa para pantallas pequeñas
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Alterna la clase 'active' para abrir y cerrar el menú
    });

    // Restaurar menú cuando la pantalla se agrande nuevamente
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active"); // Elimina la clase 'active' si la pantalla es mayor a 768px
        }
    });

    // Carrusel de imágenes automático
    function moveSlide() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    if (images.length > 0) {
        images[currentIndex].classList.add("active");
        setInterval(moveSlide, 3000);
    }
});
