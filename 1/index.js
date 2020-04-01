
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playAnimation(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");

  var audio;
  switch (e.keyCode) {
    case 83:
      posY += 10;
      if (posY > 80) posY = 80;
      wlk();
      break;

    case 87:
      posY -= 10;
      if (posY < 0) posY = 0;
      wlk();
      break;

    case 68:
      posX += 10;
      if (posX > 90) posX = 90;
      wlk();
      break;

    case 65:
      posX -= 10;
      if (posX < 0) posX = 0;
      wlk(e);
      break;

    case 74:
      slash();
      break;

    case 75:
        slash();
        break;

    case 76:
        hey();
        break;

    default:
      break;
  }

  function wlk() {
    player.style.marginTop = posY + "%";
    player.style.marginLeft = posX + "%";
    sprite = document.getElementById("player-sprite");
    setTimeout(function() {
      sprite.style.background = "url('img/wlk/1.png')";
    }, 50);
    setTimeout(function() {
      sprite.style.background = "url('img/wlk/2.png')";
    }, 100);
    setTimeout(function() {
      sprite.style.background = "url('img/wlk/3.png')";
    }, 150);
    setTimeout(function() {
      sprite.style.background = "url('img/wlk/4.png')";
    }, 200);
    setTimeout(function() {
      sprite.style.background = "url('img/wlk/5.png')";
    }, 250);
    setTimeout(function() {
      sprite.style.background = "url('img/idle.png')";
    }, 300);
  }

  function slash() {
    sprite = document.getElementById("player-sprite");
    setTimeout(function() {
      sprite.style.background = "url('img/atk/1.png')";
    }, 50);
    setTimeout(function() {
      sprite.style.background = "url('img/atk/2.png')";
    }, 100);
    setTimeout(function() {
      sprite.style.background = "url('img/atk/3.png')";
    }, 150);
    setTimeout(function() {
      sprite.style.background = "url('img/atk/4.png')";
    }, 200);
    setTimeout(function() {
      sprite.style.background = "url('img/atk/5.png')";
    }, 250);
    setTimeout(function() {
      sprite.style.background = "url('img/idle.png')";
    }, 300);
  }

  function hey() {
    sprite = document.getElementById("player-sprite");
    setTimeout(function() {
      sprite.style.background = "url('img/death.png')";
    }, 0);
    setTimeout(function() {
      sprite.style.background = "url('img/idle.png')";
    }, 1000);
  }

  
  audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

}

var posX = 0;
var posY = 0;

const player = document.getElementById("player");

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playAnimation);
