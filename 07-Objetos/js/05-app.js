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

            pais : 'china'

        }

    }

}
console.log(producto)

console.log(producto.informacion.fabricacion.pais)