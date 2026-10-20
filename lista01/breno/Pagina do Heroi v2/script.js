const formInputs = document.querySelector(".formHeroi")

const selectClasse = document.querySelector("select[name='classe'")

const heroCode = document.getElementById("codigoHeroi")

const cardClasse = document.querySelector(".headerCard")
const cardImg = document.querySelector(".imagemCard")
const cardName = document.querySelector(".nomeCard")


const numeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 999) +1
    return String(numero).padStart(3,'0')
}  

selectClasse.addEventListener("change", () => {
    
    const classeSelecionada = selectClasse.value

    if(!classeSelecionada) return;

    let prefixo = ""

    switch (classeSelecionada.toLowerCase()) {
        case "healer":
            prefixo = "HLR"
            break
        case "mago":
            prefixo = "MGA"
            break
        case "cavaleiro":
            prefixo = "WAR"
            break
        case "arqueiro":
            prefixo = "BOW"
            break
        default:
            prefixo = "CHR"
    }

    const numero = numeroAleatorio()

    heroCode.value = `${prefixo}-${numero}`

    cardClasse.textContent = classeSelecionada
})

formInputs.addEventListener("submit", (event) =>{
    event.preventDefault()

    if(!formInputs.reportValidity()){
        event.preventDefault()
        alert("Formulario inválido! Verifique os erros.")
        return
    }

    const dadosForm = Object.fromEntries(new FormData(formInputs))

    window.location.href = "descricao.html"
})

const nomeHeroi = document.querySelector("#nome")
nomeHeroi.addEventListener("input", (event) =>{
    cardName.textContent = event.target.value || "Nome do Herói"

})


