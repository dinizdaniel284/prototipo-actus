// Carrossel automático mais rápido
const carousel = document.querySelector('.galeria-carousel');
let scrollAmount = 0;

function autoScroll() {
    // Velocidade ajustada (quanto maior o valor, mais rápido anda)
    const speed = 1.2;  // antes era ~0.5

    scrollAmount += speed;
    carousel.scrollLeft = scrollAmount;

    // reinicia ao final
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();
