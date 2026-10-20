// --- Parte 6: Objeto JavaScript ---
function capturarDados() {
    return {
        nome: document.getElementById('nomeHeroi') ? document.getElementById('nomeHeroi').value : "",
        classe: document.getElementById('classeHeroi') ? document.getElementById('classeHeroi').value : "",
        nivel: document.getElementById('nivelHeroi') ? document.getElementById('nivelHeroi').value : "",
        cor: document.getElementById('corCard') ? document.getElementById('corCard').value : "#3a86ff"
    };
}

// --- Parte 5: Manipulação da DOM no Card ---
function atualizarDados() {
    const dados = capturarDados();
    const cardNome = document.getElementById('cardNome');
    const cardClasse = document.getElementById('cardClasse');
    const cardNivel = document.getElementById('cardNivel');
    const heroCard = document.getElementById('heroCard');
    const avatar = document.getElementById('avatarCard');

    if (cardNome) cardNome.innerText = dados.nome.trim() === "" ? "Nome do Herói" : dados.nome;
    if (cardClasse) cardClasse.innerText = dados.classe || "Classe Desconhecida";
    if (cardNivel) cardNivel.innerText = dados.nivel || "1";
    if (heroCard) heroCard.style.backgroundColor = dados.cor;

    if (avatar) {
        if (dados.classe === 'Guerreiro') avatar.innerText = '⚔️';
        else if (dados.classe === 'Mago') avatar.innerText = '🔮';
        else if (dados.classe === 'Arqueiro') avatar.innerText = '🏹';
        else if (dados.classe === 'Curandeiro') avatar.innerText = '✨';
        else avatar.innerText = '❓';
    }
}

// --- Parte 9: Organização em Eventos ---
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // LOGICA DA PÁGINA 1 (index.html)
    // ==========================================
    const formIndex = document.getElementById('formIndex');
    if (formIndex) {
        const nomeInput = document.getElementById('nomeHeroi');
        const classeInput = document.getElementById('classeHeroi');
        const codigoInput = document.getElementById('codigoHeroi');
        const corInput = document.getElementById('corCard');
        const nivelInput = document.getElementById('nivelHeroi');
        const btnProxima = document.getElementById('btnProxima');
        const erroNome = document.getElementById('erroNome');

        // Evento 1: input (Parte 4 - item 13)
        nomeInput.addEventListener('input', () => {
            atualizarDados();
            erroNome.innerText = ""; // Limpa erro ao digitar
        });

        // Evento 2: change (Parte 4 - item 14)
        classeInput.addEventListener('change', atualizarDados);
        
        corInput.addEventListener('change', atualizarDados);
        nivelInput.addEventListener('input', atualizarDados);

        // Mensagem de erro customizada (Parte 2 - item 8)
        nomeInput.addEventListener('invalid', function(e) {
            e.preventDefault();
            erroNome.innerText = "⚠️ O nome deve conter entre 3 e 20 caracteres.";
        });

        // Evento 3: blur (Parte 4 - item 15)
        codigoInput.addEventListener('blur', function() {
            if (!this.checkValidity()) {
                this.reportValidity(); // Mostra balão nativo
            }
        });

        // Validação e Navegação (Parte 7)
        btnProxima.addEventListener('click', function() {
            // Parte 3 - item 11 e 12
            if (formIndex.checkValidity()) {
                const dados = capturarDados();
                // Desafio: Guardar dados para a página 2 (Parte 8 - item 23)
                localStorage.setItem('heroiNome', dados.nome);
                localStorage.setItem('heroiClasse', dados.classe);
                
                window.location.href = 'detalhes.html';
            } else {
                formIndex.reportValidity();
            }
        });
        
        atualizarDados(); // Init
    }

    // ==========================================
    // LOGICA DA PÁGINA 2 (detalhes.html)
    // ==========================================
    const formDetalhes = document.getElementById('formDetalhes');
    if (formDetalhes) {
        
        // Recuperar dados do Desafio (Parte 8 - item 23)
        const nomeSalvo = localStorage.getItem('heroiNome');
        const classeSalva = localStorage.getItem('heroiClasse');
        
        if (nomeSalvo) document.getElementById('nomeHeroiDisplay').innerText = nomeSalvo;
        if (classeSalva) document.getElementById('classeHeroiDisplay').innerText = classeSalva;

        const btnVoltar = document.getElementById('btnVoltar');
        const btnFinalizar = document.getElementById('btnFinalizar');

        // Navegação Voltar (Parte 8 - item 20)
        btnVoltar.addEventListener('click', function() {
            window.location.href = 'index.html';
        });

        // Finalizar Personagem (Parte 8 - item 21)
        btnFinalizar.addEventListener('click', function() {
            if (formDetalhes.checkValidity()) {
                
                // Mostrar resumo na própria página (Parte 8 - item 22)
                document.getElementById('resumoArma').innerText = document.getElementById('armaPrincipal').value;
                document.getElementById('resumoVida').innerText = document.getElementById('vidaHeroi').value;
                document.getElementById('resumoMana').innerText = document.getElementById('manaHeroi').value;
                
                // Formatar Data
                const dataRaw = document.getElementById('dataCriacao').value;
                const [ano, mes, dia] = dataRaw.split('-');
                document.getElementById('resumoData').innerText = `${dia}/${mes}/${ano}`;
                
                document.getElementById('resumoHistoria').innerText = document.getElementById('historiaHeroi').value;
                
                // Exibir div
                document.getElementById('resumoFinal').style.display = 'block';
                
            } else {
                formDetalhes.reportValidity();
            }
        });
    }
});
