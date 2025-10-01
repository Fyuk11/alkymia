// /assets/js/modules/slideshow.js
// Slideshow/Carrusel - Versión optimizada

export function initSlideshow() {
  const slideshow = document.querySelector(".slideshow");
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll(".slide");
  if (slides.length <= 1) return; // No necesita slideshow si hay 1 o menos slides

  let currentIndex = 0;
  let slideshowInterval;

  function showSlide(index) {
    // Remover clase active de todos los slides
    slides.forEach(slide => slide.classList.remove("active"));
    
    // Agregar clase active al slide actual
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Inicializar primer slide
  showSlide(currentIndex);

  // Iniciar slideshow automático
  slideshowInterval = setInterval(nextSlide, 5000);

  // Pausar slideshow al hacer hover
  slideshow.addEventListener('mouseenter', () => {
    clearInterval(slideshowInterval);
  });

  // Reanudar slideshow al salir del hover
  slideshow.addEventListener('mouseleave', () => {
    slideshowInterval = setInterval(nextSlide, 5000);
  });

  // Limpiar intervalo al salir de la página
  window.addEventListener('beforeunload', () => {
    clearInterval(slideshowInterval);
  });
}