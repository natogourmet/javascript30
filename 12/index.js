const pressed = [];
const secretCode = "codex";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    document.querySelector('.alert-container').classList.remove('off');
  }
  console.log(pressed);
});
