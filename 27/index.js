const slider = document.querySelector("body");
const layers = document.querySelectorAll(".parallax");
let isDown = false;
let startX;
let scrollLeft = [];

console.log(layers);

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX;
  for (let i = 0; i < layers.length; i++) {
    scrollLeft.push(layers[i].scrollLeft);
  }
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
  scrollLeft = [];
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
  scrollLeft = [];
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX);

  for (let i = 0; i < layers.length; i++) {
      layers[i].scrollLeft = scrollLeft[i] - walk * Math.pow((i + 1), 2) / 2;
  }
});
