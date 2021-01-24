
function determinarParImpar() {
    let num = document.querySelector('.txtNumero').value
    var parImpar = (num%2 === 0)? document.querySelector('.msjParImpar').innerHTML = 'El número '+ num + ' es PAR' : document.querySelector('.msjParImpar').innerHTML = 'El número '+ num + ' es IMPAR'
    if (num === "") { 
        parImpar = document.querySelector('.msjParImpar').innerHTML = ''
    }
    return parImpar
} 