
const nav = document.querySelector('.navegacion');
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);


/*
console.log(nav.childNodes); // Espacios en blanco son cosiderados elementos
console.log(nav.children[0].nodeName);
console.log(nav.children[0].nodeType);
*/

const card = document.querySelector('.card');

/*
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM'
console.log(card.children[1].children[1].textContent);
card.children[0].src = 'img/hacer1.jpg'
console.log(card.children[0]);
*/

/* Traversig del Hijo al Padre */
/*
console.log(card.parentNode);
console.log(card.parentElement); // Mas seguro.
console.log(card.parentElement.parentElement.parentElement.parentElement.parentElement);
*/

/*
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);
*/

/* Ultimo Card */
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);