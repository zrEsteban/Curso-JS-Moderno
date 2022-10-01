// Declaracion de clases
class Cliente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }   
}

// instanciar clase
const esteban = new Cliente('Esteban',400);
console.log(esteban);

// Expresion de clase
const Cliente2 = class {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }   
}

const esteban2 = new Cliente2('Esteban 2', 400);
console.log(esteban2);