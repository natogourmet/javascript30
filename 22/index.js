const triggers = document.querySelectorAll(".selectable");
const cursor = document.querySelector(".cursor");
const bgAudio = document.getElementById("bg-audio");
const cursorSFX = document.getElementById("cursor-sfx");
const main = document.querySelector(".main-window");
const startMessage = document.querySelector(".start-click");

let cursorActive = false;

function startClick() {
  bgAudio.play();
  startMessage.style.display = "none";
  main.style.display = "flex";
  setTimeout(() => {
    main.classList.remove("unactive");
  }, 500);
  setTimeout(() => {
    cursor.style.display = "block";
    cursorActive = true;
  }, 11000);
}

function highlightLink() {
  if (cursorActive) {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX,
    };
    cursorSFX.currentTime = 0;
    cursorSFX.play();
    cursor.style.transform = `translate(${coords.left - 90}px , ${
      coords.top - 24
    }px)`;
  }
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
