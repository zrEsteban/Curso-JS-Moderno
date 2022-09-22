const pendientes = ['Tarea','Comer','Proyecto','Estudiar JS'];
const carrito = [
    {nombre : 'Monitor 27\"', precio : 500 },
    {nombre : 'Television', precio : 100 },
    {nombre : 'Tablet', precio : 200 },
    {nombre : 'Audifonos', precio : 300 },
    {nombre : 'Teclado', precio : 400 },
    {nombre : 'Celular', precio : 700 },
]

pendientes.forEach( (p,i) => console.log(`${i} : ${p}`) );

const newArreglo1 = carrito.forEach( p => console.log(`${p.nombre}`) );
const newArreglo2 = carrito.map( p => console.log(`${p.nombre}`) );

console.log(newArreglo1);
console.log(newArreglo2);