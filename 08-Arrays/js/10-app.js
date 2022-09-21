const carrito = [
    {nombre : 'Monitor 27\"', precio : 500 },
    {nombre : 'Television', precio : 100 },
    {nombre : 'Tablet', precio : 200 },
    {nombre : 'Audifonos', precio : 300 },
    {nombre : 'Teclado', precio : 400 },
    {nombre : 'Celular', precio : 700 },
]

// Array Method (Para for-loop) No crea nueva variable.
const nuevoArreglo =  carrito.forEach( function(p){
    return `${p.nombre} - Price: ${p.precio}`;
})
console.log(nuevoArreglo)

// Array Method - map (Crea una nueva variable)
const nuevoArreglo2 = carrito.map( function(p){
    return `${p.nombre} - Price: ${p.precio}`;
})
console.log(nuevoArreglo2)