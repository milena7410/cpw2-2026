
function capturarDados() {
    var form = document.getElementById("form-heroi");
    if (!form) return null;

    var objetoHeroi = {
        nome: document.getElementById("nome").value,
        classe: document.getElementById("classe").value,
        nivel: document.getElementById("nivel").value,
        email: document.getElementById("email").value,
        codigo: document.getElementById("codigo").value
    };

    return objetoHeroi;
}


function atualizarDados() {
    var nomeVal = document.getElementById("nome").value;
    var classeVal = document.getElementById("classe").value;
    var nivelVal = document.getElementById("nivel").value;

    document.getElementById("card-nome").innerText = "Nome: " + (nomeVal || "-");
    document.getElementById("card-classe").innerText = "Classe: " + (classeVal || "-");
    document.getElementById("card-nivel").innerText = "Nível: " + (nivelVal || "-");


    var dados = capturarDados();
    document.getElementById("json-output").innerText = JSON.stringify(dados, null, 2);
}


document.addEventListener("DOMContentLoaded", function () {


    var formHeroi = document.getElementById("form-heroi");

    if (formHeroi) {

        document.getElementById("nome").addEventListener("input", function () {
            atualizarDados();
        });


        document.getElementById("classe").addEventListener("change", function () {
            atualizarDados();
        });


        document.getElementById("codigo").addEventListener("blur", function () {
            if (!this.checkValidity()) {
                this.reportValidity();
            }
        });


        document.getElementById("nivel").addEventListener("input", function () {
            atualizarDados();
        });

        document.getElementById("btn-proximo").addEventListener("click", function () {

            if (formHeroi.checkValidity()) {
                var heroi = capturarDados();

                localStorage.setItem("heroiTemp", JSON.stringify(heroi));
                window.location.href = "detalhes.html";
            } else {
                formHeroi.reportValidity();
            }
        });
    }

    var formDetalhes = document.getElementById("form-detalhes");

    if (formDetalhes) {

        var heroiSalvo = localStorage.getItem("heroiTemp");
        if (heroiSalvo) {
            var heroiObj = JSON.parse(heroiSalvo);
            document.getElementById("heroi-nome-display").innerText = heroiObj.nome;
            document.getElementById("heroi-classe-display").innerText = heroiObj.classe;
        }


        document.getElementById("btn-voltar").addEventListener("click", function () {
            window.location.href = "index.html";
        });

        document.getElementById("btn-finalizar").addEventListener("click", function () {
            if (formDetalhes.checkValidity()) {
                
                document.getElementById("resumo-arma").innerText = document.getElementById("arma").value;
                document.getElementById("resumo-vida").innerText = document.getElementById("vida").value;
                document.getElementById("resumo-mana").innerText = document.getElementById("mana").value;
                document.getElementById("resumo-data").innerText = document.getElementById("dataCriacao").value;
                document.getElementById("resumo-historia").innerText = document.getElementById("historia").value;

                document.getElementById("resumo-final").style.display = "block";
            } else {
                formDetalhes.reportValidity();
            }
        });
    }

});