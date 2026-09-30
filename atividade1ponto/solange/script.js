const input = document.getElementById('pokemon-input');
const searchBtn = document.getElementById('search-btn');
const card = document.getElementById('pokemon-card');
const errorMsg = document.getElementById('error-msg');

const pokeName = document.getElementById('poke-name');
const pokeId = document.getElementById('poke-id');
const pokeImg = document.getElementById('poke-img');
const pokeTypes = document.getElementById('poke-types');
const pokeStats = document.getElementById('poke-stats');

// Passo 1: Requisição async/await na PokéAPI
async function fetchPokemon(query) {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return;

  try {
    errorMsg.style.display = 'none';
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${cleanQuery}`);

    if (!response.ok) throw new Error('Não encontrado');

    const data = await response.json();
    renderPokemonCard(data);
  } catch (err) {
    card.style.display = 'none';
    errorMsg.style.display = 'block';
  }
}

// Passos 2, 3 e 4: Extração, Mapeamento e Injeção no DOM
function renderPokemonCard(data) {
  // Extrair dados básicos
  pokeName.textContent = data.name;
  pokeId.textContent = `#${data.id.toString().padStart(3, '0')}`;
  pokeImg.src = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;

  // Mapear Badges de Tipos com map().join('')
  const typesHTML = data.types
    .map(t => `<span class="badge ${t.type.name}">${t.type.name}</span>`)
    .join('');
  
  pokeTypes.innerHTML = typesHTML;

  // Bônus: Mapear Stats com map().join('')
  const statsHTML = data.stats
    .map(s => {
      const percentage = Math.min((s.base_stat / 150) * 100, 100);
      return `
        <div class="stat-row">
          <div class="stat-info">
            <span>${s.stat.name}</span>
            <span>${s.base_stat}</span>
          </div>
          <div class="bar-bg">
            <div class="bar-fill" style="width: ${percentage}%"></div>
          </div>
        </div>
      `;
    })
    .join('');

  pokeStats.innerHTML = statsHTML;

  // Exibe o card formatado
  card.style.display = 'block';
}

// Eventos de Busca (Clique e Tecla Enter)
searchBtn.addEventListener('click', () => fetchPokemon(input.value));
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') fetchPokemon(input.value);
});

// Carrega o Charizard como inicial ao abrir
fetchPokemon('charizard');