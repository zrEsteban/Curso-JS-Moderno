// creacion de numeros
const numero1 = 30;
const numero2 = 20.1;

let resultado;

resultado=Math.PI;

// Rendondear
resultado =  Math.round(2.8);
resultado =  Math.round(2.4);

// Rendondear hacia arriba 
resultado =  Math.ceil(2.8);
resultado =  Math.ceil(2.4);

// Rendondear hacia abajo
resultado =  Math.floor(2.8);

// Raiz cuadrada 
resultado =  Math.sqrt(144);

// Absoluto 
resultado =  Math.abs(-500);

// Potencia 
resultado =  Math.pow(2,3);

// Minimo
resultado = Math.min(3,5,1,12,-3);

// Maximo
resultado = Math.max(3,5,1,12,-3);

// Random
resultado = Math.random();
resultado = Math.random() * 20 ;

// Aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30 );


console.log(resultado);