const EMOJIS = {
  Guerreiro: "⚔️",
  Mago: "🧙",
  Arqueiro: "🏹",
  Curandeiro: "💚"
};


function mensagemDeErro(campo) {
  const v = campo.validity;
  if (v.valueMissing) return "Este campo é obrigatório.";
  if (v.tooShort) return "Digite pelo menos " + campo.minLength + " caracteres.";
  if (v.tooLong) return "Digite no máximo " + campo.maxLength + " caracteres.";
  if (v.typeMismatch) return "Formato inválido. Ex.: nome@email.com";
  if (v.patternMismatch) return campo.title;
  if (v.rangeUnderflow) return "O valor mínimo é " + campo.min + ".";
  if (v.rangeOverflow) return "O valor máximo é " + campo.max + ".";
  return "Valor inválido.";
}

function validarCampo(campo) {
  const span = document.getElementById("erro-" + campo.id);
  if (!span) return;
  if (campo.checkValidity()) {
    span.textContent = "";
  } else {
    span.textContent = mensagemDeErro(campo);
  }
}


function ligarValidacao(form) {
  const campos = form.querySelectorAll("input, select, textarea");
  campos.forEach(function (campo) {

    campo.addEventListener("blur", function () {
      validarCampo(campo);
    });

    campo.addEventListener("input", function () {
      if (campo.checkValidity()) {
        validarCampo(campo);
      }
    });
  });
}


function capturarDados() {
  const heroi = {
    nome: document.getElementById("nome").value,
    classe: document.getElementById("classe").value,
    nivel: document.getElementById("nivel").value,
    email: document.getElementById("email").value,
    codigo: document.getElementById("codigo").value,
    senha: document.getElementById("senha").value,
    cor: document.getElementById("cor").value
  };
  return heroi;
}


function atualizarDados() {
  const dados = capturarDados();

  document.getElementById("cardNome").textContent = dados.nome || "Nome do Herói";
  document.getElementById("cardClasse").textContent = dados.classe || "---";
  document.getElementById("cardNivel").textContent = dados.nivel || "---";
  document.getElementById("cardCor").textContent = dados.cor;
  document.getElementById("cardEmoji").textContent = EMOJIS[dados.classe] || "❓";
  document.getElementById("cardHeroi").style.borderColor = dados.cor;
}


function criarHeroi() {
  const form = document.getElementById("formHeroi");
  const mensagem = document.getElementById("mensagemCriado");

  if (form.checkValidity()) {
    atualizarDados();
    mensagem.textContent = "Herói criado com sucesso!";
  } else {
    mensagem.textContent = "";
    form.reportValidity(); // mostra qual campo precisa ser corrigido
  }
}



function salvarHeroi() {
  const dados = capturarDados();
  delete dados.senha;
  localStorage.setItem("heroi", JSON.stringify(dados));
}


function proximaEtapa() {
  const form = document.getElementById("formHeroi");

  if (form.checkValidity()) {
    salvarHeroi();
    window.location.href = "detalhes.html";
  } else {
    form.reportValidity(); //
  }
}

function iniciarPaginaHeroi() {
  const form = document.getElementById("formHeroi");

  ligarValidacao(form);


  document.getElementById("nome").addEventListener("input", atualizarDados);


  document.getElementById("classe").addEventListener("change", atualizarDados);


  document.getElementById("nivel").addEventListener("input", atualizarDados);
  document.getElementById("cor").addEventListener("input", atualizarDados);


  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    criarHeroi();
  });


  document.getElementById("btnProxima").addEventListener("click", proximaEtapa);
}


function mostrarDadosPrimeiraPagina() {
  const salvo = localStorage.getItem("heroi");

  if (!salvo) {

    window.location.href = "index.html";
    return;
  }

  const heroi = JSON.parse(salvo);
  document.getElementById("detNome").textContent = heroi.nome;
  document.getElementById("detClasse").textContent = heroi.classe;
  document.getElementById("detEmoji").textContent = EMOJIS[heroi.classe] || "❓";
}


function formatarData(data) {
  const partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}


function mostrarResumo() {
  document.getElementById("resArma").textContent = document.getElementById("arma").value;
  document.getElementById("resVida").textContent = document.getElementById("vida").value;
  document.getElementById("resMana").textContent = document.getElementById("mana").value;
  document.getElementById("resData").textContent = formatarData(document.getElementById("data").value);
  document.getElementById("resHistoria").textContent = document.getElementById("historia").value;
  document.getElementById("resumo").hidden = false;
}

function finalizarPersonagem() {
  const form = document.getElementById("formDetalhes");

  if (form.checkValidity()) {
    mostrarResumo();
  } else {
    document.getElementById("resumo").hidden = true;
    form.reportValidity();
  }
}

function iniciarPaginaDetalhes() {
  const form = document.getElementById("formDetalhes");

  mostrarDadosPrimeiraPagina();
  ligarValidacao(form);


  document.getElementById("btnVoltar").addEventListener("click", function () {
    window.location.href = "index.html";
  });


  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    finalizarPersonagem();
  });
}


if (document.getElementById("formHeroi")) {
  iniciarPaginaHeroi();
}

if (document.getElementById("formDetalhes")) {
  iniciarPaginaDetalhes();
}
