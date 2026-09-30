async function buscar() {

    let pokemon = document.getElementById("pokemon").value;

    let resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    let dados = await resposta.json();


    // Imagem oficial do Pokémon

    document.getElementById("imagem").src =
        dados.sprites.other["official-artwork"].front_default;


    // Nome

    document.getElementById("nome").innerHTML =
        dados.name;


    document.getElementById("id").innerHTML =
        "Nº " + dados.id;

    document.getElementById("tipos").innerHTML =
        "TIPO: " + dados.types.map(t => t.type.name).join(", ");

    document.getElementById("habilidades").innerHTML =
        "HABILIDADE: " +
        dados.abilities.map(h => h.ability.name).join(", ");



    document.getElementById("hp").innerHTML =
        "HP: " + dados.stats[0].base_stat;

    document.getElementById("ataque").innerHTML =
        "ATAQUE: " + dados.stats[1].base_stat;

    document.getElementById("defesa").innerHTML =
        "DEFESA: " + dados.stats[2].base_stat;
}