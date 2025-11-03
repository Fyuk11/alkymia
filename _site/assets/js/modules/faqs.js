// /assets/js/modules/faqs.js
// Sistema de FAQs - Versión robusta y confiable

export function initFaqs() {
  console.log('🔧 Inicializando sistema de FAQs...');
  
  // Esperar a que el DOM esté completamente listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFaqs);
  } else {
    setupFaqs();
  }
}

function setupFaqs() {
  const faqSection = document.getElementById('faqs');
  
  if (!faqSection) {
    console.warn('❌ No se encontró la sección de FAQs');
    return;
  }

  const faqCards = faqSection.querySelectorAll('.faq-card');
  console.log(`📚 Se encontraron ${faqCards.length} preguntas frecuentes`);

  if (faqCards.length === 0) {
    console.warn('⚠️ No hay FAQs para inicializar');
    return;
  }

  // Inicializar cada FAQ card
  faqCards.forEach((card, index) => {
    initFaqCard(card, index);
  });

  console.log('✅ Sistema de FAQs inicializado correctamente');
}

function initFaqCard(card, index) {
  const question = card.querySelector('.faq-question');
  const answer = card.querySelector('.faq-answer');
  
  if (!question || !answer) {
    console.warn(`⚠️ FAQ ${index} no tiene la estructura correcta`);
    return;
  }

  // Agregar event listener al question
  question.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    handleFaqClick(card, index);
  });

  // También hacer que toda la card sea clickeable
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    // Solo activar si el click no fue en un enlace dentro de la respuesta
    if (!e.target.closest('a')) {
      e.preventDefault();
      handleFaqClick(card, index);
    }
  });
}

function handleFaqCard(card, index) {
  const isCurrentlyActive = card.classList.contains('active');
  
  console.log(`🎯 FAQ ${index} ${isCurrentlyActive ? 'cerrada' : 'abierta'}`);
  
  // Cerrar todas las demás FAQs
  document.querySelectorAll('.faq-card.active').forEach(otherCard => {
    if (otherCard !== card) {
      otherCard.classList.remove('active');
    }
  });
  
  // Alternar estado de la FAQ actual
  card.classList.toggle('active');
  
  // Opcional: Scroll suave si se abre
  if (!isCurrentlyActive) {
    setTimeout(() => {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
  }
}

