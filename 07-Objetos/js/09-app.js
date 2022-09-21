"use strict";

// objeto literal no modificable
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    disponible : true
}

Object.seal(producto) // No se puede agregar ni eliminar, pero si modificar
console.log(producto)

producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(Object.isSealed(producto))
console.log(Object.isFrozen(producto))