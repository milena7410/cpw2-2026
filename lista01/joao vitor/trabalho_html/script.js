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
  const heroi = capturarDados();
  document.getElementById("cardNome").textContent = heroi.nome;
  document.getElementById("cardClasse").textContent = heroi.classe;
  document.getElementById("cardNivel").textContent = heroi.nivel;
  document.getElementById("card").style.backgroundColor = heroi.cor;
}

function validarNome() {
  const campoNome = document.getElementById("nome");
  const erroNome = document.getElementById("erro-nome");
  if (campoNome.checkValidity()) {
    erroNome.textContent = "";
  } else {
    erroNome.textContent = "O nome é obrigatório e deve ter de 3 a 20 caracteres.";
  }
}

function criarHeroi() {
  const formulario = document.getElementById("formHeroi");
  if (formulario.checkValidity()) {
    atualizarDados();
  } else {
    formulario.reportValidity();
  }
}

function salvarJSON() {
  const formulario = document.getElementById("formHeroi");
  if (formulario.checkValidity()) {
    const heroi = capturarDados();
    delete heroi.senha;
    document.getElementById("jsonSaida").textContent = JSON.stringify(heroi);
  } else {
    formulario.reportValidity();
  }
}

function proximaEtapa() {
  const formulario = document.getElementById("formHeroi");
  if (formulario.checkValidity()) {
    const heroi = capturarDados();
    // guarda nome e classe para usar na outra página
    sessionStorage.setItem("nome", heroi.nome);
    sessionStorage.setItem("classe", heroi.classe);
    window.location.href = "detalhes.html";
  } else {
    formulario.reportValidity();
  }
}

function mostrarDadosPrimeiraPagina() {
  document.getElementById("heroiNome").textContent = sessionStorage.getItem("nome");
  document.getElementById("heroiClasse").textContent = sessionStorage.getItem("classe");
}
function finalizarPersonagem() {
  const formulario = document.getElementById("formDetalhes");
  if (formulario.checkValidity()) {
    document.getElementById("resArma").textContent = document.getElementById("arma").value;
    document.getElementById("resVida").textContent = document.getElementById("vida").value;
    document.getElementById("resMana").textContent = document.getElementById("mana").value;
    document.getElementById("resData").textContent = document.getElementById("data").value;
    document.getElementById("resHistoria").textContent = document.getElementById("historia").value;
    document.getElementById("resumo").hidden = false;
  } else {
    formulario.reportValidity();
  }
}

if (document.getElementById("formHeroi")) {
  document.getElementById("nome").addEventListener("input", atualizarDados);
  document.getElementById("nome").addEventListener("blur", validarNome);
  document.getElementById("classe").addEventListener("change", atualizarDados);
  document.getElementById("nivel").addEventListener("input", atualizarDados);
  document.getElementById("cor").addEventListener("change", atualizarDados);
  document.getElementById("btnCriar").addEventListener("click", criarHeroi);
  document.getElementById("btnJson").addEventListener("click", salvarJSON);
  document.getElementById("btnProxima").addEventListener("click", proximaEtapa);
}

if (document.getElementById("formDetalhes")) {
  mostrarDadosPrimeiraPagina();
  document.getElementById("btnVoltar").addEventListener("click", function () {
    window.location.href = "index.html";
  });
  document.getElementById("btnFinalizar").addEventListener("click", finalizarPersonagem);
}
