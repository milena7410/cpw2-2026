// 1. Importar a biblioteca 
 const prompt = require('prompt-sync')(); 
 
 // 2. Solicitar dados ao usuário 
 const nome = prompt('Digite o nome do pet: '); 
 const raca = prompt('Digite a raça: '); 
 
 // 3. Exibir resultado no terminal 
 console.log(`Pet Cadastrado: ${nome} (${raca})`);
