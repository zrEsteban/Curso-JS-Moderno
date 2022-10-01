// Metodos 
// Declaracion de clases
class Cliente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }   

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    static bienvenida(){ /* No requieren una instancio, pertenece a la clase */
        return `Bienvenido al Cajero`;
    }
}

// instanciar clase
const esteban = new Cliente('Esteban',400);
console.log(esteban);
console.log(esteban.mostrarInformacion());
console.log(Cliente.bienvenida());