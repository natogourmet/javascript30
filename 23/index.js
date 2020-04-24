const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const textArea = document.querySelector('[name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
const mouth = document.querySelector('.mouth');

msg.text = textArea.value;


function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");

  voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name == this.value);
  toggle();
}

function setText() {
  msg.text = textArea.value;
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
    mouth.classList.add('talking');
  }
  else {
    mouth.classList.remove('talking');
  }
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
msg.addEventListener("end", () => toggle(false));
voicesDropdown.addEventListener("change", setVoice);
textArea.addEventListener("change", setText);
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));

