const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', ()=>{
    Notification.requestPermission()
    .then(res=>{
        console.log('El resultado es',res);
    })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Titulo de la notificacion',{
            icon: 'img/ccj.png',
            body: 'Mensaje de Prueba ... '
        });

        notificacion.onclick = function(){
            window.open('http://www.ezamora.cl');
        }
    }
})
