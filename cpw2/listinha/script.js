function pegarDados(){
    return{
        nome: document.getElementById('nome_heroi').value,
        classe: document.getElementById('select_class').value,
        cor: document.getElementById('select_color').value
    };
}

function atualizar(){
    const dados = pegarDados();
    document.getElementById('cardNome').innerText = dados.nome || 'Seu Nome';
    document.getElementById('card').style.backgroundColor = dados.cor;
    document.getElementById('cardIcon').src = "https://img.icons8.com/color/96/" + dados.classe + ".png";
}

function salvar(){
    const dados = pegarDados();
    document.getElementById("dados_json").innerText = JSON.stringify(dados)
}

atualizar();