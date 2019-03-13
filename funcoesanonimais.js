const soma = function (x ,y){
    resultado = x + y 

        if (resultado>=10){

            return 'Tirou nota maxima ' &resultado
        }
    else {
        
    return 'NOta minima ' &resultado
}}

const imprimirResultado = function (a , b, operacao=soma){
    console.log(operacao(a,b))
}

imprimirResultado( 6, 5)