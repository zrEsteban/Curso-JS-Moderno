const producto = 'Monitor de 20\" ';
const precio = '30 USD';

console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));

console.log(producto + "Con un precio de " + precio );


// Template literal
console.log(`El producto ${producto} tiene un precio de ${precio}`);