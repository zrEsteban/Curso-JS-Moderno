/* DOM Scripting */

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Registra evento 
btnFlotante.addEventListener('click',toggleFooter);

function toggleFooter() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Mondea';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    };
}