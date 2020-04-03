var secHand = document.querySelector(".clock-secs");
var minHand = document.querySelector(".clock-mins");
var hourHand = document.querySelector(".clock-hours");


setInterval(() => {
  const now = new Date();

  const sec = now.getSeconds();
  const secDeg = (sec / 60) * 360;

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
