document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  if (!menuIcon || !menu) {
    console.warn("Elemento #menu-icon ou #menu não encontrado.");
    return;
  }

  menuIcon.addEventListener("click", function () {
    console.log("Clicou no menu!"); // ver no console para confirmar
    menu.classList.toggle("ativo");

    // Acessibilidade: atualizar atributos
    const expanded = menu.classList.contains("ativo");
    menuIcon.setAttribute("aria-expanded", expanded ? "true" : "false");
    menu.setAttribute("aria-hidden", expanded ? "false" : "true");
  });
});


const carrossel = document.querySelector(".carrossel");
const track = document.querySelector(".carrossel-track");

if (carrossel && track) {
  let imagens = track.querySelectorAll("img");
  let index = 0;

  const primeira = imagens[0].cloneNode(true);
  track.appendChild(primeira);
  imagens = track.querySelectorAll("img");

  function trocarImagem() {
    index++;
    track.style.transition = "transform 1s ease";
    track.style.transform = `translateX(-${index * 100}vw)`;

    if (index === imagens.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        index = 0;
      }, 1000);
    }
  }

  setInterval(trocarImagem, 5000);
}




