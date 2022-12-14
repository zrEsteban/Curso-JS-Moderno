// Speech recongnition

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click',ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recongnition = new SpeechRecognition();

    recongnition.start();
    recongnition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando ... ';
    };

    recongnition.onspeechend = function(){
        salida.textContent = 'Se dejo de grabar ... '
        recongnition.stop();
    }

    recongnition.onresult = function(e) {
        console.log(e.results[0][0]);

        const {confidence,transcript} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${ parseInt(confidence*100)}%`
        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
}