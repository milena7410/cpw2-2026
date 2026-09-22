const campoCpf = document.getElementById('cpf');
const mensagemErro = document.getElementById('mensagemErro');
const formulario = document.getElementById('meuFormulario');

// Verifica o padrão em tempo real enquanto o usuário digita
campoCpf.addEventListener('input', () => {
  //.patternMismatch retorna TRUE se o texto digitado NÃO estiver de acordo com o padrão
  if (campoCpf.validity.patternMismatch) {
    mensagemErro.style.display = 'block';
    campoCpf.style.borderColor = 'red';
  } else {
    mensagemErro.style.display = 'none';
     campoCpf.style.borderColor = 'green';
  }
});

// Impede o envio do formulário caso o padrão não seja obedecido
  formulario.addEventListener('submit', (evento) => {
  if (!campoCpf.validity.valid) {
    evento.preventDefault(); // Bloqueia o envio do form
    alert('Por favor, corrija os erros antes de enviar.');
  }
});