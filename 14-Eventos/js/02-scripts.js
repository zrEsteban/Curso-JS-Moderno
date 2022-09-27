/* Eventos con el Mouse */
const nav = document.querySelector('.navegacion');

// similar a mousedown
nav.addEventListener('click', () => {
    console.log('click en nav');
})


nav.addEventListener('mouseenter', () => {
    console.log('entrando a la nav');
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mouseout', () => {
  
    console.log('saliendo a la nav');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseup', () => {
    console.log('entrando a la nav');
    nav.style.backgroundColor = 'red';
})


nav.addEventListener('dblclick', () => {
    console.log('entrando a la nav');
    nav.style.backgroundColor = 'blue';
})