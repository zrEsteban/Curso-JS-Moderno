/*
Palabras reservadas
resolve,reject
*/ 
const aplicarDescuento = new Promise( (resolve,reject) => {
    const descuento = false;
    if(descuento){
        resolve('Descuento Aplicado')
    } else {
        reject('No se pudo aplicar el descuento')
    }    
})

aplicarDescuento
    .then(res =>{
        descuento(res);
    })
    .catch(e =>{
        console.log(e);
    })


// console.log(aplicarDescuento);

// Hay 3 valores posibles 
// fulfilled - el promise se cumplió
// reject - el promise no se cumplió
// pending - no sabe si se cumplió o se rechaza


function descuento(msj){
    console.log(msj)
}