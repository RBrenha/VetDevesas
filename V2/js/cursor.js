// Cria o elemento para o cursor personalizado
const customCursor = document.createElement("img");
customCursor.src = "imgs/Pataaa.png"; // Substitua pelo caminho do seu PNG
customCursor.classList.add("custom-cursor");
document.body.appendChild(customCursor);

// Atualiza a posição do cursor com base no movimento do mouse
document.addEventListener("mousemove", (event) => {
  customCursor.style.left = `${event.pageX}px`;
  customCursor.style.top = `${event.pageY}px`;
});
