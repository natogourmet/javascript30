const arrow = document.querySelector('.outter-circle');

navigator.geolocation.watchPosition((data) => {
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
});