// Declaracion de clases
class Cliente {
    
    #nombre; // Propiedad privada

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

// Public, solo se puede acceder dentro de la clase o en el objeto.
// Private, solo se puede acceder dentro de la clase.
// Protected, 
const persona = new Cliente();
persona.setNombre('Juan');
console.log(persona.nombre);
console.log(persona.getNombre());
