const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// reduce ; tomar datos y reducirlos 

// iterativo
let total = 0;
carrito.forEach( p => total += p.precio );
console.log(total)

// Array method reduce
let res = carrito.reduce( (total, prod) => total + prod.precio, 0 );
console.log(res);