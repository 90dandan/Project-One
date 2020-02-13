let simonPlayed, userPlayed, win, level, round; 

var c0 = document.querySelector("#c0").addEventListener('click', handleGreen)
var c1 = document.querySelector("#c1").addEventListener('click', handleBlue)
var c2 = document.querySelector("#c2").addEventListener('click', handleRed)
var c3 = document.querySelector("#c3").addEventListener('click', handleYellow)
document.getElementsByClassName("start")[0].addEventListener('click', start)

function init() {
    win = false;
    simonPlayed = [];
    userPlayed = [];
    level = 1;
    round = 1;
}

function start() {
    createPattern();
}

function handleGreen() {
    userPlayed.push(1) 
    c0.classList.replace('c0','c0.flash');
    setTimeout()
    console.log(userPlayed)
}

function handleBlue() {
    userPlayed.push(2)
    c1.classList.replace('c1','c1.flash');
    setTimeout()
    console.log(userPlayed)
}

function handleRed() {
    userPlayed.push(3)
    c2.classList.replace('c2','c2.flash');
    setTimeout()
    console.log(userPlayed)
}

function handleYellow() {
    userPlayed.push(4)
    c3.classList.replace('c3','c3.flash');
    setTimeout()
    console.log(userPlayed)
}

function clickFlashOff() {
    //if 
}

function createPattern() {
    for (var i = 0; i < 10; i++) {
        simonPlayed.push(Math.floor(Math.random() * 4) + 1);
        console.log(simonPlayed);
    }
}

function showPattern() {
    for (var i = 0; i < round.length; i++) {
        setTimeout(flash(), 1000*i, simonPlayed[i]);
    }
}

function flash(drum) {
 if (drum === 1){
     c0.classList.replace('co0', 'c0.flash')}
 if (drum === 2){
     c1.classList.replace('c1', 'c1.flash')}
 if (drum === 3){
     c2.classList.replace('c2', 'c2.flash')}
 if (drum === 4){
     c3.classList.replace('c3', 'c3.flash')}            
}

function removeFlash() {
    for (var i =0; i < round.length; i++) {
        setTimeout(flash(), 400, simonPlayed[i]);
    }
}

function checkPattern() {
    if (userPlayed.length !== simonPlayed.length){
        document.getElementById("message").innerHTML = "Bummer! Try Again!!"; 
    } //else check through userPlayed and simonPlayed for match
}   //if correct and level not 10 next level
    //if level 10
    // win = true

function win() {
   if (win = true) {
       document.getElementById('message').innerHTML = "You Win!!"}

    init();

//start button, starts showPattern--
//userPlayed push into array--
//check length of array to match 
//check for winning pattern
//if winning, call showPattern
//loop until win or loss

//pull from simon array push into curent game array check current agains userPlayed
