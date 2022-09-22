/*
for (i=0 ; i <=10 ; i++){
    ( i===5 ? console.log("Cinco"): console.log(i) );    
}
*/
const carrito = [
    {nombre : 'Monitor 27\"', precio : 500 },
    {nombre : 'Television', precio : 100 },
    {nombre : 'Tablet', precio : 200, descuento : true },
    {nombre : 'Audifonos', precio : 300 },
    {nombre : 'Teclado', precio : 400 },
    {nombre : 'Celular', precio : 700 },
]

// for (i=0 ; i <= carrito.length ; i++) ( carrito[i].descuento ? console.log(`El articulo ${carrito[i].nombre} tiene descuento`) : console.log(carrito[i].nombre) );