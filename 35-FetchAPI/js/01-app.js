const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'data/datos2.txt';
    fetch(url)
        .then( res =>{
            /*
            console.log(res);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.url);
            console.log(res.type);
            */
            return res.text()
        })
        .then(datos=>{
        console.log(datos);
        })
        .catch( error =>{
            console.log(error);
        })
}