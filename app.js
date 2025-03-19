const cancionesazar = [
  "https://raw.githubusercontent.com/edseguu/canciones/main/cancion%20(1).mp3",
  "https://raw.githubusercontent.com/edseguu/canciones/main/cancion%20(2).mp3",
  "https://raw.githubusercontent.com/edseguu/canciones/main/cancion%20(3).mp3",
  "https://raw.githubusercontent.com/edseguu/canciones/main/cancion%20(4).mp3",
  "https://raw.githubusercontent.com/edseguu/canciones/main/cancion%20(5).mp3"
];

let audioReproduciendo = null;

function cancionazar() {
  if (audioReproduciendo) {
    audioReproduciendo.pause();
  }

  let i = Math.floor(Math.random() * cancionesazar.length);
  let r = cancionesazar[i];

  audioReproduciendo = new Audio(r);
  audioReproduciendo.loop = true;
  audioReproduciendo.play();

  const toggle = document.querySelector(".toggleSwitch");
  toggle.style.display="none";
}

function baile(){

    const paginavieja = document.querySelector(".pagina1");
    const paginanueva = document.querySelector(".pagina2");
    paginavieja.replaceWith(paginanueva);
    paginanueva.classList.add("mostrar");


    const videomostrar = document.querySelector(".demo");
    videomostrar.style.display="block";

}

function baile(){

    const paginavieja = document.querySelector(".pagina1");
    const paginanueva = document.querySelector(".pagina2");
    paginavieja.replaceWith(paginanueva);
    paginanueva.classList.add("mostrar");


    const videomostrar = document.querySelector(".demo");
    videomostrar.style.display="block";

}

function confe(){
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.90,
        origin: {y:0.2},
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "990f0f", "FF1493", "C71585"],
      };
      
      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 2,
      });
      
      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });
      
      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });


}

function cancion1(){
  const cancionelemento = document.getElementById("cancion1");
  cancionelemento.play()
}

function cancion2(){
  const cancionelemento = document.getElementById("cancion2");
  cancionelemento.play()
}

function cancion3(){
  const cancionelemento = document.getElementById("cancion3");
  cancionelemento.play()
}

document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) {
      event.preventDefault(); // Evita el gesto de zoom
  }
}, { passive: false });

const checkboxInput = document.getElementById('checkboxInput');
const videos = document.querySelectorAll('video');
const audios = document.querySelectorAll('audio');

checkboxInput.addEventListener('change', function() {
  if (this.checked) {
    // Si el checkbox está marcado (mute), silencia todos los videos y audios
    videos.forEach(video => {
      video.pause = true;
    });
    audios.forEach(audio => {
      audio.muted = true;
    });
  } else {
    // Si el checkbox está desmarcado (unmute), restaura el sonido de los videos y audios
    videos.forEach(video => {
      video.pause = false;
    });
    audios.forEach(audio => {
      audio.muted = false;
    });
  }
});



function reiniciar(){
  location.reload();

}
