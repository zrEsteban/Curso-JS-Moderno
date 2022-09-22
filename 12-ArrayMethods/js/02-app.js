const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// find index con iteradores
meses.forEach( (e,i) => {
    if (e === 'Abril') console.log(`Encontrado en el indice ${i}`);
})


// find index con ArrayMethods (Solo encuentra el primero)
const idx = meses.findIndex( mes => mes=='Abril' );
console.log(idx);


const idx2 = carrito.findIndex( p => p.precio === 100);
console.log(idx2);