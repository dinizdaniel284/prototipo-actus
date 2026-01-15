// MODAL E COOKIES
const modal = document.getElementById("modal-politica");
const btnPolitica = document.getElementById("abrir-politica");
const fecharModal = document.querySelector(".fechar");

if(btnPolitica) btnPolitica.onclick = () => modal.style.display = "flex";
if(fecharModal) fecharModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

if (!localStorage.getItem("cookiesAceitos")) {
    document.getElementById("cookies-banner").style.display = "flex";
}
document.getElementById("aceitar-cookies").onclick = () => {
    localStorage.setItem("cookiesAceitos", "sim");
    document.getElementById("cookies-banner").style.display = "none";
};

// LIGHTBOX (ZOOM DAS FOTOS)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const imagens = document.querySelectorAll('.carrossel img');

imagens.forEach(img => {
    img.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    };
});

// PARCEIROS TICKER (ESTILO SRPQ)
const parceiros = [
    {nome:'Olá! Marketing'}, {nome:'P4 ADVENTURE'}, {nome:'Padaria Veneza'},
    {nome:'Palhares'}, {nome:'Empório do Peixe'}, {nome:'Sicoob'},
    {nome:'Farmácia São José'}, {nome:'Girotto Água'}, {nome:'Bar do Bim'}
    // Adicione mais se precisar...
];

const ticker = document.getElementById("parceiros-carrossel");
if (ticker) {
    const content = document.createElement("div");
    content.className = "ticker-content";
    const lista = [...parceiros, ...parceiros, ...parceiros]; // Triplica para não ter buraco
    lista.forEach(p => {
        const span = document.createElement("span");
        span.className = "parceiro-item";
        span.innerHTML = ` ★ ${p.nome} `;
        content.appendChild(span);
    });
    ticker.appendChild(content);
}

// AUTO-SCROLL CARROSSEL
const carrossel = document.querySelector('.carrossel');
let scrollPos = 0;
function autoScroll() {
    if(!carrossel) return;
    scrollPos += 1;
    if (scrollPos >= carrossel.scrollWidth - carrossel.clientWidth) scrollPos = 0;
    carrossel.scrollTo(scrollPos, 0);
}
let scrollInterval = setInterval(autoScroll, 40);
carrossel.onmouseover = () => clearInterval(scrollInterval);
carrossel.onmouseleave = () => scrollInterval = setInterval(autoScroll, 40);