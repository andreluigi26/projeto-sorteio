let participantes = [];

function modoZeroDez(){
    const resultado = document.getElementById("numeroSorteado");
    let contador = 0;

    const animacao = setInterval(() => {
        const numero  = Math.floor(Math.random() * 10) + 1;
        resultado.textContent = `🎲 ${numero}`;
        contador ++;
    }, 100);

    setTimeout(() => {
        clearInterval(animacao);
        const numero  = Math.floor(Math.random() * 10) + 1;
        resultado.textContent = `🎉 Número Sorteado: ${numero}`;
    }, 2000);

    document.getElementById("grupoCem").style.display = "none";
    document.getElementById("grupoMil").style.display = "none";
}
function modoZeroCem () {
    const resultado = document.getElementById("numeroSorteado");
    let contador = 0;

    const animacao = setInterval(() => {
        const numero = Math.floor(Math.random() * 100) + 1;
        resultado.textContent = `🎲 ${numero}`;
        contador ++;
    }, 100);

    setTimeout(() => {
        clearInterval(animacao);
        const numero = Math.floor(Math.random() * 100) + 1;
        resultado.textContent = `🎉 Número Sorteado: ${numero}`;
    }, 2000);
    
    document.getElementById("grupoDez").style.display = "none";
    document.getElementById("grupoMil").style.display = "none";
}
function modoZeroMil () {
    const resultado = document.getElementById("numeroSorteado");
    let contador = 0;

    const animacao = setInterval(() => {
        const numero = Math.floor(Math.random() * 1000) + 1;
        resultado.textContent = `🎲 ${numero}`;
        contador ++;
    }, 100);

    setTimeout(() => {
        clearInterval(animacao);
        const numero = Math.floor(Math.random() * 1000) + 1;
        resultado.textContent = `🎉 Número Sorteado: ${numero}`;
    }, 2000);
    document.getElementById("grupoCem").style.display = "none";
    document.getElementById("grupoDez").style.display = "none";
}
function voltarModoNumero () {
    document.getElementById("grupoDez").style.display = "block";
    document.getElementById("grupoCem").style.display = "block";
    document.getElementById("grupoMil").style.display = "block";

    document.getElementById("numeroSorteado").textContent = "";
}
function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    if (nome == "") {
        alert("Digite um nome!");
        return
    }

    const existe = participantes.some(p => p.toLowerCase() === nome.toLowerCase());
    if (existe) {
        alert ("Esee nome ja foi cadastrado!");
        return
    }
    participantes.push(nome);
    document.getElementById("nome").value = "";
    document.getElementById("contadorParticipantes").textContent = `Participantes (${participantes.length})`;
}
function atualizarLista() {
    const lista = document.getElementById("listaParticipantes");
    lista.innerHTML = "";
    participantes.forEach(p => {
        const item = document.createElement("p");
        item.textContent = p;
        lista.appendChild(item);
    })
}
function verParticipantes() {
    atualizarLista();
    document.getElementById("modal").style.display = "flex";
}
function fecharModal() {
    document.getElementById("modal").style.display = "none";
}
function sortear(){
    if (participantes.length === 0) {
        alert ("Nenhum participantes cadastrado!");
        return;
    }

    const indice = Math.floor(Math.random() * participantes.length);
    const vencedor = participantes[indice];

    document.getElementById("vencedor").textContent = `🎉 Vencedor: ${vencedor}`;

    participantes = [];
    document.getElementById("nome").value = "";
    document.getElementById("contadorParticipantes").textContent = "Participantes (0)";
}
function irParaRifa() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("rifa").style.display = "block";
}
function irParaNumero() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("numero").style.display = "block";
}
function voltarMenu() {
    document.getElementById("rifa").style.display = "none";
    document.getElementById("numero").style.display = "none";
    document.getElementById("menu").style.display = "block";
}