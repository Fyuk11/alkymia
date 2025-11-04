// /assets/js/modules/navigation.js - VERSIÓN SUPER SIMPLE
export function initNav() {
  const burger = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");

  if (!burger || !navMenu) {
    console.warn('Elementos de navegación no encontrados');
    return;
  }

  console.log('🚀 Navigation inicializado');

  // Event listener SUPER SIMPLE
  burger.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // Toggle classes
    this.classList.toggle("open");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    
    console.log('🍔 Menu toggled:', this.classList.contains('open'));
  });

  // Cerrar menú al hacer click en un link (mobile)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        burger.classList.remove("open");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Cerrar menú al hacer click fuera (mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && 
        navMenu.classList.contains("active") && 
        !navMenu.contains(e.target) && 
        !burger.contains(e.target)) {
      
      burger.classList.remove("open");
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });

  // Nav scroll effect (opcional)
  initNavScrollEffect();
}

function initNavScrollEffect() {
  const nav = document.querySelector(".nav--alkymia");
  if (!nav) return;

  const handleNavScroll = () => {
    const scrolled = window.scrollY > 50;
    nav.classList.toggle("scrolled", scrolled);
  };

  window.addEventListener("scroll", handleNavScroll);
  handleNavScroll();
}