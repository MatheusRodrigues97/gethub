// função anonimais são funções que não tem nome 

const soma = function ( x, y){
    const resultado = x + y

    if (resultado>=7){
        Aluno = 'Aluno aprovado Nota'
        return Aluno 
    }
    return 'Aluno reprovado'
}

const ImprimirREsultado = function (a , b , operacao= soma){
    console.log(operacao(a,b))
}

ImprimirREsultado( 6, 7)
ImprimirREsultado(3, 5, soma)
ImprimirREsultado( 3, 4 ,(x ,y) => x * y, console.log ('Erro'))