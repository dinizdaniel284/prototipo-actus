// script.js - Papai Noel + Neve + Ajustes

// Criar neve caindo
function criarNeve() {
    const snow = document.getElementById("snow");

    for (let i = 0; i < 25; i++) {
        let floco = document.createElement("div");
        floco.classList.add("snowflake");
        floco.innerHTML = "❄";

        floco.style.left = Math.random() * 100 + "vw";
        floco.style.fontSize = (10 + Math.random() * 20) + "px";
        floco.style.animationDuration = (4 + Math.random() * 6) + "s";
        floco.style.opacity = 0.3 + Math.random() * 0.7;

        snow.appendChild(floco);

        setTimeout(() => floco.remove(), 9000);
    }
}

setInterval(criarNeve, 800);

// Animação Papai Noel voando pela tela inteira
const santa = document.querySelector('.papai-noel');
let posX = -250;
let posY = 50;
let velX = 3;
let velY = 2;

function moverSanta() {
    posX += velX;
    posY += velY;

    // Saiu da tela para direita → volta à esquerda
    if (posX > window.innerWidth + 250) {
        posX = -250;
        posY = Math.random() * window.innerHeight * 0.8;
    }

    // Bate no topo ou no fundo → inverte direção
    if (posY > window.innerHeight - 150 || posY < 0) {
        velY *= -1;
    }

    santa.style.left = posX + 'px';
    santa.style.top = posY + 'px';

    requestAnimationFrame(moverSanta);
}

moverSanta();
