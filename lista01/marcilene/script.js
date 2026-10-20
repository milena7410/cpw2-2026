// =========================
// INDEX.HTML
// =========================

function capturarDados() {
    const nome = document.getElementById("nome");
    const classe = document.getElementById("classe");
    const nivel = document.getElementById("nivel");
    const email = document.getElementById("email");
    const codigo = document.getElementById("codigo");
    const senha = document.getElementById("senha");
    const cor = document.getElementById("cor");

    return {
        nome: nome.value,
        classe: classe.value,
        nivel: nivel.value,
        email: email.value,
        codigo: codigo.value,
        senha: senha.value,
        cor: cor.value
    };
}

function atualizarDados() {
    const nome = document.getElementById("nome").value;
    const classe = document.getElementById("classe").value;
    const nivel = document.getElementById("nivel").value;
    const cor = document.getElementById("cor").value;

    document.getElementById("nomeCard").textContent = nome || "Nome do Herói";
    document.getElementById("classeCard").textContent = classe || "-";
    document.getElementById("nivelCard").textContent = nivel || "-";
    document.getElementById("cardHeroi").style.backgroundColor = cor;
}

function mostrarErro(campo, mensagem) {
    const erro = document.getElementById(campo);
    if (erro) {
        erro.textContent = mensagem;
    }
}

function limparErro(campo) {
    mostrarErro(campo, "");
}

function configurarIndex() {
    const form = document.getElementById("formHeroi");
    if (!form) return;

    const nome = document.getElementById("nome");
    const classe = document.getElementById("classe");
    const codigo = document.getElementById("codigo");
    const senha = document.getElementById("senha");

    // input: nome em tempo real
    nome.addEventListener("input", atualizarDados);

    // change: classe e cor em tempo real
    classe.addEventListener("change", atualizarDados);
    document.getElementById("cor").addEventListener("change", atualizarDados);

    // blur: validação personalizada
    codigo.addEventListener("blur", function () {
        if (!codigo.checkValidity()) {
            mostrarErro("erroCodigo", "Use o formato ABC-123.");
        } else {
            limparErro("erroCodigo");
        }
    });

    senha.addEventListener("blur", function () {
        if (!senha.checkValidity()) {
            mostrarErro("erroSenha", "A senha precisa ter 8 caracteres, maiúscula, minúscula e número.");
        } else {
            limparErro("erroSenha");
        }
    });

    nome.addEventListener("blur", function () {
        if (!nome.checkValidity()) {
            mostrarErro("erroNome", "O nome deve ter entre 3 e 20 caracteres.");
        } else {
            limparErro("erroNome");
        }
    });

    // submit: valida antes de avançar
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const dados = capturarDados();
        localStorage.setItem("heroi", JSON.stringify(dados));

        window.location.href = "detalhes.html";
    });

    atualizarDados();
}

// =========================
// DETALHES.HTML
// =========================

function configurarDetalhes() {
    const form = document.getElementById("formDetalhes");
    if (!form) return;

    const dados = JSON.parse(localStorage.getItem("heroi"));

    if (!dados) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("nomeHeroi").textContent = dados.nome;
    document.getElementById("classeHeroi").textContent = dados.classe;

    document.getElementById("resumoNome").textContent = dados.nome;
    document.getElementById("resumoClasse").textContent = dados.classe;

    // blur para mostrar mensagem personalizada da história
    document.getElementById("historia").addEventListener("blur", function () {
        if (!this.checkValidity()) {
            mostrarErro("erroHistoria", "A história precisa ter pelo menos 20 caracteres.");
        } else {
            limparErro("erroHistoria");
        }
    });

    // voltar
    document.getElementById("btnVoltar").addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // finalizar
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const arma = document.getElementById("arma").value;
        const vida = document.getElementById("vida").value;
        const mana = document.getElementById("mana").value;
        const data = document.getElementById("dataCriacao").value;
        const historia = document.getElementById("historia").value;

        document.getElementById("resumoArma").textContent = arma;
        document.getElementById("resumoVida").textContent = vida;
        document.getElementById("resumoMana").textContent = mana;
        document.getElementById("resumoData").textContent = data;
        document.getElementById("resumoHistoria").textContent = historia;
    });
}

configurarIndex();
configurarDetalhes();
