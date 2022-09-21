let numero;

console.log(numero); //Undefined: Definida pero no asignada;
console.log(typeof(numero));

// Null
let numero2 = null;
console.log(numero2);
console.log(typeof(numero2)); // Por especificaciones ECMAS, null debe ser un objeto

console.log(numero == numero2) // ¿ Por que es true?

console.log(numero === numero2) // ** ESTRICTO ** retorna false