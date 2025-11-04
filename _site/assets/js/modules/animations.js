// /assets/js/modules/animations.js
// Animaciones globales - Versión optimizada

export function initScrollAnimations() {
  // Reset scroll al top al iniciar
  initScrollReset();
  
  // Scroll suave para todos los links internos
  initSmoothScroll();
  
  // Animaciones al hacer scroll
  initScrollTriggeredAnimations();
}

// Nueva función para resetear scroll
function initScrollReset() {
  // Scroll al top inmediatamente al cargar
  window.scrollTo(0, 0);
  
  // Prevenir restore scroll del navegador (scroll restoration)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // Scroll al top también antes de recargar
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
  
  console.log('🔝 Scroll reset inicializado');
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