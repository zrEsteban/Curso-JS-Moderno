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

//Instanciando
const Pedro = new Cliente('Pedro',6000);
console.log(Pedro.tipoCliente());

console.log(Pedro);


Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Pedro.retiraSaldo(1000);
console.log(Pedro.nombreClienteSaldo());