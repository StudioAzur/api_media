// On récupère nos élement dans le DOM
let btnPlay = document.querySelector("#play");
let video = document.querySelector("video");
let speed = document.querySelector("#speed");
let videoSpeed = document.querySelector("#video_speed");
btnPlay.innerHTML = "Play";

// On ajoute un écouteur sur le bouton de lecture
btnPlay.addEventListener("click", (event) => {
  event.preventDefault();
  if (video.paused) {
    btnPlay.innerHTML = "Pause";
    video.play();
  } else {
    btnPlay.innerHTML = "Play";
    video.pause();
  }
});

// On met à jour la vitesse de lecture
const updateValue = (e) => {
  videoSpeed.innerHTML = `Vitesse de lecture x${e.target.value}`;
  video.playbackRate = e.target.value;
};

// On vérifie si notre vidéo est terminée
video.addEventListener("ended", () => {
  btnPlay.innerHTML = "Play";
});

video.addEventListener("loadeddata", (e) => {
  console.log("Votre vidéo a bien été chargé.");
});

//  Au chargement de la page on vérifie si notre vidéo s'est bien chargée

/*  ; */

speed.addEventListener("input", updateValue);
