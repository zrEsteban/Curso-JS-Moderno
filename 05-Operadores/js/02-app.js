const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si dos numeros son iguales
console.log(numero1 == numero3);
console.log(numero1 == numero2); // No tan estricto

console.log(numero1 === numero2); // estricto
console.log(typeof(numero1));
console.log(typeof(numero2));

console.log(numero1 === parseInt(numero2)); // estricto

// Diferente 
const pwd1 = "admin";
const pwd2 = "Admin";

console.log(pwd1 != pwd2);

console.log(numero1 != numero2); // No tan estricto
console.log(numero1 !== numero2); // estricto