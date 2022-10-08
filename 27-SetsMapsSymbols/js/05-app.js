// Nunca un Symbol es igual a otro

const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

console.log( Symbol() === Symbol());


const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Esteban' // Es un symbol
persona[apellido] = 'Zamora' // Es un Symbol
persona.tipoCliente = 'Premium'
persona.saldo = 500


console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);

// Las propieades definidas como Symbol no es iterable
for(let i in persona){
    console.log(i);
}

// Definir una descripción del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);