// /assets/js/modules/hero-alkymia.js
// JavaScript específico de la sección Hero - Versión optimizada

export function initHeroAlkymia() {
  const heroSection = document.querySelector('.hero-premium');
  if (!heroSection) return;

  createParticles();
  initParallax();
  initHeroScrollAnimations();
}

function createParticles() {
  const particlesContainer = document.querySelector('.hero-premium__particles');
  if (!particlesContainer) return;

  particlesContainer.innerHTML = '';

  const particleCount = 8;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = `hero-premium__particle ${i % 3 === 0 ? 'hero-premium__particle--accent' : 'hero-premium__particle--secondary'}`;
    
    particle.style.top = `${Math.random() * 70 + 15}%`;
    particle.style.left = `${Math.random() * 70 + 15}%`;
    
    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const duration = Math.random() * 4 + 4;
    const delay = Math.random() * 5;
    particle.style.animation = `float-particle ${duration}s ease-in-out ${delay}s infinite`;
    
    particlesContainer.appendChild(particle);
  }
}

function initParallax() {
  const heroBackground = document.querySelector('.hero-premium__background');
  if (!heroBackground) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.3;
    
    if (scrolled < window.innerHeight * 1.5) {
      heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.05)`;
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

function initHeroScrollAnimations() {
  const observer = window.createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.3 });

  const heroElements = document.querySelectorAll(
    '.hero-premium__title, .hero-premium__subtitle, .hero-premium__stats, .hero-premium__actions, .media-container'
  );
  
  heroElements.forEach(el => observer.observe(el));
}