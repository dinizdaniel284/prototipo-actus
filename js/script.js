/* =================== PAPAI NOEL SOBREVOANDO =================== */
const santa = document.getElementById('santa');
let posX = -150;
let posY = 50;
let speedSanta = 1.5;

function moveSanta(){
    posX += speedSanta;
    if(posX > window.innerWidth + 50){
        posX = -150;
        posY = Math.random() * (window.innerHeight - 150);
    }
    santa.style.left = posX + 'px';
    santa.style.top = posY + 'px';
    requestAnimationFrame(moveSanta);
}
moveSanta();

/* =================== GALERIA CARROSSEL =================== */
const carousel = document.querySelector('.galeria-carousel');
let scrollAmount = 0;

function autoScroll() {
    const speed = 1; // mais suave
    scrollAmount += speed;
    carousel.scrollLeft = scrollAmount;

    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth){
        scrollAmount = 0;
    }

    requestAnimationFrame(autoScroll);
}
autoScroll();

/* =================== NEVE REALISTA =================== */
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const numFlakes = 250;
const flakes = [];

for (let i = 0; i < numFlakes; i++) {
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        speedY: Math.random() * 1 + 0.2,
        speedX: Math.random() * 0.5 - 0.25,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: Math.random() * 0.03,
        depth: Math.random() // profundidade para efeito realista
    });
}

function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let flake of flakes) {
        ctx.fillStyle = `rgba(255,255,255,${0.5 + 0.5*flake.depth})`; // flocos mais claros/escuros
        flake.angle += flake.angleSpeed;
        const x = flake.x + Math.sin(flake.angle) * 5;
        ctx.beginPath();
        ctx.arc(x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        flake.y += flake.speedY;
        flake.x += flake.speedX;

        if (flake.y > canvas.height) {
            flake.y = -flake.radius;
            flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;
    }
    requestAnimationFrame(drawSnow);
}
drawSnow();

/* =================== COOKIES FUNCIONANDO =================== */
const cookieConsent = document.getElementById('cookieConsent');
const acceptBtn = document.getElementById('acceptCookies');

if(localStorage.getItem('cookiesAccepted') === 'true'){
    cookieConsent.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.style.display = 'none';
});
