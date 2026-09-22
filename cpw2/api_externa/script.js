async function buscar(){
//capturar valor q o usuario digitou
const id = document.getElementById("id_personagem").value

//concatenar com url externa 
const resposta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
//conseguir ler
const dados = await resposta.json()

//colocando na tela pro usuario 
document.getElementById("resultado").innerHTML=
`
    <h1>${dados.name}</h1>
    <img src="${dados.image}" width="150px">

`;

}