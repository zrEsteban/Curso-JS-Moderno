const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un forEach
let res = '';
carrito.forEach((e,i) => {
    if (e.nombre === 'Tablet') {res = carrito[i]};
})
console.log(res);

// con un find (ArrayMethod) [solo retorna el primer elemento que cumple la condicion]
let res2= carrito.find(e=> e.nombre === 'Tablet');
console.log(res2);