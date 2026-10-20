const dadosSalvos = sessionStorage.getItem('dadosHeroiEtapa1');
const infoResumo = document.getElementById('infoHeroiResumo');

if (dadosSalvos) {
    const heroi = JSON.parse(dadosSalvos);
    infoResumo.innerHTML = `<strong>Herói:</strong> ${heroi.nome} | <strong>Classe:</strong> ${heroi.classe}`;
} else {
    infoResumo.innerHTML = "Nenhum herói encontrado.";
}

document.getElementById('voltarBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('finalizarBtn').addEventListener('click', function() {
    const formDetalhes = document.getElementById('detalhesForm');

    if (formDetalhes.checkValidity()) {
        const arma = document.getElementById('armaSelect').value;
        const vida = document.getElementById('vidaInput').value;
        const mana = document.getElementById('manaInput').value;
        const dataCriacao = document.getElementById('dataInput').value;
        const historia = document.getElementById('historiaInput').value;

        const resumoDiv = document.getElementById('resumoFinal');
        const resTexto = document.getElementById('resTexto');

        resTexto.innerHTML = `
            <strong>Arma:</strong> ${arma}<br>
            <strong>Vida:</strong> ${vida}/100<br>
            <strong>Mana:</strong> ${mana}/100<br>
            <strong>Data:</strong> ${dataCriacao}<br>
            <strong>História:</strong> ${historia}
        `;
        
        resumoDiv.style.display = 'block';
    } else {
        formDetalhes.reportValidity();
    }
});