$(document).ready(function() {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var audioBuffer;
  
    // Cargar y decodificar el archivo de audio
    function loadAudioFile(url) {
      return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
  
        request.onload = function() {
          audioContext.decodeAudioData(request.response, function(buffer) {
            audioBuffer = buffer;
            resolve();
          }, reject);
        };
  
        request.onerror = reject;
        request.send();
      });
    }
  
    // Reproducir el audio
    function playAudio() {
      var source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    }
  
    // Cargar el audio y reproducirlo al cargar la página
    loadAudioFile('ruta_al_archivo_de_audio.mp3')
      .then(playAudio)
      .catch(function(error) {
        console.log('Error al cargar el archivo de audio:', error);
      });
  
    // Navegación sin recarga de página
    $('nav a').click(function(event) {
      event.preventDefault();
      var url = $(this).attr('href');
  
      $('#contenido').load(url, function() {
        // Si se cambia el contenido de manera asíncrona, se puede llamar a playAudio() aquí para continuar reproduciendo el audio en la nueva página.
      });
    });
  });
  