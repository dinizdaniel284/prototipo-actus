/* ================================
   ❄ NEVE LATERAL
================================ */
function createSideSnow(id) {
    const snowArea = document.getElementById(id);
    const flake = document.createElement("div");

    flake.classList.add("snowflake");
    flake.innerHTML = "❄";

    flake.style.left = Math.random() * 100 + "%";
    flake.style.fontSize = (Math.random() * 10 + 10) + "px";
    flake.style.opacity = Math.random();

    snowArea.appendChild(flake);

    setTimeout(() => flake.remove(), 4000);
}

setInterval(() => {
    createSideSnow("snow-left");
    createSideSnow("snow-right");
}, 150);


/* ================================
   📸 CARROSSEL PROFISSIONAL
================================ */

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

let currentIndex = 0;
let slideWidth;

function updateSlideWidth() {
    slideWidth = slides[0].getBoundingClientRect().width;
}

function moveCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    moveCarousel();
}

window.addEventListener("resize", () => {
    updateSlideWidth();
    moveCarousel();
});

// Inicialização
updateSlideWidth();
setInterval(nextSlide, 3500); // Troca a cada 3.5s
