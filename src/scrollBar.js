const scrollBar = document.getElementById('scrollBar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    scrollBarHeightPercent = (window.pageYOffset / totalHeight) * 100;
    scrollBar.style.height = scrollBarHeightPercent + '%';
});