// objeto literal 
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    dispobile : true    
}
console.log(producto)

// Agregar nuevas propiedades al objeto
producto.image = "imagen.jpg";
console.log(producto);

// Eliminar pripiedades del objeto
delete producto.dispobile;
console.log(producto);
