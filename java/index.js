document.addEventListener('DOMContentLoaded', function() {
    const carruselInner = document.querySelector('.carrusel-inner');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carruselItems.length;
        updateCarrusel();
    }

    function updateCarrusel() {
        carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
});


 window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-social');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.classList.add('animate');
      }, index * 150); // Escalonado en animación
    });
  });

    window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-social');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.classList.add('animate');
        btn.classList.add('animate-always'); // animación continua
      }, index * 150);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-social').forEach(btn => {
    btn.classList.add('animate');
    btn.classList.add('animate-always');
  });
});
