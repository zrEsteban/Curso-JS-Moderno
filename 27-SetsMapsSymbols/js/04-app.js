// WeakMap, Mantener datos privados
/* En el ejemplo,los parametros definidos dentro de la estructura queda oculta al utilzar get */
const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

weakmap.set(producto,'Monitor');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));


// No tiene 
console.log(weakmap.size);