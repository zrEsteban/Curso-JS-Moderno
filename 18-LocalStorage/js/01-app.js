localStorage.setItem('nombre','Esteban');
sessionStorage.setItem('nombre','Esteban');

const producto = {
nombre : "Monitor 24 Pulgadas",
precio : 300    
}

const productoString = JSON.stringify(producto);

console.log(productoString)

localStorage.setItem('producto',productoString);
localStorage.setItem('meses',JSON.stringify( ['Enero', 'Febrero', 10]));