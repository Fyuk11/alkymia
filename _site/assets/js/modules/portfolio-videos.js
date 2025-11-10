// modules/portfolio-videos.js
export function initPortfolioVideos() {
  const proyectoCards = document.querySelectorAll('.proyecto-card');
  
  if (!proyectoCards.length) return;
  
  proyectoCards.forEach(card => {
    const videos = card.querySelectorAll('.proyecto-video');
    const playPauseBtn = card.querySelector('.btn-play-pause');
    const playIcon = card.querySelector('#play-icon');
    const pauseIcon = card.querySelector('#pause-icon');
    const playText = card.querySelector('#play-text');
    const pauseText = card.querySelector('#pause-text');
    
    if (!playPauseBtn || videos.length === 0) return;
    
    let isPlaying = false;
    
    // Configurar videos
    videos.forEach(video => {
      video.addEventListener('loadeddata', function() {
        video.currentTime = 0;
      });
    });
    
    playPauseBtn.addEventListener('click', function() {
      isPlaying = !isPlaying;
      
      videos.forEach(video => {
        if (isPlaying) {
          video.play().catch(e => console.log('Error reproduciendo video:', e));
        } else {
          video.pause();
        }
      });
      
      // Actualizar UI
      if (isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playText.style.display = 'none';
        pauseText.style.display = 'inline';
        playPauseBtn.style.background = 'rgba(212, 175, 55, 0.2)';
      } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playText.style.display = 'inline';
        pauseText.style.display = 'none';
        playPauseBtn.style.background = 'rgba(212, 175, 55, 0.1)';
      }
    });
    
    // Reset cuando termina
    videos.forEach(video => {
      video.addEventListener('ended', function() {
        isPlaying = false;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        playText.style.display = 'inline';
        pauseText.style.display = 'none';
        playPauseBtn.style.background = 'rgba(212, 175, 55, 0.1)';
        
        // Reiniciar videos
        videos.forEach(v => {
          v.currentTime = 0;
        });
      });
    });
  });
  
  console.log('✅ Portfolio Videos inicializado');
}