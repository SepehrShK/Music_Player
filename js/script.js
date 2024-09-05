const song = document.querySelectorAll('.song');

const previous_button = document.querySelector('.previous_button');
const play_button = document.querySelectorAll('.play_button');
const next_button = document.querySelector('.next_button');

// const song1 = document.querySelector('.song1')
// const song2 = document.querySelector('.song2')

function playSong(n) {
    if (song[n].paused) {
        song[n].play();
        play_button[n].innerHTML = `<img src="Resources/PauseFill.svg" alt="pause_button">`
    } else {
        song[n].pause();
        play_button[n].innerHTML = `<img src="Resources/Play_fill.svg" alt="play_button">`
    }
}

play_button[0].addEventListener('click', function () {
    playSong(0)
});

play_button[1].addEventListener('click', function () {
    playSong(1)
});