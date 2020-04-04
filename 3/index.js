function update() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function moveCar() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value * 20 + suffix);
}

function setSpeed() {
    speed = this.value * 10;
}

function moveRoad() {
    roadOffset += speed;
    if (roadOffset >= 460) roadOffset -= 460;
    document.documentElement.style.setProperty(`--roadOffset`, roadOffset + 'px');
}

var speed = 10;
var roadOffset = 0;



const carInput = document.getElementById('car');
carInput.addEventListener('mousemove', moveCar);

const speedInput = document.getElementById('speed');
speedInput.addEventListener('mousemove', setSpeed);

setInterval(moveRoad, 100);
