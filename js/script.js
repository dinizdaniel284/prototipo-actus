// -------- MODAL DA POLÍTICA --------
var modal = document.getElementById("modal-politica");
var botao = document.getElementById("abrir-politica");
var fechar = document.querySelector(".fechar");

botao.onclick = () => modal.style.display = "block";
fechar.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// -------- COOKIES --------
if (!localStorage.getItem("cookiesAceitos")) {
    document.getElementById("cookies-banner").style.display = "block";
}

document.getElementById("aceitar-cookies").onclick = () => {
    localStorage.setItem("cookiesAceitos", "sim");
    document.getElementById("cookies-banner").style.display = "none";
};

// -------- PARCEIROS --------
const parceiros = [
    {nome:'Olá! Agência de Marketing'},
    {nome:'P4 ADVENTURE'},
    {nome:'Padaria Veneza'},
    {nome:'Palhares 1'},
    {nome:'Palhares 2'},
    {nome:'Palhares 3'},
    {nome:'Palhares 4'},
    {nome:'Papelaria Sophia Colorida'},
    {nome:'Empório do Peixe'},
    {nome:'Estácio EAD - Polo SRPQ'},
    {nome:'Faith - Country Life'},
    {nome:'Farmácia São José'},
    {nome:'Fix Informática'},
    {nome:'Gimafi Agropecuária'},
    {nome:'Gipel'},
    {nome:'Girotto Água e Gás'},
    {nome:'Gráfica Gazeta'},
    {nome:'Infinity'},
    {nome:'Iquebbrou'},
    {nome:'K2 EVENTOS'},
    {nome:'LDC Presentes'},
    {nome:'Manutenção Informática'},
    {nome:'Marcelo Caetano - Monitor'},
    {nome:'Márcia Nacca Calçados'},
    {nome:'Mariá Calçados'},
    {nome:'Marquinho Frios'},
    {nome:'Moda Tintas'},
    {nome:'Mundo A8 Travel'},
    {nome:'Nenê Agropet'},
    {nome:'OPnet Informática / ACTUS'},
    {nome:'Bigode Barbearia'},
    {nome:'Casa Girotto'},
    {nome:'Colônia Chopp'},
    {nome:'DBM Assessoria Contábil'},
    {nome:'DCS Eventos'},
    {nome:'Passa Quatro Vans'},
    {nome:'Posto Barban'},
    {nome:'Pousada da Colina'},
    {nome:'Prevenir Saúde Consultoria'},
    {nome:'Print Comunicação Visual'},
    {nome:'Rede Palmeira'},
    {nome:'Reimalhas'},
    {nome:'Rennovary'},
    {nome:'Restaurante e Pizzaria San'},
    {nome:'Romano Gallo Corretora'},
    {nome:'Solaprime'},
    {nome:'Santa Hora Buffet'},
    {nome:'Thiago Ferreira - Corretor'},
    {nome:'Tipografia ARO'},
    {nome:'Triroton'},
    {nome:'Z. L. Veículos'},
    {nome:'Zitta Shoes'},
    {nome:'Ótica Paula'},
    {nome:'Ótica Rubi'},
    {nome:'Banco Sicoob'},
    {nome:'Bar do Bim'},
    {nome:'Adega dos Meninos - Serra'}
];

const parceirosDiv = document.getElementById("parceiros-carrossel");

parceiros.forEach(p => {
    const span = document.createElement("span");
    span.textContent = " • " + p.nome + " • ";
    parceirosDiv.appendChild(span);
});
