const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Que todos cumpla la condicion (every)
const res = carrito.every( p=> p.precio < 500 );
console.log(res)


// Al menos uno cumpla la condicion (some)
const res2 = carrito.some( p=> p.precio < 500 );
console.log(res2)