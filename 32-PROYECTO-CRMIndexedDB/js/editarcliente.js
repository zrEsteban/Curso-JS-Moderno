(function(){
    //let DB; /* como variable glboal */    
    const formulario = document.querySelector('#formulario');
    let idCliente;
    /*
    // Leer Inputs
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    */

    document.addEventListener('DOMContentLoaded', ()=>{
        conectarDB();

        formulario.addEventListener('submit', actualizarCliente);
        //Verificar el Id de la URL            
        const parametrosURL = new URLSearchParams(window.location.search);
        console.log(parametrosURL);
        
        const idCliente = parametrosURL.get('id');
        localStorage.setItem('idCliente',JSON.stringify(idCliente));
        if (idCliente){
            // Necesario para obtener cliente, y darle tiempo a que se conecte con la base de datos.
            setTimeout(()=>{
                obtenerCliente(idCliente);
            },100);
        }
    });    
    
})();