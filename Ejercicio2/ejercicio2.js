

function obtenerPocision() {
    const letra = document.querySelector('.letra').value
    const abecedario = 'abcdefghijklmnñopqrstuvwxyz'
    const posicion = abecedario.indexOf(letra) + 1
    if (letra === '') {
        document.querySelector('.letra').innerHTML = '';
    }
    return document.querySelector('.posicion').innerHTML = posicion
}