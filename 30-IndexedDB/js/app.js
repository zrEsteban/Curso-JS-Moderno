/* IndexedDB Parecido a localStorage, pero sin limite de peso del archivo y permite guardar diferentes tipos de datos 
 LocalStorage; guardar carrito abandonado o JSON web Token 
IndexedDB es una basa de datos, pero sigue siendo los datos visibles, no guardar datos sensibles del cliente  */


document.addEventListener('DOMContentLoaded' , () => {
    crmDB();

    setTimeout(()=>{
        crearCliente();
    },3000)
})

function crmDB(){
    // Crear base de dato version 1.0
    let crmDB = window.indexedDB.open('crm',1);

    // Si hay algun error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la BD');
    }

    // Si se crea bien
    crmDB.onsuccess = function() {
        console.log('Base de datos Creada!');
        DB = crmDB.result;
    }

    // Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        //console.log(e.target.result);
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            ketPath : 'crm',
            autoIncrement : true // Aumenta el id del registro en 1 automaticamente.

        });

        // Definir las columnas 
        objectStore.createIndex('nombre','nombre', {unique:false});
        objectStore.createIndex('email','email', {unique:true});
        objectStore.createIndex('telefono','telefono', {unique:false});

        console.log('Columnas Creadas');

    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'],'readwrite');
    
    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion');        
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 123456789,
        nombre: 'Esteban',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente)

    console.log(peticion);
}