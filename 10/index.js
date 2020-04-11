const checkboxes = document.querySelectorAll(".checkbox");

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = !checkbox.checked;
      }
    });
  }

  lastChecked = this;
}

function playMusic() {
  let music = document.getElementById("bg-music");
  if (music.paused) {
    music.currentTime = 14;
    music.play();
  }
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
