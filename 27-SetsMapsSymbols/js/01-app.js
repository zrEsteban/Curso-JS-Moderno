// Sets en JS : permite crear una lista sin duplicado, es mas rapido cuando son muy grandes los datos
// Solo generan valor, no agregan index.
const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

carrito.add('Camisa');

console.log(carrito);

carrito.delete('Disco #2');


console.log(carrito.has('Guitarra'));
console.log(carrito);

console.log(carrito.delete('Disco #2'));

console.log(carrito.size);

carrito.forEach(p =>{
    console.log(p);
})

// Del siguiente arrgle, elimnar los duplicados
const numeros = [10,20,30,40,50,10,20];
const noDuplicado = new Set(numeros);
console.log(noDuplicado);
