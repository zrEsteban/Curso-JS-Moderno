const producto = 'Monitor 20\"...';

console.log(producto);

//.replace para reemplazar
console.log(producto.replace('"','Pulgadas'));

console.log(producto.replace('Monitor','Monitor Curvo'));

//.slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1)); //No hace nada, por que arg1 es mayor que arg2

//Alternativa a .slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // Apenar que arg1 es mayor que arg2

const usuario = "Esteban"
console.log(usuario.substring(0,1));

console.log(usuario.charAt(0,1));