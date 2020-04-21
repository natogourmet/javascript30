const firstPage = document.querySelector("main.section");
const secondPage = document.querySelector(".section.question");
const continueSection = document.querySelector(".continue");
const sentence = document.querySelector(".sentence p");
const answer = document.querySelector(".answer p");

const introAudio = document.getElementById("audio-intro");
const correctAudio = document.getElementById("audio-correct");
const wrongAudio = document.getElementById("audio-wrong");

let sentences = [
  "i am learning english",
  "i don't know what to say",
  "i still doing this challenge",
  "somebody please kill me",
  "i just wanna die",
];
let currentSentence = 0;
let correctAnswer = false;

function begin() {
  introAudio.play();
  firstPage.classList.add("unactive");

  setTimeout(() => {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
    secondPage.classList.remove("unactive");
  }, 1000);

  sentence.innerHTML = sentences[currentSentence];
}

function oncontinue() {
  if (correctAnswer) {
    document.documentElement.style.setProperty(
      "--completition",
      ((currentSentence + 1) / sentences.length) * 100 + "%"
    );
    currentSentence++;
    sentence.innerHTML = sentences[currentSentence];
    continueSection.classList.add("unactive");
    if (currentSentence == sentences.length) {
      sentence.innerHTML = 'U MADE IT ALL TO HERE! CONGRATS!!! NOW U CAN WASTE YOUR TIME IN SOME OTHER STUFF';
    }
  }
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  const speach = transcript.replace(/poop|poo|shit|dump/gi, "💩");
  answer.innerHTML = speach;

  if (e.results[0].isFinal) {
    continueSection.classList.remove("unactive");
    if (speach.toLowerCase() === sentences[currentSentence].toLowerCase()) {
      correctAudio.currentTime = 0.5;
      correctAudio.play();
      continueSection.classList.remove("wrong");
      continueSection.classList.add("correct");
      correctAnswer = true;
    } else {
      wrongAudio.currentTime = 0.5;
      wrongAudio.play();
      continueSection.classList.remove("correct");
      continueSection.classList.add("wrong");
      correctAnswer = false;
    }
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
