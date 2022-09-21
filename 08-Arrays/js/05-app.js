const carrito = [];

const producto = {
    nombre: "Monitor 32\"",
    precio : 400
}

const producto2 = {
    nombre: "Tablet",
    precio : 100
}

const producto3 = {
    nombre: "Celular",
    precio : 50
}

// Forma Imperativa, modifica la variable final, trabaja sobre ella misma.
carrito.push(producto2)
carrito.push(producto) // push_back (c++)

carrito.unshift(producto3) // push_forward (c++)

console.table(carrito)