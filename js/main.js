let simonPlayed = [];
let userPlayed = [];
let turn, win;



document.querySelector("#snare").addEventListener('click', onClick)
document.querySelector("#tom1").addEventListener('click', onClick)
document.querySelector("#tom2").addEventListener('click', onClick)
document.querySelector("#tom3").addEventListener('click', onClick)



function onClick() {
    console.log('clicked')
}

function play() {
    win = false;
    simonPlayed = [];
    userPlayed = [];
    turn = 1;
    for (var i = 0; i < 20; i++) {
        simonPlayed.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(simonPlayed);
}


