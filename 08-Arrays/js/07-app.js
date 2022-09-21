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

const producto4 = {
    nombre: "Celular 2",
    precio : 150
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
console.table(carrito);

// Forma Imperativa

/*
// Eliminar ultimo elemeto
carrito.pop();
console.table(carrito);

// Eliminar ultimo elemeto
carrito.shift();
console.table(carrito);
*/

carrito.splice(3,1);
console.table(carrito);
