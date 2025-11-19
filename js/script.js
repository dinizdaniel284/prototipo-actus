// Neve lateral
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
