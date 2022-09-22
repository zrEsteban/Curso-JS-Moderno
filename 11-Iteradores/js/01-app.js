/*
for (let i=0; i <= 10; i++){
    console.log(`Numero ${i}`);
}
*/

// for (let i=0; i <= 20; i++) ( i%2 ? console.log(`Numero ${i} ES IMPAR`) : console.log(`Numero ${i} ES PAR`));

const carrito = [
    {nombre : 'Monitor 27\"', precio : 500 },
    {nombre : 'Television', precio : 100 },
    {nombre : 'Tablet', precio : 200 },
    {nombre : 'Audifonos', precio : 300 },
    {nombre : 'Teclado', precio : 400 },
    {nombre : 'Celular', precio : 700 },
]

for (i=0 ; i <carrito.length ; i++){
    console.log(carrito[i].nombre);
}