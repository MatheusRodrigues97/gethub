const pessoa = {
    saudacao: 'Bom dia',
    falar (){
        console.log (this.saudacao) // estou acessando o objeto dono dessa função o valor do seu atributo
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas : funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()


//----------------------------------------------------------------------------

const falar5 = {
    comprimento :'Ola  jovens Humanos, Sou Proto',
    falarProtho () {
            console.log(this.comprimento)
    }
}

falar5.falarProtho()

//--------------------------------------------------------------------------

function pessoa(){
    this.idade =0
    
    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

new pessoa 

function pessoa2(){
    this.idade =0
    
    const self=this

    setInterval(function (){
        self.idade++
        console.log(self.idade)
    },1000)
}

new pessoa2 