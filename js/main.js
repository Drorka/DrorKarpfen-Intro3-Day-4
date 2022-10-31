// console.log('hi');

// 2.
function changeTextColor() {

    var elBall = document.querySelector('.ball-div');

    elBall.style.color = 'green';
}

// 3.
function changeTextSize() {
    var elBall = document.querySelector('.ball-div');
    var newTextSize = prompt('enter text size');
    if (newTextSize < 50) {
        elBall.style.fontSize = newTextSize + 'px';
    } else {
        console.log('too big');
    }
}

// 4.
var isRound = true

function toggleBallShape() {
    var elBall = document.querySelector('.ball-div');
    var elBtn = document.querySelector('.toggle-btn');
    
    if (isRound) {
        isRound = false;
        elBall.style.borderRadius = '0%';
        elBtn.innerText = 'square';
    } else { 
        isRound = true;
        elBall.style.borderRadius = '50%';
        elBtn.innerText = 'round';
    }
}

// 5.
var ballMargin = 10;

function moveDown() {
    var elBall = document.querySelector('.ball-div');
    ballMargin = ballMargin + 10;
    elBall.style.marginTop = ballMargin;
}
