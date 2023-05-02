// Obtener referencias a los elementos de audio y botones
var audio = document.getElementById("ozzy01");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");

// Agregar evento click al botón de reproducción
playButton.addEventListener("click", function() {
  audio.play();
});

// Agregar evento click al botón de pausa
pauseButton.addEventListener("click", function() {
  audio.pause();
});
