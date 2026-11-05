class Veiculos{
    constructor(marca, ano, cor){
        this.marca= marca,
        this.ano = ano,
        this.cor = cor
    }

    acelerar(){
        console.log("vrum.... acelerou!!!!");
        
    }
     freiar(){
        console.log("freiando...");
        
    }
}

const carro1 = new Veiculos(
    'Nissan',
    '2026',
    'Branco'
)

console.log(carro1.acelerar());
