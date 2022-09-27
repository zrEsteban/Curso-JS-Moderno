const enlace = document.createElement('A');
enlace.textContent = 'Nuevo Enlace';

enlace.href = '/nuevo-enlace';
enlace.target='_blank';
enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase');

enlace.onclick = miFunction;

console.log(enlace);

const nav = document.querySelector('.navegacion');
//nav.appendChild(enlace);
nav.insertBefore(enlace,nav.children[1]);

function miFunction() {
    alert('Diste Click');
}

// crear un card de forma dinamica.
const parr1 = document.createElement('P');
parr1.textContent = 'Concierto';
parr1.classList.add('categoria','concierto');

const parr2 = document.createElement('P');
parr2.textContent = 'Concierto de flauta';
parr2.classList.add('titulo');

const parr3 = document.createElement('P');
parr3.textContent = '$800 por persoa';
parr3.classList.add('precio');

// Crear div con clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parr1);
info.appendChild(parr2);
info.appendChild(parr3);

const img = document.createElement('img');
img.src = 'img/hacer2.jpg'
img.classList.add('img-fluid');
img.alt = 'Texto Alternativo'

//crear el card 
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(img);
card.appendChild(info);

// insetar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.appendChild(card);

// contenedor.insertBefore(card, contenedor.children[0]) // Al inicio


console.log(card);