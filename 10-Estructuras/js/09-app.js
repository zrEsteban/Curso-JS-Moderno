const autenticado = true;
const puedePagar = false;

// Operador ternario anidado 
console.log(autenticado  ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'no esta autenticado' );


const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

// if anidado 
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar ) {
    if (efectivo > totalPagar) {
        console.log('Si pagaste con efectivo')
    } else {
        console.log('Otra forma de pago')
    }
} else {
    console.log('Fondos Insuficientes');
}