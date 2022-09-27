const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

/*
console.log(encabezado.innerText); // Si en el CSS - visibility: hidden ; no lo va a encontrar
console.log(encabezado.textContent); // Si lo va a encontrar
console.log(encabezado.innerHTML); // se trae el HTML
*/
/*
const heading = 'Nuevo Heading';
document. querySelector('.contenido-hero h1').textContent = heading;
*/

const image = document.querySelector('.card img')
image.src = 'img/hacer1.jpg'

