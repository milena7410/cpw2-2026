async function buscar() {

    let pokemon = document.getElementById("pokemon").value;

    let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    let dados = await resposta.json();

    document.getElementById("imagem").src = dados.sprites.front_default;

    document.getElementById("nome").innerHTML = dados.name;

    document.getElementById("id").innerHTML = "ID: " + dados.id;

    document.getElementById("tipos").innerHTML =
        dados.types.map(t => t.type.name).join(", ");

    document.getElementById("habilidades").innerHTML =
        dados.abilities.map(h => h.ability.name).join(", ");

    document.getElementById("hp").innerHTML =
        "HP: " + dados.stats[0].base_stat;

    document.getElementById("ataque").innerHTML =
        "Ataque: " + dados.stats[1].base_stat;

    document.getElementById("defesa").innerHTML =
        "Defesa: " + dados.stats[2].base_stat;
}