// Operador Mayor que y menor que 

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if ( dinero >= totalAPagar ){
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('Si puedo pargar porque tengo cheque');
} else if (tarjeta) {
    console.log('Si puedo pargar porque tengo la Tarjeta');
} else {
    console.log('Fondos insuficientes');
}