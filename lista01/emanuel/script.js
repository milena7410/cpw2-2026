document.addEventListener("DOMContentLoaded", () => {
  const formEtapa1 = document.getElementById("form-heroi");
  const formEtapa2 = document.getElementById("form-detalhes");

  if (formEtapa1) {
    const inputNome = document.getElementById("nome");
    const selectClasse = document.getElementById("classe");
    const inputNivel = document.getElementById("nivel");
    const inputCor = document.getElementById("cor");
    const inputCodigo = document.getElementById("codigo");
    const msgErro = document.getElementById("mensagem-erro");
    const imagemHeroi = document.getElementById("card-imagem");
    const cardHeroi = document.getElementById("card-heroi");
    const cardHeader = document.getElementById("card-header");

    function capturarDados() {
      return {
        nome: inputNome.value,
        classe: selectClasse.value,
        nivel: inputNivel.value,
        email: document.getElementById("email").value,
        codigo: inputCodigo.value,
        cor: inputCor.value
      };
    }

    function atualizarDados() {
      const classeSelecionada = selectClasse.value || "wizard";
      const nomeClasse = selectClasse.options[selectClasse.selectedIndex]?.text || "Classe";
      const corSelecionada = inputCor.value;

      document.getElementById("card-nome").textContent = inputNome.value || "Nome do Herói";
      document.getElementById("card-classe").textContent = nomeClasse;
      document.getElementById("card-nivel").textContent = inputNivel.value || "1";

      cardHeroi.style.backgroundColor = corSelecionada;
      cardHeader.style.backgroundColor = corSelecionada;
      cardHeroi.style.borderColor = corSelecionada;

      imagemHeroi.src = "https://img.icons8.com/color/96/" + classeSelecionada + ".png";
    }

    inputNome.addEventListener("input", atualizarDados);
    selectClasse.addEventListener("change", atualizarDados);
    inputNivel.addEventListener("input", atualizarDados);
    inputCor.addEventListener("input", atualizarDados);
    inputCor.addEventListener("change", atualizarDados);

    atualizarDados();

    inputCodigo.addEventListener("blur", (event) => {
      if (!event.target.checkValidity()) {
        msgErro.textContent = "Atenção: O código deve estar no formato ABC-123.";
      } else {
        msgErro.textContent = "";
      }
    });

    formEtapa1.addEventListener("submit", (e) => {
      e.preventDefault(); 

      if (formEtapa1.checkValidity()) {
        const objetoHeroi = capturarDados();

        localStorage.setItem("heroiEtapa1", JSON.stringify(objetoHeroi));

        window.location.href = "index2.html";
      } else {
        msgErro.textContent = "Preencha todos os campos corretamente antes de avançar.";
        formEtapa1.reportValidity();
      }
    });
  }


  if (formEtapa2) {
    const btnVoltar = document.getElementById("btn-voltar");
    const msgErro2 = document.getElementById("mensagem-erro-etapa2");
    const resumoContainer = document.getElementById("secao-resumo");
    const conteudoResumo = document.getElementById("conteudo-resumo");

    const jsonSalvo = localStorage.getItem("heroiEtapa1");
    const dadosEtapa1 = jsonSalvo ? JSON.parse(jsonSalvo) : null;

    if (dadosEtapa1) {
      const classeResumo = dadosEtapa1.classe || "wizard";
      const nomeClasseResumo = dadosEtapa1.classe === "sword" ? "Guerreiro" :
        dadosEtapa1.classe === "wizard" ? "Mago" :
        dadosEtapa1.classe === "hunter" ? "Arqueiro" :
        dadosEtapa1.classe === "heal" ? "Curandeiro" : "Classe";
      const resumoCabecalhoMini = document.querySelector(".resumo-cabecalho-mini");

      document.getElementById("resumo-nome-etapa1").textContent = dadosEtapa1.nome;
      document.getElementById("resumo-classe-etapa1").textContent = nomeClasseResumo;
      document.getElementById("resumo-icone-etapa1").src = "https://img.icons8.com/color/96/" + classeResumo + ".png";

      if (resumoCabecalhoMini && dadosEtapa1.cor) {
        resumoCabecalhoMini.style.border = "3px solid " + dadosEtapa1.cor;
        resumoCabecalhoMini.style.borderRadius = "8px";
        resumoCabecalhoMini.style.padding = "8px 12px";
      }
    }

    btnVoltar.addEventListener("click", () => {
      window.location.href = "index.html";
    });

    formEtapa2.addEventListener("submit", (e) => {
      e.preventDefault();

      if (formEtapa2.checkValidity()) {
        msgErro2.textContent = "";

        const arma = document.getElementById("arma").value;
        const vida = document.getElementById("vida").value;
        const mana = document.getElementById("mana").value;
        const dataCriacao = document.getElementById("dataCriacao").value;
        const historia = document.getElementById("historia").value;

        const classeFinal = dadosEtapa1 ? dadosEtapa1.classe : "wizard";

        conteudoResumo.innerHTML = `
          <div class="resumo-cabecalho">
            <img class="resumo-icone" src="https://img.icons8.com/color/96/${classeFinal}.png" alt="Ícone da classe do herói" style="border: 4px solid ${dadosEtapa1?.cor || '#3b82f6'}; border-radius: 12px;">
            <div class="resumo-texto">
              <p><strong>Nome:</strong> ${dadosEtapa1 ? dadosEtapa1.nome : "N/A"}</p>
              <p><strong>Classe:</strong> ${dadosEtapa1 ? (dadosEtapa1.classe === "sword" ? "Guerreiro" : dadosEtapa1.classe === "wizard" ? "Mago" : dadosEtapa1.classe === "hunter" ? "Arqueiro" : dadosEtapa1.classe === "heal" ? "Curandeiro" : "Classe") : "N/A"}</p>
              <p><strong>Arma:</strong> ${arma}</p>
              <p><strong>Vida:</strong> ${vida} HP</p>
              <p><strong>Mana:</strong> ${mana} MP</p>
              <p><strong>Data de Criação:</strong> ${dataCriacao}</p>
              <p><strong>História:</strong> ${historia}</p>
            </div>
          </div>
        `;

        resumoContainer.classList.remove("hidden");
      } else {
        msgErro2.textContent = "Por favor, corrija os erros na segunda etapa antes de finalizar.";
        formEtapa2.reportValidity();
      }
    });
  }
});