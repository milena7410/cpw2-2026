const formHeroi = document.getElementById('formHeroi');
const mensagem = document.getElementById('mensagem');

formHeroi.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const nivel = document.getElementById('nivel').value;
    const cidade = document.getElementById('cidade').value;

    mensagem.innerHTML = `<p>Herói ${nome} (Código: ${codigo}) (Origem: ${cidade}) cadastrado com sucesso no Nível ${nivel}!</p>`;
});