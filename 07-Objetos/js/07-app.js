// objeto literal 
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    disponible : true
}

console.log(producto);

producto.disponible = false ; 

delete producto.precio;

console.log(producto);