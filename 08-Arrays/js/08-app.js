// objeto literal 
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    dispobile : true    
}

console.log(producto);

// Destructuring objeto
const {nombre} = producto;

console.log(nombre);

// Destructuring Array
const numeros = [10,20,30,40,50];

const [ , ,tercero] = numeros;
console.log(tercero)

const [ , , ...terceros] = numeros;
console.log(terceros);