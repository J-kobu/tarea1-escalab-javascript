function nuevoDado(nombre) {
    return function()　{
        return nombre + ' tiró un dado y salió ' + parseInt(Math.random() * (7 - 1) + 1);
    }
}

var dadoJulio = nuevoDado('julio');