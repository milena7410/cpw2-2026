function pegarDados() {
  return {
    nome: document.getElementById('inputNome').value,
    classe: document.getElementById('selectClasse').value,
    cor: document.getElementById('selectCor').value
  };
}

//atualiza os elementos visuais na tela
function atualizar() {
  const dados = pegarDados();
  document.getElementById('cardNome').innerText = dados.nome || 'Seu Nome';
  document.getElementById('card').style.backgroundColor = dados.cor;
  document.getElementById('cardIcone').src = "https://img.icons8.com/color/96/" + dados.classe + ".png";
}

//converte os dados do objeto para texto JSON!!!!
function salvar() {
  const dados = pegarDados();
  document.getElementById('outputJson').innerText = JSON.stringify(dados);
}

//executa ao carregar a página
atualizar();