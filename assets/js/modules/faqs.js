// /assets/js/modules/faqs.js
// Sistema de FAQs - Versión optimizada

export function initFaqs() {
  const faqSection = document.querySelector('.faqs');
  if (!faqSection) return;

  initFaqAccordion();
}

function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');
  
  console.log(`🔍 Encontradas ${faqCards.length} FAQs`); // Debug
  
  faqCards.forEach((card, index) => {
    const question = card.querySelector('.faq-question');
    
    if (!question) {
      console.warn(`⚠️ No se encontró .faq-question en la FAQ ${index}`);
      return;
    }
    
    question.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      console.log(`🎯 FAQ ${index} clickeada`); // Debug
      
      // Cerrar otras FAQs abiertas
      faqCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
          otherCard.classList.remove('active');
          console.log(`📕 Cerrada otra FAQ`);
        }
      });
      
      // Alternar FAQ actual
      const wasActive = card.classList.contains('active');
      card.classList.toggle('active');
      
      console.log(`📖 FAQ ${index} ${wasActive ? 'cerrada' : 'abierta'}`);
    });
  });

  // Cerrar FAQ al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.faq-card')) {
      let closedCount = 0;
      faqCards.forEach(card => {
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          closedCount++;
        }
      });
      if (closedCount > 0) {
        console.log(`📕 Cerradas ${closedCount} FAQs (click fuera)`);
      }
    }
  });

  // Cerrar con Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      let closedCount = 0;
      faqCards.forEach(card => {
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          closedCount++;
        }
      });
      if (closedCount > 0) {
        console.log(`📕 Cerradas ${closedCount} FAQs (Escape)`);
      }
    }
  });

  // Debug: Verificar que todo esté conectado
  console.log('✅ FAQ system initialized');
}