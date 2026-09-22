function pegarDados(){
    return{
       // return para ja transformar em obj
        nome: document.getElementById("heroi_nome").value,
        classe: document.getElementById("select_heroi").value,
        cor: document.getElementById("select_cor").value
    };
}

function atualizar(){
    //atualiza as informacoes direto no VISUAL 
    const dados = pegarDados();
    document.getElementById("card_nome").innerText = dados.nome;
    document.getElementById("card").style.backgroundColor = dados.cor;
    document.getElementById("card_icone").src = "https://img.icons8.com/color/96/" + dados.classe + ".png";
}

function salvar(){
    const dados = pegarDados();
    //transforma em obj em JSON
    document.getElementById("dado_json").innerText = JSON.stringify(dados);
}

atualizar();