// /assets/js/main.js - VERSIÓN LIMPIA
import { initNav } from './modules/navigation.js';
import { initScrollAnimations } from './modules/animations.js';
import { initDownloadsModal } from './modules/downloads-modal.js';
import { initPortfolioVideos } from './modules/portfolio-videos.js';

// Utils esenciales directamente en main.js
function initGlobalUtils() {
  // Helper para debounce (necesario para el nav)
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
}

// Sistema de inicialización simplificado
class AlkymiaApp {
  constructor() {
    this.init();
  }

  init() {
    try {
      // Inicializar utils globales primero
      initGlobalUtils();
      
      // Inicializar módulos esenciales
      this.initEssentialModules();
      
      // Inicializar módulos condicionales
      this.initConditionalModules();
      
      // Inicializar analytics tracking
      this.initAnalyticsTracking();
      
      console.log('🎯 Alkymia Digital - Landing cargada correctamente');
    } catch (error) {
      console.error('❌ Error inicializando la aplicación:', error);
    }
  }

  initEssentialModules() {
    // Solo los módulos que realmente usás
    const essentialModules = [
      { name: 'Navigation', init: initNav },
      { name: 'Scroll Animations', init: initScrollAnimations }
    ];

    essentialModules.forEach(module => {
      try {
        module.init();
        console.log(`✅ ${module.name} inicializado`);
      } catch (error) {
        console.warn(`⚠️ ${module.name} no se pudo inicializar:`, error);
      }
    });
  }

initConditionalModules() {
  // Módulos que solo se inicializan si existen en la página
  const conditionalModules = [
    { 
      name: 'Downloads Modal', 
      init: initDownloadsModal,
      check: () => document.getElementById('modal-download') 
    },
    { 
      name: 'Portfolio Videos', 
      init: initPortfolioVideos,
      check: () => document.querySelector('.portfolio-interactivo') 
    }
  ];

  conditionalModules.forEach(module => {
    try {
      if (module.check && module.check()) {
        module.init();
        console.log(`✅ ${module.name} inicializado`);
      }
    } catch (error) {
      console.warn(`⚠️ ${module.name} no se pudo inicializar:`, error);
    }
  });
}



  initAnalyticsTracking() {
    // Trackeo de clicks en botones importantes
    document.querySelectorAll('a[href*="wa.me"], .btn-primary, .btn-secondary').forEach(button => {
      button.addEventListener('click', function(e) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': this.textContent.trim() || this.href,
            'value': 1
          });
        }
      });
    });

    // Trackear clicks en secciones específicas
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'nav_click', {
            'event_category': 'Navigation',
            'event_label': this.textContent.trim() + ' -> ' + this.getAttribute('href'),
            'value': 1
          });
        }
      });
    });

    console.log('✅ Analytics Tracking inicializado');
  }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  window.alkymiaApp = new AlkymiaApp();
});