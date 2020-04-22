let bg = document.querySelector('.name-container');
for (let i = 0; i < 20; i++) {
    let glitchBox = document.createElement('div');
    glitchBox.className = 'glitch-box';
    bg.appendChild(glitchBox);
}
let glitchBoxes = document.querySelectorAll('.glitch-box');

setInterval(() => {
    glitchBoxes.forEach(glitchBox => {
        glitchBox.style.left = Math.floor(Math.random() * 100) + 'vw';
        glitchBox.style.top = Math.floor(Math.random() * 100) + 'vh';
        glitchBox.style.width = Math.floor(Math.random() * 400) + 'px';
        glitchBox.style.height = Math.floor(Math.random() * 100) + 'px';
        glitchBox.style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';

    });
}, 200);

