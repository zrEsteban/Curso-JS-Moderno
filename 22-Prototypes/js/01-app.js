const cliente = {
    nombre : 'Esteban',
    saldo : 500
}

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre, saldo){
    this.bombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500); // Objeto dinámico y reutilizable

console.log(juan);
