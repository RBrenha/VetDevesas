// Seleciona os itens do slider e a imagem a ser exibida
const sliderItems = document.querySelectorAll(".slider-item");
const sliderImage = document.getElementById("slider-image");

// Adiciona um evento de clique para cada item do slider
sliderItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove a classe 'active' de todos os itens
        sliderItems.forEach((i) => i.classList.remove("active"));

        // Adiciona a classe 'active' ao item clicado
        item.classList.add("active");

        // Altera a imagem exibida com base no atributo data-image
        const imageSrc = item.getAttribute("data-image");
        sliderImage.style.opacity = 0; // Adiciona uma transição de fade-out
        setTimeout(() => {
            sliderImage.src = imageSrc;
            sliderImage.style.opacity = 1; // Adiciona uma transição de fade-in
        }, 300);
    });
});
