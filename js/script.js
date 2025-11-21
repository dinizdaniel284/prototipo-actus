/* ================================================
   NEVE LATERAL – GERADOR PROFISSIONAL
================================================ */
function createSnow(containerId) {
    const container = document.getElementById(containerId);
    const totalSnowflakes = 25; // número ideal para celular

    for (let i = 0; i < totalSnowflakes; i++) {
        const flake = document.createElement("div");
        flake.classList.add("snowflake");

        flake.textContent = "❄";
        flake.style.left = Math.random() * 100 + "%";
        flake.style.animationDuration = 3 + Math.random() * 3 + "s";
        flake.style.fontSize = 10 + Math.random() * 10 + "px";
        flake.style.opacity = 0.6 + Math.random() * 0.4;

        container.appendChild(flake);

        // Reinicia a animação suavemente
        flake.addEventListener("animationiteration", () => {
            flake.style.left = Math.random() * 100 + "%";
        });
    }
}

createSnow("snow-left");
createSnow("snow-right");


/* ================================================
   CARROSSEL DE IMAGENS (PROFISSIONAL)
================================================ */

// Captura o container da galeria
const gallery = document.querySelector(".galeria-carousel");

// Clona todas as imagens para criar um loop infinito real
const images = [...gallery.children];
images.forEach(img => {
    const clone = img.cloneNode(true);
    gallery.appendChild(clone);
});

// Velocidade do carrossel (maior = mais rápido)
let speed = 0.20;

// Controle da posição
let position = 0;

function animateCarousel() {
    position -= speed;

    // Reinicia antes de ultrapassar o limite
    if (Math.abs(position) >= gallery.scrollWidth / 2) {
        position = 0;
    }

    gallery.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animateCarousel);
}

animateCarousel();


/* ================================================
   OTIMIZAÇÃO DE PERFORMANCE PARA MOBILE
================================================ */

let lastResize = 0;

window.addEventListener("resize", () => {
    const now = Date.now();
    if (now - lastResize > 300) {
        // Reduz velocidade em telas muito pequenas
        if (window.innerWidth < 480) {
            speed = 0.18;
        } else {
            speed = 0.22;
        }
    }
    lastResize = now;
});
