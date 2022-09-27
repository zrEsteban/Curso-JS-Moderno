/* Eventos de teclado */
const busqueda = document.querySelector('.busqueda');

/*
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...');

});

busqueda.addEventListener('keyup', () => {
    console.log('escribiendo...');

});


busqueda.addEventListener('blur', () => {
    console.log('click dentro, y click fuera efecuta una funcion ...');

});


busqueda.addEventListener('copy', () => {
    console.log('guardado en portapapeles ...');

});

busqueda.addEventListener('paste', () => {
    console.log('Pegado en ...');

});
*/

/* Cubre todos los eventos anteriores menos el blur */
busqueda.addEventListener('input', (e) => {
    //console.log(e.type);
    if (e.target.value === '') {console.log('Fallo la validacion')};

});