"use strict";

// objeto literal no modificable
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    disponible : true
}

Object.freeze(producto) // No se puede modificar, ni agregar , ni eliminar
console.log(producto)

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto))