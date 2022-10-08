// IIFE - mantiene las variables privadas en el mismo archivo
/*
(function () {
    console.log('Desde un IIFE');
    // window.nombreCliente = 'Esteban'; // Carga variable a la ventana global.
})();
*/

export const nombreCliente = 'Esteban'
export const ahorro = 200;

export function mostrarInformacion(nombre,ahorro){
    return `Cliente: ${nombre} - Ahorro : ${ahorro}`

}

export function tieneSaldo(ahorro){
    if (ahorro >0){
        console.log('Si tiene Saldo');
    } else {
        console.log('No tiene Saldo');
    }
}

export class Cliente {
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro : ${this.ahorro}`;
    }
}

// Solamente se puede tener un export default (podria ir sin nombre )
export default function  () {
    console.log('Este es el export default');
}