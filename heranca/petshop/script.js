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
  gerarImg(){
    return "https://img.icons8.com/color/48/puppy.png"
  }
}

class Gato extends Pet {
  emitirSom() {
    return "Miau!";
  }
  gerarImg(){
    return "https://img.icons8.com/doodle/48/cat--v1.png"
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
    <img src="${pet.gerarImg()}">
      `;
}