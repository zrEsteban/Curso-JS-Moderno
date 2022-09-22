const carrito = {nombre : 'Monitor 27\"', precio : 500 }

// Iteracion keys de objetos con for in
for (let p in carrito) {
    console.log(`${carrito[p]}`);
}

// Iteracion objetos con for of y object methods
for(let [k,v] of Object.entries(carrito)) {
    console.log(k);
}