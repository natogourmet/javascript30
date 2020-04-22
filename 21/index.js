const arrow = document.querySelector('.outter-circle');
const imgs = document.querySelectorAll('.pokemon');

navigator.geolocation.watchPosition((data) => {
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    imgs.forEach(img => {
        img.style.transform = `rotate(-${data.coords.heading}deg)`;
    });
}, (err) => {
    console.error(err);
});