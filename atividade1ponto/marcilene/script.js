async function buscarPokemon(){

    const valor = document.getElementById("pokemonInput").value.toLowerCase();
    const card = document.getElementById("card");

    const cores = {
        fire:"#F08030",
        water:"#6890F0",
        grass:"#78C850",
        electric:"#F8D030",
        poison:"#A040A0",
        flying:"#A890F0",
        bug:"#A8B820",
        normal:"#A8A878",
        psychic:"#F85888",
        ice:"#98D8D8",
        fighting:"#C03028",
        ground:"#E0C068",
        rock:"#B8A038",
        ghost:"#705898",
        dragon:"#7038F8",
        fairy:"#EE99AC",
        steel:"#B8B8D0",
        dark:"#705848"
    };

    try{

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);

        if(!resposta.ok){
            throw new Error();
        }

        const pokemon = await resposta.json();

        const tipos = pokemon.types
            .map(t => `
                <span class="badge" style="background:${cores[t.type.name] || "#60A5FA"}">
                    ${t.type.name}
                </span>
            `)
            .join("");

        const stats = pokemon.stats
            .map(s => `
                <div class="stat">
                    <span>${s.stat.name}</span>: ${s.base_stat}
                </div>
            `)
            .join("");

        card.innerHTML = `
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">

            <h2>${pokemon.name}</h2>
            <p><strong>#${pokemon.id}</strong></p>

            <div class="badges">
                ${tipos}
            </div>

            <div class="stats">
                ${stats}
            </div>
        `;

    }catch{
        card.innerHTML = `
            <h2>Pokémon não encontrado</h2>
            <p>Tente outro nome ou ID.</p>
        `;
    }
}