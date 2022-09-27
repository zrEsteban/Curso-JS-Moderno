/* Event bubbling */

const cardDiv = document.querySelector('.card');

// Delegation.
cardDiv.addEventListener('click', (e)=> {
    
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo.');
    }

    if (e.target.classList.contains('precio')) {
        console.log('Diste click en precio.');
    }
   
    if (e.target.classList.contains('card')) {
        console.log('Diste click en card.');
    }

});