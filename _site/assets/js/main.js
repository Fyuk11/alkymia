import { initNav } from './nav.js';
import { initScrollAnimations, initAboutAnimations, initContactParticles } from './animations.js';
import { initSlideshow } from "./slideshow.js";
import { initFaqs } from './faqs.js';
import { initContactForm } from "./form.js";
import { initHeroAlkymia } from './hero-alkymia.js';


document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollAnimations();
  initSlideshow();
  initAboutAnimations();   // <-- 💡 acá la llamamos
  initFaqs();
  initContactParticles();
  initContactForm();
  initHeroAlkymia();   // <-- 🚀 acá lo llamás


  console.log("Landing loaded ✅");
});

// main.js
// main.js
// Asegura que siempre al recargar se vaya al inicio
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

// También por si se carga normalmente
window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});
