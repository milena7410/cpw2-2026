async function buscarPokemon() {
    const termo = document.getElementById('pokemonInput').value.toLowerCase().trim();
    const container = document.getElementById('pokedexContainer');

    if (!termo) {
        alert('Digite o nome ou ID de um Pokémon!');
        return;
    }

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${termo}`);
        
        if (!resposta.ok) {
            throw new Error('Pokémon não encontrado');
        }

        const pokemon = await resposta.json();

        const nome = pokemon.name;
        const id = pokemon.id;
        const sprite = pokemon.sprites.front_default;

        const tiposHTML = pokemon.types.map(item => {
            return `<span class="badge">${item.type.name}</span>`;
        }).join('');

        container.innerHTML = `
            <div class="card">
                <h2>#${id} - ${nome.toUpperCase()}</h2>
                <img src="${sprite}" alt="${nome}">
                <div class="types">
                    ${tiposHTML}
                </div>
            </div>
        `;

    } catch (error) {
        container.innerHTML = `<p style="color: red;">Ops! Pokémon não encontrado.</p>`;
    }
}