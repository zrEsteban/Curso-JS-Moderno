const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si Enero existe en un array

// Manual
meses.forEach( mes =>  { if (mes === 'Enero') console.log('Enero si existe'); });

// Methods
const res = meses.includes('Enero');
console.log(res);

//comprobar si existe un elemento en array de objeto .some
/*
const existe = carrito.some( p => { 
    return p.nombre==='Celular';
});
*/
// Forma compacta para objetos 
const existe = carrito.some( p => p.nombre==='Celular' );
console.log(existe);

// Forma compacta para arrays 
const existe2 = meses.some(e => e==='Febrero');
console.log(existe2);