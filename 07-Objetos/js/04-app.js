// objeto literal 
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    dispobile : true    
}
console.log(producto)
/*
// Forma antigua 
const nombre = producto.nombre; 
console.log(nombre)
*/

// Destructuring 
const {nombre, precio, imagen} = producto;

console.log(nombre)
console.log(precio)