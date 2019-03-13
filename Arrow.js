let dobro= function (a) {
    return 2*a
}

// arrow

dobro = (a) => { return 2*a}

dobro = a => 2*a // return implicito

console.log( dobro(Math.PI))

//-------------------------//

let ola = function (){
    return 'Ola'
}

ola = () => {return 'ola'}

ola =_ => 'ola'

console.log (ola ())