class Citas{
    constructor(){
        this.citas = [];
    }
    
    agregarCita(cita){
        this.citas = [...this.citas,cita];
        //console.log(this.citas)
    };

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id )
    };

    editarCita(citaActualizada) {
        // genera un nuevo arreglo , busca por id y reescribe cita
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? cita = citaActualizada : cita );
    };    
}

export default Citas;