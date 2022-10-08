import { datosCita,nuevaCita } from '../funciones.js'
import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput, 
    horaInput,
    sintomasInput,
    formulario
} from '../selectores.js'

export class App {
    constructor(){
        this.initApp();      
    };

    initApp(){
        mascotaInput.addEventListener('change',datosCita);
        // mascotaInput.addEventListener('input',datosCita);
        propietarioInput.addEventListener('change',datosCita);
        telefonoInput.addEventListener('change',datosCita);
        fechaInput.addEventListener('change',datosCita);
        horaInput.addEventListener('change',datosCita);
        sintomasInput.addEventListener('change',datosCita);

        // formulario para nuevas citas
        formulario.addEventListener('submit',nuevaCita);
    }
}

export default App;