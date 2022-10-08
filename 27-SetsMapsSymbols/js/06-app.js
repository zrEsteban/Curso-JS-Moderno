// Iteradores 
function crearIterador(carrito){

    let i = 0;    

    return {
        siguiente: () =>{
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor}
        }
    }
}

const carrito = ['Podructo 1','Podructo 2','Podructo 3','Podructo Nuevo'];

// utilizr el iterador
const recorrerCarrito = crearIterador(carrito);


console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());