// /assets/js/modules/navigation.js
// Navegación principal - Versión optimizada

export function initNav() {
  const nav = document.querySelector(".nav--venta");
  const burger = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");

  if (!nav || !burger || !navMenu) return;

  initMobileMenu(burger, navMenu, nav);
  initNavScrollEffect(nav);
}

function initMobileMenu(burger, navMenu, nav) {
  const toggleMenu = () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
  };

  burger.addEventListener("click", toggleMenu);

  // Cerrar menú al hacer click en un link
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768 && navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", e => {
    if (window.innerWidth <= 768 && 
        navMenu.classList.contains("active") && 
        !nav.contains(e.target)) {
      toggleMenu();
    }
  });

  // Cerrar con Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
}

function initNavScrollEffect(nav) {
  const handleNavBackground = window.debounce(() => {
    if (window.innerWidth > 768) {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    } else {
      nav.classList.remove("scrolled");
    }
  }, 10);

  window.addEventListener("scroll", handleNavBackground);
  handleNavBackground(); // Estado inicial
}