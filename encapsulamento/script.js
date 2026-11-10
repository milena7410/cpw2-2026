class Pessoa {
  nome;
  #sobrenome  // Não tem valor inicial! Começa como undefined.

  constructor(nome, sobrenomeInicial) {
    this.nome = nome;
    this.#sobrenome = sobrenomeInicial; // Define o valor aqui no constructor
  }

  get nomeCompleto() {
    return `${this.nome} ${this.#sobrenome}`;
  }
}

const p1 = new Pessoa("Ana", "Silva");
//console.log(p1.nomeCompleto); 


console.log(p1.#sobrenome);