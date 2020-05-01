const scoreBoard = document.querySelector(".score");
const timerBoard = document.querySelector(".timer");
const startClick = document.querySelector(".start-click");
const plants = document.querySelectorAll(".plant");
const mario = document.querySelector(".mario");
const fireballAudio = document.getElementById("fireball-audio");
const killAudio = document.getElementById("kill-audio");
const bgAudio = document.getElementById("bg-audio");
let lastPipe;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function spawnPlant(plants) {
  const idx = Math.floor(Math.random() * plants.length);
  const hole = plants[idx];
  if (hole === lastPipe) {
    return spawnPlant(plants);
  }
  lastPipe = hole;
  return hole;
}

function peep() {
  const time = randomTime(500, 1000);
  const plant = spawnPlant(plants);
  plant.classList.add("out");
  setTimeout(() => {
    plant.classList.remove("out");
    if (!timeUp) peep();
    else startClick.style.display = "block";
  }, time);
}

function startGame() {
  if (bgAudio.paused) bgAudio.play();
  startClick.style.display = "none";
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  timer(30);
  peep();
  setTimeout(() => (timeUp = true), 30000);
}

function timer(time) {
  timerBoard.innerHTML = time;
  if (time > 0) {
    setTimeout(() => {
      timer(time - 1);
    }, 1000);
  }
}

function fireball(x, y) {
  mario.classList.add("shoot");
  fireballAudio.currentTime = 0;
  fireballAudio.play();
  setTimeout(() => {
    mario.classList.remove("shoot");
  }, 100);

  const fireball = document.createElement("div");
  fireball.setAttribute("class", "fireball");
  document.body.appendChild(fireball);
  fireball.style.left = mario.offsetLeft + 32 + "px";
  fireball.style.top = mario.offsetTop + 32 + "px";

  setTimeout(() => {
    fireball.style.left = x + "px";
    fireball.style.top = y + "px";
  }, 50);

  setTimeout(() => {
    document.body.removeChild(fireball);
  }, 500);
}

function points(x, y) {
  const points = document.createElement("div");
  points.setAttribute("class", "points");
  document.body.appendChild(points);
  points.innerHTML = "200";
  points.style.left = x + 64 + "px";
  points.style.top = y + "px";

  setTimeout(() => {
    points.style.top = y - 100 + "px";
  }, 50);
  setTimeout(() => {
    document.body.removeChild(points);
  }, 500);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater!
  const coords = {
    x: this.offsetParent.offsetLeft + this.offsetLeft,
    y: this.offsetParent.offsetTop + this.offsetTop + 64,
  };
  fireball(coords.x, coords.y);

  setTimeout(() => {
    killAudio.currentTime = 0;
    killAudio.play();
    this.classList.remove("out");
    score += 200;
    scoreBoard.innerHTML = score;
    points(coords.x, coords.y);
  }, 500);
}

plants.forEach((plant) => plant.addEventListener("click", bonk));
