const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");
const fill = document.querySelector(".fill");

function clicked(e) {
  speed.style.display = "flex";
  document.querySelector("h1").style.display = "none";
}

function handleMove(e) {
  const y = e.pageX - this.offsetLeft;
  const percent = y / this.offsetWidth;
  const width = Math.round(percent * 100) + "%";
  bar.style.width = width;
  fill.style.width = width;

  audio = document.querySelector("audio");
  if (percent >= 0.7 && audio.paused) {
    document.querySelector("audio").currentTime = 2;
    document.querySelector("audio").play();
  }
}

speed.addEventListener("mousemove", handleMove);
