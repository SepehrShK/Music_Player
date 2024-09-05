const song = document.querySelectorAll('.song');

const previous_button = document.querySelectorAll('.previous_button');
const play_button = document.querySelectorAll('.play_button');
const next_button = document.querySelectorAll('.next_button');

const song1 = document.querySelector('.song1')
const song2 = document.querySelector('.song2')

function playSong(n) {
    if (song[n].paused) {
        song[n].play();
        play_button[n].innerHTML = `<img src="Resources/PauseFill.svg" alt="pause_button">`
    } else {
        song[n].pause();
        play_button[n].innerHTML = `<img src="Resources/Play_fill.svg" alt="play_button">`
    }
};

previous_button[0].addEventListener('click', function () {
    song1.style.display = "none"
    song2.style.display = "block"
    song[0].pause();
    song[0].currentTime = 0;
    play_button[0].innerHTML = `<img src="Resources/Play_fill.svg" alt="play_button">`
});
previous_button[1].addEventListener('click', function () {
    song1.style.display = "block"
    song2.style.display = "none"
    song[1].pause();
    song[1].currentTime = 0;
    play_button[1].innerHTML = `<img src="Resources/Play_fill.svg" alt="play_button">`
});


play_button[0].addEventListener('click', function () {
    playSong(0)
});


play_button[1].addEventListener('click', function () {
    playSong(1)
});


next_button[0].addEventListener('click', function () {
    song1.style.display = "none"
    song2.style.display = "block"
    song[0].pause();
    song[0].currentTime = 0;
    play_button[0].innerHTML = `<img src="Resources/Play_fill.svg" alt="play_button">`
});
next_button[1].addEventListener('click', function () {
    song1.style.display = "block"
    song2.style.display = "none"
    song[1].pause();
    song[1].currentTime = 0;
    play_button[1].innerHTML = `<img src="Resources/Play_fill.svg" alt="play_button">`
});

const progressContainer = document.querySelectorAll('.progress_container');
const progressBar = document.querySelectorAll('.progress_bar');

song[0].addEventListener('timeupdate', function () {
    const progressPercent = (song[0].currentTime / song[0].duration) * 100;
    progressBar[0].style.width = `${progressPercent}%`;
});

song[1].addEventListener('timeupdate', function () {
    const progressPercent = (song[1].currentTime / song[1].duration) * 100;
    progressBar[1].style.width = `${progressPercent}%`;
});

progressContainer[0].addEventListener('click', function (e) {
    const width = progressContainer[0].clientWidth;
    const clickX = e.offsetX;
    const duration = song[0].duration;

    song[0].currentTime = (clickX / width) * duration;
});

progressContainer[1].addEventListener('click', function (e) {
    const width = progressContainer[1].clientWidth;
    const clickX = e.offsetX;
    const duration = song[1].duration;

    song[1].currentTime = (clickX / width) * duration;
});