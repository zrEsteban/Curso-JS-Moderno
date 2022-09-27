const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

/* Eliminar desde el padre */
const nav = document.querySelector('.navegacion');
console.log(nav.children);

nav.removeChild(nav.children[2]);
console.log(nav)