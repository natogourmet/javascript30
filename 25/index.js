const circles = document.querySelectorAll(".circle");
const button = document.querySelector("button");
const dropAudio = document.getElementById("drop-audio");

function waveOut(e) {
  this.classList.add("active");
}

function waveIn() {
  if (this.classList.contains("active")) {
    console.log(this.classList.value, "transition ended");
    this.classList.remove("active");
  }
}

function sound() {
  dropAudio.play();
}

circles.forEach((div) =>
  div.addEventListener("click", waveOut, {
    capture: false,
  })
);

circles.forEach((div) =>
  div.addEventListener("transitionend", waveIn, {
    capture: false,
  })
);

circles.forEach((div) =>
  div.addEventListener("click", sound, {
    capture: false,
  })
);
