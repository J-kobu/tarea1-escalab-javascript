function calcularPrecioConIva() {
    const precio = parseFloat(document.querySelector('.precio').value)
    const IVA = (precio * 0.19)
    const precioConIva = document.querySelector('.precioConIVA').innerHTML = precio + IVA
    if (precio === '') {
        document.querySelector('.precio').innerHTML = ''
    }
    if (isNaN(precioConIva)) {
        document.querySelector('.precioConIVA').innerHTML = ''
    }
}