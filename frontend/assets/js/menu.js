const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
  console.log("Botón de menú clickeado");
  navLinks.classList.toggle('active');
});
