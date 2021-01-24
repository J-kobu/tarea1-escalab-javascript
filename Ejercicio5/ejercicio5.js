function Persona(nombreCompleto, edad) {
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function() {
    var nombreCompletoEdad = this.nombreCompleto + ' ' + this.edad;
    localStorage.setItem('Nombre completo y edad', nombreCompletoEdad);
}

Persona.prototype.GuardarEnSessionStorage = function() {
    var nombreCompletoEdad = this.nombreCompleto + ' ' + this.edad;
    sessionStorage.setItem('Nombre completo y edad', nombreCompletoEdad);
} 

const persona1 = new Persona('Jacob Aguilar', 28);

persona1.guardarEnLocalStorage();
persona1.GuardarEnSessionStorage();