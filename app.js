/********* Variables ***********/
//Scores
const p1S = document.querySelector('#p1Score');
const p2S = document.querySelector('#p2Score');

let p1ScoreCount = 0;
let p2ScoreCount = 0;


const winningScoreSelector = document.querySelector('#playTo');
const customeV = document.querySelector('#customeValue');
let winningScore = 7;

const check = document.querySelector('#winBy2');
let winBy2 = false;

// Buttons
const p1B = document.querySelector('#p1Button');
const p2B = document.querySelector('#p2Button');
const resetB = document.querySelector('#reset');

let isGameOver = false;


/********* Logic ***********/
check.addEventListener('click', () => {
    winBy2 = !winBy2;
    console.log(winBy2);
})

winningScoreSelector.addEventListener('change', () => {
    console.log(winningScoreSelector.value);
    if (winningScoreSelector.value == "custome") {
        customeV.removeAttribute("disabled");
    } else {
        customeV.setAttribute('disabled', "");
        winningScore = parseInt(winningScoreSelector.value);
    }

})

customeV.addEventListener('input', () => {
    winningScore = parseInt(customeV.value);
    console.log(winningScore);
})

p1B.addEventListener('click', () => {
    if (!isGameOver) {
        p1ScoreCount++;
        p1S.innerText = p1ScoreCount;
        if (p1ScoreCount >= winningScore) {
            if (winBy2) {
                if (p1ScoreCount >= p2ScoreCount + 2) {
                    isGameOver = true;

                    // Change Text Color
                    p1S.style.color = "green"
                    p2S.style.color = "red"
                }
            } else {
                isGameOver = true;

                // Change Text Color
                p1S.style.color = "green"
                p2S.style.color = "red"
            }
        }
    }
})

p2B.addEventListener('click', () => {
    if (!isGameOver) {
        p2ScoreCount++;
        p2S.innerText = p2ScoreCount;
        if (p2ScoreCount >= winningScore) {
            if (winBy2) {
                if (p2ScoreCount >= p1ScoreCount + 2) {
                    isGameOver = true;

                    // Change Text Color
                    p1S.style.color = "red"
                    p2S.style.color = "green"
                }
            } else {
                isGameOver = true;

                // Change Text Color
                p1S.style.color = "red"
                p2S.style.color = "green"
            }
        }
    }
})

resetB.addEventListener('click', () => {
    p1ScoreCount = 0;
    p2ScoreCount = 0;
    p1S.innerText = p1ScoreCount;
    p2S.innerText = p2ScoreCount;
    isGameOver = false;

    p1S.style.color = "black"
    p2S.style.color = "black"
})