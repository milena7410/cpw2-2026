async function buscar() {
    /*Captura o ID que o usuario digitar */
    const id = document.getElementById('id_personagem').value

    /*Contatenar com a URL - FETCH */
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    /*ler dados em json */
    const dados = await resposta.json();

    
    /*Mostra para o usuario */
    document.getElementById('resultado').innerHTML=`
    
    <h1>${dados.name}</h1>

    <img src="${dados.sprites.front_default}" width="150px" alt="${dados.name}">

    <h3><strong>Espécie:</strong> ${dados.species.name}</h3>
    <h3><strong>Peso:</strong> ${dados.weight}</h3>
    <h3><strong>Altura:</strong> ${dados.height}</h3>
    <h3><strong>Status Básico:</strong> ${dados.stats[0].base_stat}</h3>
    <h3><strong>Quantidade de Tipos:</strong> ${dados.types.length}</h3>
    
    `
}