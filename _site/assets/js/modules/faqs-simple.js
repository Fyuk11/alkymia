// /assets/js/modules/faqs-simple.js
// Versión que SÍ funciona - sin async/await complicado

export function initFaqsSimple() {
  console.log('🔧 Inicializando FAQs SIMPLE...');
  
  // Esperar un poco para asegurar que el DOM esté listo
  setTimeout(() => {
    const faqCards = document.querySelectorAll('.faq-card');
    console.log(`📚 Encontradas ${faqCards.length} FAQs`);
    
    faqCards.forEach(card => {
      card.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Cerrar otras
        faqCards.forEach(other => {
          if (other !== this) other.classList.remove('active');
        });
        
        // Toggle esta
        this.classList.toggle('active');
        console.log('✅ FAQ toggled');
      });
    });
    
    console.log('🎉 FAQs SIMPLE inicializadas correctamente');
  }, 100);
}