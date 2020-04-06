const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  if (!this.classList.contains("open")) {
    console.log(this.id);
    audio = document.querySelector(`audio[data-id="${this.id}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }
  this.classList.toggle("open");
  panels.forEach((panel) => {
    if (panel !== this) {
      panel.classList.remove("open");
    }
  });
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
