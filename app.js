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

function play(){
  const cancionelemento = document.getElementById("cancion");
  cancionelemento.play()
}