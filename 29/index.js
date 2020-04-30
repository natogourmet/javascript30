let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const hoursDisplay = document.querySelector(".hours");
const minsDisplay = document.querySelector(".mins");
const secsDisplay = document.querySelector(".secs");

console.dir(document.querySelector("circle"));

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  document.documentElement.style.setProperty("--completed", "100");
  console.log(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    const percent = (secondsLeft / seconds) * 100;
    document.documentElement.style.setProperty("--completed", percent);
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  let remainderSeconds = seconds % 3600;
  const minutes = Math.floor(remainderSeconds / 60);
  remainderSeconds = seconds % 60;

  hoursDisplay.innerHTML = `${hours < 10 ? "0" : ""}${hours}`;
  minsDisplay.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}`;
  secsDisplay.innerHTML = `${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;

  const display = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const hours = this.hours.value * 3600;
  const mins = this.mins.value * 60;
  const secs = this.secs.value * 1;
  timer(hours + mins + secs);
  this.reset();
});
