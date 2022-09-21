const reproductor = {
  reproducir : function(id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function() {
    console.log('pausando ...');
  },
  borrar: function(id) {
    console.log(`Borrando canción id ${id}`);
  },
  crearPlayList: function (nombre){
    console.log(`Creando la playlist de ${nombre}`)
  },
  reproducirPlayList: function(nombre='Default') {
    console.log(`Reproduciendo la playlist ${nombre}`)
  }
}

let id = 30
reproductor.reproducir(id);
reproductor.pausar();


reproductor.borrar(id);
reproductor.crearPlayList('HeavyMetal');
reproductor.crearPlayList('Rock 90s');
reproductor.reproducirPlayList('HeavyMetal')
