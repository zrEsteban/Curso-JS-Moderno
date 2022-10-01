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

// Herencia 
class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,categoria){
        /*
        this.nombre = nombre;
        this.saldo = saldo;
        Lo anterior marca un error de referencias 
        */        
        super(nombre,saldo); /* Hereda atributos del constructor padre */ 
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){ /* No requieren una instancio, pertenece a la clase */
    return `Bienvenido al Cajero de empresas`;
}

}

// instanciar clase
const esteban = new Cliente('Esteban',400);
const empresa = new Empresa('EZam');

console.log(esteban);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

