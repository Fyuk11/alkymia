// /assets/js/utils/global.js
// Utilidades globales y helpers

export function initGlobalUtils() {
  // Scroll al top en recarga (solo desktop)
  if (window.innerWidth > 768) {
    window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
  }

  // Helper para detectar mobile
  window.isMobile = () => window.innerWidth <= 768;
  
  // Helper para debounce
  window.debounce = (func, wait, immediate = false) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  };

  // Smooth scroll helper
  window.smoothScrollTo = (element, offset = 80) => {
    const target = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;
    
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Observer helper para animaciones
  window.createIntersectionObserver = (callback, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
  };

  // Helper para formatear números
  window.formatNumber = (num) => {
    return new Intl.NumberFormat('es-AR').format(num);
  };
}
  // Observer helper para animaciones
  window.createIntersectionObserver = (callback, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
  };
}