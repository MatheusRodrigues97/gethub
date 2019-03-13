function Carro (velocidadeMaxima =200, delta =5){
    //atributo privdado
    let velocidadeAtual =0

    //metodo publico, torna algo visifil para fora dda função
    this.acelrar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual+=delta
        }else
        {
            velocidadeAtual=velocidadeMaxima
        }
    }
    // metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }

}

const uno =  new Carro
uno.acelrar(10)
console.log(uno.getvelocidadeAtual())