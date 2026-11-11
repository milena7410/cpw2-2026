class Pet {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = parseInt(idade); 
  }

  getIdadeHumana() {
    return this.idade * 7; 
  }
}

class Cao extends Pet {
  emitirSom() {
    return "Au Au!";
  }
}

class Gato extends Pet {
  emitirSom() {
    return "Miau!";
  }
}

function cadastrarPet() {
  const tipo = document.getElementById('tipo').value;
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;

  let pet;

  if (tipo === 'cao') {
    pet = new Cao(nome, idade);
  } else {
    pet = new Gato(nome, idade);
  }

  document.getElementById('resultado').innerHTML = `
    <strong>Pet:</strong> ${pet.nome} <br>
    <strong>Som:</strong> ${pet.emitirSom()} <br>
    <strong>Idade Humana:</strong> ${pet.getIdadeHumana()} anos
  `;
}