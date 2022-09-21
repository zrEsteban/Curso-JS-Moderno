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

let resultado
// Forma declarativa (programacion funcional), similar a octave
resultado = [...carrito,producto];
resultado = [...resultado,producto2];
resultado = [producto3,...resultado];

console.log(resultado)