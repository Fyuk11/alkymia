// /assets/js/modules/faqs.js
// Sistema de FAQs - Versión optimizada

export function initFaqs() {
  const faqSection = document.querySelector('.faqs');
  if (!faqSection) return;

  initFaqAccordion();
}

function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');
  
  faqCards.forEach(card => {
    const question = card.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Cerrar otras FAQs abiertas
      faqCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
          otherCard.classList.remove('active');
        }
      });
      
      // Alternar FAQ actual
      card.classList.toggle('active');
    });
  });

  // Cerrar FAQ al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.faq-card')) {
      faqCards.forEach(card => card.classList.remove('active'));
    }
  });

  // Cerrar con Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      faqCards.forEach(card => card.classList.remove('active'));
    }
  });
}