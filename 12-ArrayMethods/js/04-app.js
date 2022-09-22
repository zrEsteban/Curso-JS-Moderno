const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// ArrayMethod Filter crea un nuevo arreglo con la condicion 
let res;
res = carrito.filter( e => (e.precio > 400) );
res = carrito.filter( e => (e.precio < 600) );

res = carrito.filter( e => (e.nombre !== 'Audifonos') );

console.log(res)