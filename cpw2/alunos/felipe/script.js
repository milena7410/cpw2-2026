const data_id = document.getElementById('data_id');
const PlacaMerco = document.getElementById('placa_merco')
const Senha = document.getElementById('senha')
const mensagemErro = document.getElementById('mensagemErro');
const mensagemErroPlaca = document.getElementById('mensagemErroPlaca');
const mensagemErroSenha = document.getElementById('mensagemErroSenha');
const formulario = document.getElementById('meuFormulario');

// PARTE 1 - Verifica o padrão em tempo real enquanto o usuário digita
data_id.addEventListener('input', () => {
  //.patternMismatch retorna TRUE se o texto digitado NÃO estiver de acordo com o padrão
  if (data_id.validity.patternMismatch) {
    mensagemErro.style.display = 'block';
    data_id.style.borderColor = 'red';
  } else {
    mensagemErro.style.display = 'none';
    data_id.style.borderColor = 'green';
  }
});

// Impede o envio do formulário caso o padrão não seja obedecido
formulario.addEventListener('submit', (evento) => {
  if (!data_id.validity.valid) {
    evento.preventDefault(); // Bloqueia o envio do form
    alert('Por favor, corrija os erros antes de enviar.');
  }
});

// PARTE 2 Verifica o padrão em tempo real enquanto o usuário digita
PlacaMerco.addEventListener('input', () => {
  //.patternMismatch retorna TRUE se o texto digitado NÃO estiver de acordo com o padrão
  if (PlacaMerco.validity.patternMismatch) {
    mensagemErroPlaca.style.display = 'block';
    PlacaMerco.style.borderColor = 'red';
  } else {
    mensagemErroPlaca.style.display = 'none';
     PlacaMerco.style.borderColor = 'green';
  }
});

// Impede o envio do formulário caso o padrão não seja obedecido
  formulario.addEventListener('submit', (evento) => {
  if (!PlacaMerco.validity.valid) {
    evento.preventDefault(); // Bloqueia o envio do form
    alert('Por favor, corrija os erros antes de enviar.');
  }
});

// PARTE 3 Verifica o padrão em tempo real enquanto o usuário digita
Senha.addEventListener('input', () => {
  //.patternMismatch retorna TRUE se o texto digitado NÃO estiver de acordo com o padrão
  if (Senha.validity.patternMismatch) {
    mensagemErroSenha.style.display = 'block';
    Senha.style.borderColor = 'red';
  } else {
    mensagemErroSenha.style.display = 'none';
     Senha.style.borderColor = 'green';
  }
});

// Impede o envio do formulário caso o padrão não seja obedecido
  formulario.addEventListener('submit', (evento) => {
  if (!Senha.validity.valid) {
    evento.preventDefault(); // Bloqueia o envio do form
    alert('Por favor, corrija os erros antes de enviar.');
  }
});