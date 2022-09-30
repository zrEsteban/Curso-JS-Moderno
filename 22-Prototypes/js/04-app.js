function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Prototipo
Cliente.prototype.tipoCliente = function(){
    let tipo;

    if (this.saldo > 10000){
        tipo = 'Gold'
    } else if (this.saldo > 5000 ) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo;
    
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

/* Herencia */
function Persona(nombre,saldo, telefono){
    Cliente.call(this, nombre, saldo); // Hereda del constructor del cliente
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

/* Instanciar Objeto */
const Juan = new Persona('Juan',5000,123456789);
console.log(Juan.tipoCliente())

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(Juan.mostrarTelefono())