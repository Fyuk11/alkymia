// modules/downloads-modal.js
export function initDownloadsModal() {
  const modal = document.getElementById('modal-download');
  if (!modal) return;

  const closeBtn = document.querySelector('.modal-download__close');
  const downloadBtns = document.querySelectorAll('.btn-descargar-gratis');
  const form = document.getElementById('form-download');
  
  // Abrir modal al hacer clic en descargar gratis
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const title = this.getAttribute('data-recurso-title');
      const url = this.getAttribute('data-recurso-url');
      
      document.getElementById('modal-download-title').textContent = `¡Genial! Descargá "${title}"`;
      document.getElementById('recurso-title').value = title;
      document.getElementById('recurso-url').value = url;
      
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Cerrar modal
  closeBtn.addEventListener('click', closeModal);
  
  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Manejar envío del formulario - VERSIÓN SIMPLIFICADA
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 1. Mostrar loading
    const btnText = document.getElementById('btn-download-text');
    const btnLoading = document.getElementById('btn-download-loading');
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    // 2. Enviar form a Netlify (para capturar el lead)
    // Netlify detecta automáticamente forms con atributo 'netlify'
    fetch('/', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      console.log('Form enviado a Netlify:', response);
    })
    .catch(error => {
      console.log('Form capturado (posible falla en envío):', error);
    });
    
    // 3. Descargar PDF inmediatamente (mejor UX)
    const recursoUrl = document.getElementById('recurso-url').value;
    window.open(recursoUrl, '_blank');
    
    // 4. Cerrar modal después de 2 segundos
    setTimeout(() => {
      closeModal();
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
    }, 2000);
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    form.reset();
  }

  console.log('✅ Downloads Modal inicializado');
}