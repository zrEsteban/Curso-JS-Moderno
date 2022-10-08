// Weak sets
// igual que Set pero solo para objetos;

const weakSet = new WeakSet();

const Cliente = {
    nombre : 'Esteban',
    saldo : 500
}

const nombre = 'Juan';
weakSet.add(Cliente);
// Marca error 
// weakSet.add(nombre);

console.log(weakSet.has(Cliente));
// console.log(weakSet.has(Cliente2)); /* Marca error */

console.log(weakSet.delete(Cliente));

// No existe size en weakSet
console.log(weakSet);