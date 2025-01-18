const slider = document.querySelector('.services');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollPosition = 0; // Posição atual do slider
const serviceWidth = 300; // Largura de cada serviço (deve ser igual ao CSS)
const visibleServices = Math.floor(window.innerWidth / serviceWidth); // Quantos serviços cabem visíveis
const totalServices = document.querySelectorAll('.service').length; // Número total de serviços

leftArrow.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= visibleServices;
    updateSlider();
  }
});

rightArrow.addEventListener('click', () => {
  if (scrollPosition < totalServices - visibleServices) {
    scrollPosition += visibleServices;
    updateSlider();
  }
});

function updateSlider() {
  const translateX = -(scrollPosition * serviceWidth);
  slider.style.transform = `translateX(${translateX}px)`;
}
