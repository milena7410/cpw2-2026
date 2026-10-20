const formDesc = document.querySelector(".formHeroi")
const cardHeroi = document.querySelector(".cardHeroiDesc")

const btnHome = document.querySelector("#btnHome")
const btnSeguir = document.querySelector("#btnSeguir")

const finalizar = () => {
    window.location.href = "index.html"
}

btnHome.addEventListener("click", finalizar)


formDesc.addEventListener("submit", (event) => {
    event.preventDefault()

    if(!formDesc.reportValidity()) {
        preventDefault()
        alert("Formulário Inválido! Verifique os erros!")
        return
    }

    const dadosForm = Object.fromEntries(new FormData(formDesc))

    console.log(JSON.stringify(dadosForm))

    cardHeroi.innerHTML = `
        <h2>Arma: ${dadosForm.arma}</h2>
        <h2>Vida: ${dadosForm.vida}</h2>
        <h2>Mana: ${dadosForm.mana}</h2>
        <h2>Descricao: ${dadosForm.descricao}</h2>
        `

})