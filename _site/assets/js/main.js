// /assets/js/main.js
// Punto de entrada principal - Alkymia Digital

// Importaciones de módulos
import { initNav } from './modules/navigation.js';
import { initScrollAnimations } from './modules/animations.js';
import { initSlideshow } from "./modules/slideshow.js";
import { initFaqs } from './modules/faqs.js';
import { initContactForm } from "./modules/forms.js";
import { initHeroAlkymia } from './modules/hero-alkymia.js';
import { initGlobalUtils } from './utils/global.js';

// Sistema de inicialización con manejo de errores
class AlkymiaApp {
  constructor() {
    this.modules = [];
    this.init();
  }

  async init() {
    try {
      // Inicializar utils globales primero
      initGlobalUtils();
      
      // Inicializar módulos en orden de prioridad
      await this.initModules();
      
      console.log('🎯 Alkymia Digital - Landing cargada correctamente');
    } catch (error) {
      console.error('❌ Error inicializando la aplicación:', error);
    }
  }

  async initModules() {
    const moduleInitializers = [
      { name: 'Navigation', init: initNav },
      { name: 'Hero', init: initHeroAlkymia },
      { name: 'Scroll Animations', init: initScrollAnimations },
      { name: 'Slideshow', init: initSlideshow },
      { name: 'FAQs', init: initFaqs },
      { name: 'Contact Form', init: initContactForm }
    ];

    for (const module of moduleInitializers) {
      try {
        await module.init();
        this.modules.push(module.name);
        console.log(`✅ ${module.name} inicializado`);
      } catch (error) {
        console.warn(`⚠️ ${module.name} no se pudo inicializar:`, error);
      }
    }
  }

  // Para debugging
  getInitializedModules() {
    return this.modules;
  }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  window.alkymiaApp = new AlkymiaApp();
});