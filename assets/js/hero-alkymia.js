// hero-alkymia.js
// JavaScript específico de la sección Hero (Alkymia)

export function initHeroAlkymia() {
  // Partículas dinámicas (opcional)
  function createParticles() {
    const particlesContainer = document.querySelector('.hero__particles');
    if (!particlesContainer) return;

    const particleCount = 4; // Número de partículas
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = `hero__particle ${i % 2 === 0 ? 'hero__particle--accent' : 'hero__particle--secondary'}`;
      
      // Posición aleatoria
      particle.style.top = `${Math.random() * 80 + 10}%`;
      particle.style.left = `${Math.random() * 80 + 10}%`;
      
      // Tamaño aleatorio
      const size = Math.random() * 8 + 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Delay de animación aleatorio
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      particlesContainer.appendChild(particle);
    }
  }

  // Efecto parallax (opcional)
  function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroBackground = hero.querySelector('.hero__background');
    if (!heroBackground) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    });
  }

  // Inicializar (activar lo que quieras usar)
  // createParticles();
  // initParallax();
}
