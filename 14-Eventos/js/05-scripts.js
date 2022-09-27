/* Evento de scroll */

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    if (ubicacion.top < 784){
        console.log('Elemento visible');
    } else {
        console.log('Falta scrolling');
    }
});