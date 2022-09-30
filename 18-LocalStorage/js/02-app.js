const  nombre = localStorage.getItem('nombre');
console.log(nombre);

const  productoJSON = localStorage.getItem('producto');
console.log(productoJSON)
console.log(JSON.parse(productoJSON))

console.log(JSON.parse(localStorage.getItem('meses')))
