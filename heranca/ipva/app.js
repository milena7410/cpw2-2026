// Importa o prompt-sync para ler dados no terminal
const prompt = require('prompt-sync')();
// 1. Classe Pai
class Veiculo {
  constructor(modelo, preco) {
    this.modelo = modelo;
    this.preco = parseFloat(preco); // Converte o texto digitado para número
  }
  calcularIPVA() {
    return 0;
  }
}

class Carro extends Veiculo {
  calcularIPVA() {
    return this.preco * 0.04;
  }
}

class Moto extends Veiculo {
  calcularIPVA() {
    return this.preco * 0.02;
  }
}
console.log("=== CALCULADORA DE IPVA ===");
const modelo = prompt("Digite o modelo do veículo: ");
const tipo = prompt("Digite o tipo (1 - Carro ||| 2 - Moto): ");
const preco = prompt("Digite o preço do veículo (R$): ");

let veiculo;

// Instancia a classe certa dependendo da escolha
if (tipo === '1') {
  veiculo = new Carro(modelo, preco);
} else {
  veiculo = new Moto(modelo, preco);
}

const ipva = veiculo.calcularIPVA();
console.log(`\nVeículo: ${veiculo.modelo}`);
console.log(`Valor do IPVA: R$ ${ipva.toFixed(2)}`);