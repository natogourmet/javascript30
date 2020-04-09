// Setting Canvas tempalte
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.querySelector("body").append(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Global variables
let center = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

let radius = (center.x + center.y) / 4;

handle = {
  x: center.x,
  y: center.y,
  radius: radius / 10,
};

let color = 0;
let width = 1;
let widhtUp = true;

let lastX = 0;
let lastY = 0;

// Draw Middle Point
function drawHandle() {
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(handle.x, handle.y, handle.radius / 2, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.stroke();
}

// Draw Outer Circle
function drawCircle() {
  ctx.beginPath();
  ctx.stroke();
  gradient = ctx.createRadialGradient(
    center.x,
    center.y,
    radius / 2,
    center.x,
    center.y,
    radius
  );
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "black");

  ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);

  ctx.fillStyle = gradient;
  ctx.fill();
}

drawCircle();
drawHandle();

// Draw strokes
function draw() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawCircle();
  // mainLines.push(new Line(lastX, lastY, handle.x, handle.y, ctx));
  // n = mainLines.length;
  // if (n > 100) {
  //   mainLines.shift();
  // }
  // mainLines.forEach((line) => {
  //   line.draw();
  // });
  new Line(lastX, lastY, handle.x, handle.y, color, width).draw();
  [lastX, lastY] = [handle.x, handle.y];
  color++;

  if (widhtUp) width += 0.1;
  else if (!widhtUp) width -= 0.1;

  if (width > 10) widhtUp = false;
  else if (width <= 1) widhtUp = true;
  // drawHandle();
}

//
function clipPos(x, y) {
  disX = x - center.x;
  disY = y - center.y;
  dis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
  if (dis > radius) {
    newRad = radius / dis;
    newX = center.x + disX * newRad;
    newY = center.y + disY * newRad;
    return [newX, newY];
  }
  return [x, y];
}

function circlePointCollision(x, y, circle) {
  return distanceXY(x, y, circle.x, circle.y) < circle.radius;
}

function distanceXY(x0, y0, x1, y1) {
  var dx = x1 - x0,
    dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
}

/* canvas.addEventListener('mousemove', draw); */
canvas.addEventListener("mousedown", (e) => {
  if (circlePointCollision(e.clientX, e.clientY, handle)) {
    [lastX, lastY] = [handle.x, handle.y];
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseout", onMouseUp);
    onMouseDown();
  }
  /* isDrawing = true;
  [lastX, lastY] = getPos(e.offsetX, e.offsetY); */
});

function onMouseDown() {
  const music = document.getElementById("music");
  const text = document.getElementById("text");

  if (music.paused) {
    music.currentTime = 0;
    music.play();

    setMessageDisplay("No lo sueltes", 0);
    setMessageDisplay("Quiero jugar un juego...", 3000);
    setMessageDisplay("Lee atentamente", 6000);
    setMessageDisplay("Hay reglas...", 9000);
    setMessageDisplay("Debes deslizar hasta crear un patrón", 12000);
    setMessageDisplay("Debes enviar tu diseño final a CODEX...", 15000);
    setMessageDisplay("Que empiece el juego!", 18000);
    setTimeout(() => text.classList.add("out"), 20000);
  }
  function setMessageDisplay(text, time) {
    setTimeout(() => {
      this.text.innerHTML = text;
      this.text.classList.add("in");
      setTimeout(() => this.text.classList.remove("in"), 2000);
    }, time);
  }
}

function onMouseMove(e) {
  [handle.x, handle.y] = clipPos(e.clientX, e.clientY);
  draw(e);
}

function onMouseUp(e) {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mouseup", onMouseUp);
}

// Line class
class Line {
  constructor(iniX, iniY, lastX, lastY, color, width) {
    this.iniX = iniX - center.x;
    this.iniY = iniY - center.y;
    this.lastX = lastX - center.x;
    this.lastY = lastY - center.y;
    this.color = color;
    this.width = width;
  }

  draw() {
    // Regular Ones
    this.drawLines(
      this.iniX + center.x,
      this.iniY + center.y,
      this.lastX + center.x,
      this.lastY + center.y
    );

    this.drawLines(
      this.iniX * -1 + center.x,
      this.iniY + center.y,
      this.lastX * -1 + center.x,
      this.lastY + center.y
    );

    this.drawLines(
      this.iniX * -1 + center.x,
      this.iniY * -1 + center.y,
      this.lastX * -1 + center.x,
      this.lastY * -1 + center.y
    );

    this.drawLines(
      this.iniX + center.x,
      this.iniY * -1 + center.y,
      this.lastX + center.x,
      this.lastY * -1 + center.y
    );

    // Inverted Ones
    this.drawLines(
      this.iniY + center.x,
      this.iniX + center.y,
      this.lastY + center.x,
      this.lastX + center.y
    );

    this.drawLines(
      this.iniY * -1 + center.x,
      this.iniX + center.y,
      this.lastY * -1 + center.x,
      this.lastX + center.y
    );

    this.drawLines(
      this.iniY * -1 + center.x,
      this.iniX * -1 + center.y,
      this.lastY * -1 + center.x,
      this.lastX * -1 + center.y
    );

    this.drawLines(
      this.iniY + center.x,
      this.iniX * -1 + center.y,
      this.lastY + center.x,
      this.lastX * -1 + center.y
    );
  }

  drawLines(iniX, iniY, lastX, lastY) {
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = this.width;
    ctx.beginPath();
    ctx.moveTo(iniX, iniY);
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
  }
}
