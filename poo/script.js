//criando a classe 
class CartaoUsuario {
  constructor(nome, cargo, foto) {
    this.nome = nome;
    this.cargo = cargo;
    this.foto = foto;
  }

  //gera a estrutura HTML do cartão
  render() {
    return `
      <div class="card">
        <img src="${this.foto}" alt="Foto de ${this.nome}">
        <h3>${this.nome}</h3>
        <p>${this.cargo}</p>
      </div>
    `;
  }
}


//instanciando usuarios com o operador 'new'
const usuario1 = new CartaoUsuario(
  'Milena Alegre',
  'Desenvolvedora Web',
  './img1.webp'
);

const usuario2 = new CartaoUsuario(
  'Andre Silva',
  'Designer UI/UX',
  './img2.webp'
);


//add os cartões no DOM usando innerHTML
const container = document.getElementById('container-usuarios');
container.innerHTML = usuario1.render() + usuario2.render();

