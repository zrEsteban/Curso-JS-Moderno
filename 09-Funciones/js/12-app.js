const carrito = [
  { nombre: 'Monitor 27\"', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Array Method (Para for-loop) No crea nueva variable.
carrito.forEach( p => console.log(`${p.nombre} - Price: ${p.precio}`));

// Array Method - map (Crea una nueva variable
const nuevoArreglo = carrito.map( p => `${p.nombre} - Price:  ${p.precio}` )

console.log(nuevoArreglo);