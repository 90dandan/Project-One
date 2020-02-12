let simonPlayed, userPlayed, win, level, flash; 

document.querySelector("#c0").addEventListener('click', handleGreen)
document.querySelector("#c1").addEventListener('click', handleBlue)
document.querySelector("#c2").addEventListener('click', handleRed)
document.querySelector("#c3").addEventListener('click', handleYellow)
document.getElementsByClassName("start")[0].addEventListener('click', start)

function init() {
    win = false;
    simonPlayed = [];
    userPlayed = [];
    level = 1;
    flash = 1;
}

function start() {
    createPattern();
}

function handleGreen() {
    userPlayed.push(1)
    //flash function create an off on value in css for elements to change to for a period of time 
    console.log(userPlayed)
}
function handleBlue() {
    userPlayed.push(2)
    console.log(userPlayed)
}
function handleRed() {
    userPlayed.push(3)
    console.log(userPlayed)
}
function handleYellow() {
    userPlayed.push(4)
    console.log(userPlayed)
}

function createPattern() {
    for (var i = 0; i < 10; i++) {
        simonPlayed.push(Math.floor(Math.random() * 4) + 1);
        console.log(simonPlayed);
    }
}


function userTurn() {

}

function checkPattern() {
    if (userPlayed.length===simonPlayed.length){

    }
}

init();

//start button, starts showPattern
//userPlayed push into array
//check length of array to match 
//check for winning pattern
//if winning, call showPattern
//loop until win or loss

//pull from simon array push into curent game array check current agains userPlayed
