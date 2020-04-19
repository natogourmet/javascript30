const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
let active = false;


function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`Tssschale, refresca y acepta culo`);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);

    if(active) {
      pixels = tsukuyomi(pixels);
    }

    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="" />`;
  strip.insertBefore(link, strip.firstChild);
}

function tsukuyomi(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = 255 - pixels.data[i + 0];
    pixels.data[i + 1] = 255 - pixels.data[i + 1];
    pixels.data[i + 2] = 255 - pixels.data[i + 2];
    const gray = average(pixels.data[i + 0], pixels.data[i + 1], pixels.data[i + 2]);
    pixels.data[i + 0] = gray;
    pixels.data[i + 1] = gray;
    pixels.data[i + 2] = gray;
  }
  return pixels;
}

function average(r, g, b) {
  return Math.floor((r + g + b) / 3);
}

function sharingan() {
  const sharingan = document.querySelector(".sharingan");
  sharingan.classList.add("clicked");
  audio = document.querySelector(".audio-sharingan");
  audio.currentTime = 1.2;
  audio.play();
  audio = document.querySelector(".audio-bg");
  audio.currentTime = 33;
  audio.play();
  setTimeout(() => {
    active = true;
    document.querySelector('html').style.backgroundImage = "url('img/bg.png')";
  }, 2500);
  setTimeout(() => {
    sharingan.classList.add("hide");
  }, 3000);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
