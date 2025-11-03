// /assets/js/modules/forms.js
// Manejo de formularios - Listo para usar cuando lo necesites

export function initContactForm() {
  const form = document.querySelector("form[name='contact']");
  if (!form) return;

  const successMessage = createSuccessMessage();
  let isSubmitting = false;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    isSubmitting = true;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
      // Mostrar estado de carga
      submitButton.textContent = 'Enviando...';
      submitButton.disabled = true;
      
      const formData = new FormData(form);
      const response = await fetch("/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData),
      });
      
      if (response.ok) {
        showSuccessMessage(form, successMessage);
        form.reset();
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      alert("❌ Hubo un error al enviar el formulario. Intentá de nuevo.");
    } finally {
      // Restaurar estado del botón
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      isSubmitting = false;
    }
  });
}

function createSuccessMessage() {
  const message = document.createElement("div");
  message.className = "form-success-message";
  message.textContent = "¡Gracias! Tu mensaje fue enviado correctamente.";
  message.style.cssText = `
    color: var(--success);
    margin-top: 1rem;
    padding: 0.75rem;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid var(--success);
    border-radius: 0.375rem;
    font-weight: 500;
  `;
  
  return message;
}

function showSuccessMessage(form, successMessage) {
  // Remover mensaje anterior si existe
  const existingMessage = form.querySelector('.form-success-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Agregar nuevo mensaje
  form.appendChild(successMessage);
  
  // Auto-remover después de 5 segundos
  setTimeout(() => {
    successMessage.remove();
  }, 5000);
}