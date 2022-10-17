// De callback hell a Promises
const paises = [];

const nuevoPais = pais =>new Promise( res =>{
    setTimeout(()=>{
        paises.push(pais);
        res(`Agregao: ${pais}`)
    },1000);
})

nuevoPais('Alemania')
    .then( res =>{
        console.log(res);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(res=>{
        console.log(res);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(res=>{
        console.log(res);
        console.log(paises);
    })