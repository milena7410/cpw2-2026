async function buscar(){
    //captura o id que o usuario digitar
    const codigo = document.getElementById('codigo').value

    //concatenar com a url - fetch
    const resposta = await fetch(`https://rickandmortyapi.com/api/character/${codigo}`)
    

    //mostro pro usuario
    document.getElementById('resultado').innerHTML=`
  
    <img src="https://http.cat/${codigo}" width="400">

    
    `
     
    
}