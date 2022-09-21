const reproductor = {
  reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log('pausando ...'),
  borrar: id => console.log(`Borrando canción id ${id}`),
  crearPlayList: nombre => console.log(`Creando la playlist de ${nombre}`),
  reproducirPlayList: (nombre = 'Default') => console.log(`Reproduciendo la playlist ${nombre}`),
  
  set nuevaCancion(cancion) { 
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  
  get obtenerCancion() {
    console.log(`${this.cancion}`)
  }
  
}

reproductor.nuevaCancion = 'EnterSandman';
reproductor.obtenerCancion;

let id = 30
reproductor.reproducir(id);
reproductor.pausar();

reproductor.borrar(id);
reproductor.crearPlayList('HeavyMetal');
reproductor.crearPlayList('Rock 90s');
reproductor.reproducirPlayList()
