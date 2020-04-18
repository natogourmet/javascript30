const videoData = [
    {
        'title': 'BATORU CATO',
        'views': 27,
        'days': 426,
        'timestamp': 106
    },
    {
        'title': 'I Dont Know What To Do - Trailer Gameplay',
        'views': 60,
        'days': 532,
        'timestamp': 57
    },
    {
        'title': 'Old New Project - Khaled - Remake',
        'views': 28,
        'days': 783,
        'timestamp': 257
    },
    {
        'title': 'Gliscor Rekting Little Noob / Mega Swagikarp',
        'views': 98,
        'days': 1528,
        'timestamp': 138
    },
    {
        'title': 'Pajaro de Papél',
        'views': 109,
        'days': 1702,
        'timestamp': 7
    },
    {
        'title': 'Da Thresh Deal With It',
        'views': 18,
        'days': 1946,
        'timestamp': 106
    }    
];
const videos = Array.from(document.querySelectorAll('.card'));

for (let i = 0; i < videoData.length; i++) {
    const video = videoData[i];
    videos[i].children[0].src = 'img/thumbnail_' + (i + 1) + '.jpg';
    videos[i].children[1].innerHTML = getTimestamp(videoData[i].timestamp);
    videos[i].children[2].innerHTML = videoData[i].title;
    videos[i].children[3].innerHTML = videoData[i].views + ' views';
    videos[i].children[4].innerHTML = getDate(videoData[i].days);
    
}

function getTimestamp(time){
    totalTime = '';
    timeLeft = time;
    hours = 0;
    mins = 0;
    secs = 0;

    if (timeLeft / 3600 >= 1){
        hours = Math.floor(timeLeft / 3600);
        timeLeft %= 3600;
    }
    if (timeLeft / 60 >= 1){
        mins = Math.floor(timeLeft / 60);
        timeLeft %= 60;
    }
    secs = timeLeft;

    if (hours / 10 < 1) hours = '0' + hours;
    if (mins / 10 < 1) mins = '0' + mins;
    if (secs / 10 < 1) secs = '0' + secs;

    return ((hours === '00') ? '' : hours + ':') + mins + ':' + secs;
}

function getDate(time){
    if (time / 365 >= 1) return Math.floor(time / 365) + ' years ago';
    else if (time / 30 >= 1) return Math.floor(time / 30) + ' months ago';
    else return time + ' days ago';
}