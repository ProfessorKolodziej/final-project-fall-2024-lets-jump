// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const cat = document.querySelector("#cat");
const dog = document.querySelector("#dog");
const block = document.querySelector("#block");
const scoreElement = document.querySelector("#score");
const gameContainer = document.querySelector("#game");
const jumpSound = new Audio("images/cartoon-jump-6462.mp3");

let score = 0;
let gameRunning = true;

window.addEventListener("keydown", event => {
    if (event.code === "Space" && gameRunning) {
        //Add Jump Sound
        jumpSound.currentTime = 0;
        jumpSound.play();
        //Add Jump Action
        cat.classList.add("jumpClass");


        setTimeout(() => {
            cat.classList.remove("jumpClass");
        }, 300);
    }
});

setInterval(() => {
    const catBottom = parseFloat(
        getComputedStyle(cat).getPropertyValue('bottom')
    );
    const blockLeft = parseFloat(
        getComputedStyle(block).getPropertyValue('left')
    );

    if (blockLeft < 250 && blockLeft > 150 && catBottom <= 50) {
        // Collision detected, game over
        gameRunning = false;
        window.location.href = "lastPage.html";
    } else if (blockLeft < 150 && blockLeft > 140) {
        // Block successfully passed
        score++;
        scoreElement.innerHTML = "Score: " + score;
    }
}, 10);

console.log("Final Score:", finalscore);

// Mobile support
window.addEventListener("touchstart", () => {
    if (gameRunning) {
        //Play Jump Sound
        jumpSound.currentTime = 0;
        jumpSound.play();

        cat.classList.add("jumpClass");

        setTimeout(() => {
            cat.classList.remove("jumpClass");
        }, 300);
    }
});

//Retrieve score and display it on the last page
document.addEventListener("DOMContentLoaded", () => {
    const finalScore = localStorage.getItem("finalScore") || 0;
    const scoreElement = document.getElementById("final-score");
    scoreElement.textContent = `Score: ${finalScore}`;
});

localStorage.setItem = document.getElementById("final-score");

//Mobile
window.addEventListener("touchstart", () => {
    cat.classList.add("jumpClass");

    setTimeout(() => {
        cat.classList.remove("jumpClass");
    }, 300);
});