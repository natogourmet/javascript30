const nav = document.querySelector("#main");
const character = document.querySelector(".character");
const enemy = document.querySelector(".enemy-container");

let charLeftOffset = character.offsetLeft;
let enemyLeftOffset = enemy.offsetLeft;
let middlePos = window.innerWidth / 2;
let sunPos = window.innerWidth / 100 * 80;

function started() {
  document.getElementById("audio-bg").play();
  window.removeEventListener("scroll", noScroll);
  window.addEventListener("scroll", fixNav);
  alert("DO A HORIZONTAL SCROLL!!!\n(SHIFT + SCROLL DOWN)\n(Right Arrow)");
}

function fixNav() {
  if (window.scrollX + middlePos >= charLeftOffset) {
    character.classList.add("fixed");
    character.style.left = middlePos + "px";
  }

  if (window.scrollX + sunPos >= enemyLeftOffset) {
    enemy.classList.add("fixed");
    enemy.style.left = sunPos + "px";

  } else {
    enemy.classList.remove("fixed");
  }
}

function noScroll() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", noScroll);
