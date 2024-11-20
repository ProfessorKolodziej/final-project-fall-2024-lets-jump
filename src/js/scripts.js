// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const cat = document.querySelector("#cat")
const block = document.querySelector("#block")

window.addEventListener("keydown", event => {
    console.log(event);

    if (event.code == "Space") {
        console.log('Press Key Space');
        cat.classList.add("jumpClass")

        setTimeout(() => {
            cat.classList.remove('jumpClass');
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
    if (blockLeft <20 && blockLeft > -20 && catBottom <= 20) {
        alert('Game Over! Refresh to restart.');
    }
}, 10);

//Score Counter
let score = 0;
setInterval(() => {
    const blockLeft = parseFloat(
        getComputedStyle(block).getPropertyValue('left')
    );

    if (blockLeft < 0) {
        score++;
        console.log(`Score: ${score}`);
    }
}, 50);

//Mobile
window.addEventListener("touchstart", () => {
    cat.classList.add("jumpClass");

    setTimeout(() => {
        cat.classList.remove("jumpClass");
    }, 300);
});

