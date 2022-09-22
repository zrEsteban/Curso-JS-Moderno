const pendientes = ['Tarea','Comer','Proyecto','Estudiar JS'];

const carrito = [
    {nombre : 'Monitor 27\"', precio : 500 },
    {nombre : 'Television', precio : 100 },
    {nombre : 'Tablet', precio : 200 },
    {nombre : 'Audifonos', precio : 300 },
    {nombre : 'Teclado', precio : 400 },
    {nombre : 'Celular', precio : 700 },
]

for (let p of pendientes) {
    console.log(p);
}


for (let p of carrito) {
    console.log(p.nombre);
}