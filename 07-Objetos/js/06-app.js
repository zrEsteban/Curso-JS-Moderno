// objeto literal 
const producto = {
    nombre : "Monitor 20\"",
    precio : 300,
    dispobile : true,
    informacion : {
        medidas : {
            peso : '1kg',
            medida : '1m'
        },
        fabricacion : {
            pais : 'China'
        }

    }
}

const { nombre ,  informacion : { fabricacion , fabricacion : {pais} }   } = producto
console.log(nombre)
console.log(fabricacion) 
console.log(pais)