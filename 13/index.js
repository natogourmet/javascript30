function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".slide-in");
const audios = document.querySelectorAll('audio');

function checkSlide(e) {
  images.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetParent.offsetTop + image.height;
    const halfShown = slideInAt > image.offsetParent.offsetTop;
    const notScrolledPast = window.scrollY < imageBottom;
    const audio = document.querySelector(
      `audio[data-audio="${image.getAttribute("data-audio")}"]`
    );
    if (halfShown && notScrolledPast) {

      const bgAudio = document.querySelector('audio[data-audio = "bg"]'); 
      bgAudio.volume = 0.5;
      if (bgAudio != null && bgAudio.paused) bgAudio.play();

      image.classList.add("active");
      if (audio != null && audio.paused) {
        audio.play();
      }
    } else {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));

