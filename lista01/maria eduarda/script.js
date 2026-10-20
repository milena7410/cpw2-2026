const emojisClasse = {
    'Guerreiro': '⚔️',
    'Mago': '🔮',
    'Arqueiro': '🏹',
    'Curandeiro': '🌿'
};

function capturarDados() {
    const classe = document.getElementById('classeSelect').value;
    
    return {
        nome: document.getElementById('nomeInput').value.trim(),
        classe: classe,
        nivel: document.getElementById('nivelInput').value,
        email: document.getElementById('emailInput').value,
        codigo: document.getElementById('codigoInput').value,
        senha: document.getElementById('senhaInput').value,
        emoji: emojisClasse[classe] || '⚔️',
        cor: document.getElementById('corSelect').value
    };
}

function atualizarDados() {
    const dados = capturarDados();

    document.getElementById('cardNome').innerText = dados.nome !== "" ? dados.nome : "Herói";
    document.getElementById('cardNivel').innerText = `Nv. ${dados.nivel || 1}`;
    document.getElementById('cardClasse').innerText = dados.classe || "Guerreiro";
    document.getElementById('cardEmoji').innerText = dados.emoji;
    document.getElementById('meuCard').style.borderColor = dados.cor;
}

document.getElementById('nomeInput').addEventListener('input', atualizarDados);
document.getElementById('nivelInput').addEventListener('input', atualizarDados);
document.getElementById('classeSelect').addEventListener('change', atualizarDados);
document.getElementById('corSelect').addEventListener('change', atualizarDados);

document.getElementById('AvancarBtn').addEventListener('click', function() {
    const formulario = document.getElementById('heroForm');

    if (formulario.checkValidity()) {
        const dadosHeroi = capturarDados();
        sessionStorage.setItem('dadosHeroiEtapa1', JSON.stringify(dadosHeroi));
        window.location.href = 'detalhes.html';
    } else {
        formulario.reportValidity();
    }
});

atualizarDados();