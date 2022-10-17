// API de Javascripts 

document.addEventListener('DOMContentLoaded',()=>{

    const obs = new IntersectionObserver(entries =>{
        
        if(entries[0].isIntersecting){
            console.log('Ya está visible...')
        }
    });

    obs.observe(document.querySelector('.premium'));

})