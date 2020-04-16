const container = document.querySelector(".hero");
const text = container.querySelector("h1");
const walk = 50;
let clickCount = 0;

function shadow(e) {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xOffset = Math.round((x / width) * walk - walk / 2);
  const yOffset = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
        ${-xOffset}px ${-yOffset}px 10px black
    `;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

function clicked() {
  switch (clickCount) {
    case 0:
      document.getElementById("audio-intro").play();
      setTimeout(() => {
        document.querySelector(".flashlight").classList.remove("unactive");
        document.getElementById("audio-bg").currentTime = 4;
        document.getElementById("audio-bg").play();
      }, 12500);
  }
  clickCount++;
}

container.addEventListener("mousemove", shadow);
