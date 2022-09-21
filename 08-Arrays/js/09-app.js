const carrito = [
    {nombre : 'Monitor 27\"', precio : 500 },
    {nombre : 'Television', precio : 100 },
    {nombre : 'Tablet', precio : 200 },
    {nombre : 'Audifonos', precio : 300 },
    {nombre : 'Teclado', precio : 400 },
    {nombre : 'Celular', precio : 700 },
]

for (let i = 0; i <carrito.length;i++){
    console.log(`${carrito[i].nombre} - Price: ${carrito[i].precio}`);    
}


// Array Method (Para for-loop)
carrito.forEach( function(p){
    console.log(`${p.nombre} - Price: ${p.precio}`)
})