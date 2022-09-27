/* Evento de formularios */
const form = document.querySelector('#formulario');


/*
form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e.target.action)
});
*/

form.addEventListener('submit', validarForm)

function validarForm(e) {
    e.preventDefault();

    console.log(e.target.action)
}