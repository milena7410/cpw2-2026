

class Animal {
  constructor(nome) {
    this.nome = nome;
  }
}

class Cachorro extends Animal {
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
  latir() {
    console.log(`${this.nome} latiu: Au au!`);
  }
}


const dog = new Cachorro("Zoro") 
dog.latir(); 


