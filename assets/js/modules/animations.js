// /assets/js/modules/animations.js
// Animaciones globales - Versión optimizada

export function initScrollAnimations() {
  // Scroll suave para todos los links internos
  initSmoothScroll();
  
  // Animaciones al hacer scroll
  initScrollTriggeredAnimations();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function initScrollTriggeredAnimations() {
  const observer = window.createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Si es un elemento con animación específica
        if (entry.target.classList.contains('animate-on-scroll')) {
          entry.target.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.15 });

  // Observar elementos que necesitan animación
  const elementsToAnimate = document.querySelectorAll(
    '.animate-on-scroll, .fade-in, [data-animate]'
  );
  
  elementsToAnimate.forEach(el => observer.observe(el));
}

// Función removida - initAboutAnimations ya no existe
// Función removida - initContactParticles ya no existe