let simonPlayed=[], userPlayed=[], win, round, userTurn; 

let c0 = document.querySelector("#c0")
let c1 = document.querySelector("#c1")
let c2 = document.querySelector("#c2")
let c3 = document.querySelector("#c3")

c0.addEventListener('click', handleGreen)
c1.addEventListener('click', handleBlue)
c2.addEventListener('click', handleRed)
c3.addEventListener('click', handleYellow)

document.querySelector("#turnOn").addEventListener('click', on)
document.getElementsByClassName("start")[0].addEventListener('click', start)

function init() {
    win = false;
    simonPlayed = [];
    userPlayed = [];
    round = 0;
    userTurn = false;
}

function on() {
    createPattern();
}

function start() {
    showPattern();
}

function handleGreen() {
    userPlayed.push(1); 
    c0.classList.add('c0flash');
    setTimeout(lightsOn, 300);
    console.log(userPlayed)
}

function handleBlue() {
    userPlayed.push(2);
    c1.classList.add('c1flash');
    setTimeout(lightsOn, 300);
    console.log(userPlayed)
}

function handleRed() {
    userPlayed.push(3);
    c2.classList.add('c2flash');
    setTimeout(lightsOn, 300);
    console.log(userPlayed)
}

function handleYellow() {
    userPlayed.push(4);
    c3.classList.add('c3flash');
    setTimeout(lightsOn, 300);
    console.log(userPlayed)
}

function lightsOn() {
    c0.classList.replace('c0flash','c0');
    c1.classList.replace('c1flash','c1');
    c2.classList.replace('c2flash','c2');
    c3.classList.replace('c3flash','c3');
}

function createPattern() {
    for (var i = 0; i < 10; i++) {
        simonPlayed.push(Math.floor(Math.random() * 4) + 1);
        console.log(simonPlayed);
    }
}

function showPattern() {
    for (var i = 0; i <= round; i++) {
        setTimeout(flash, 1000*i, simonPlayed[i]);
    }
    round += 1;
    userPlayed = [];
    userTurn = true;
}

function flash(drum) {
 if (drum === 1){
     c0.classList.replace('c0', 'c0flash');
     setTimeout(lightsOn, 400)}
 if (drum === 2){
     c1.classList.replace('c1', 'c1flash');
     setTimeout(lightsOn, 400)}
 if (drum === 3){
     c2.classList.replace('c2', 'c2flash');
     setTimeout(lightsOn, 400)}
 if (drum === 4){
     c3.classList.replace('c3', 'c3flash');
     setTimeout(lightsOn, 400)}            
}

function checkPattern() {
    while (userTurn === true){
        if (userPlayed.length !== simonPlayed.length){
            document.getElementById("message").innerHTML = "Bummer! Try Again!!"; 
        } else {
            for(let i=0;i<simonPlayed.length;i++) 
                if(userPlayed[i] !== simonPlayed[i]){
                    document.getElementById("message").innerHTML = "Whoops, Try Again!!";
                    userTurn = false;
            } 
        }
    }   
}

init();

//start button, starts showPattern--
//userPlayed push into array--
//check length of array to match 
//check for winning pattern
//if winning, call showPattern
//loop until win or loss
//pull from simon array push into curent game array check current agains userplayed;
