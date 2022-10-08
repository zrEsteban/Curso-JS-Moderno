// Iteradores en JS

const ciudades = ['Londres','New York','Madrid','Paris']; 
const ordenes = new Set([123,231,131,102,'otro valor']); //Solo valores no tienen llave.
const datos = new Map();
datos.set('nombre','Esteban');
datos.set('profesion','Ing. Civil Mecánico');

// Default
for (let ciudad of ciudades){
    console.log(ciudad);
}

for (let orden of ordenes){
    console.log(orden);
}

for (let dato of datos){
    console.log(dato);
}

// keys iterator
/*
for(let key of ciudades.keys()){
    console.log(key);
}

for(let key of ordenes.keys()){
    console.log(key);
}

for(let key of datos.keys()){
    console.log(key);
}
*/

// values iterator
/*
for(let value of ciudades.values()){
    console.log(value);
}

for(let value of ordenes.values()){
    console.log(value);
}

for(let value of datos.values()){
    console.log(value);
}
*/

//Entry iterator
/*
for (let entry of ciudades.entries()){
    console.log(entry);
}

for (let entry of ordenes.entries()){
    console.log(entry);
}

for (let entry of datos.entries()){
    console.log(entry);
}
*/
