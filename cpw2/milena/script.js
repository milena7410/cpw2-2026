function pegarDados(){
    return{
        nome: document.getElementById('nome_heroi').value,
        classe: document.getElementById('select_classe').value,
        cor: document.getElementById('select_cor').value
    };
}

function atualizar() {
    const dados = pegarDados();
    document.getElementById('cardNome').innerText = dados.nome || 'Seu nome';
    document.getElementById('card').style.backgroundColor = dados.cor;
    document.getElementById('cardIcone').src="https://img.icons8.com/color/96/" + dados.classe + ".png";
}

function salvar(){
    const dados = pegarDados();
    document.getElementById('dadosJson').innerText = JSON.stringify(dados)
}
atualizar()