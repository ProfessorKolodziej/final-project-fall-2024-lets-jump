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

//for cat

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
    if (blockLeft <250 && blockLeft > 150 && catBottom <= 50) {
        window.location.href = "lastPage.html";
    }
}, 10);

//for dog

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
    if (blockLeft <250 && blockLeft > 150 && catBottom <= 50) {
        window.location.href = "lastPage.html";
    }
}, 10);

//Score Counter
let score = 0;

setInterval(() => {
    const blockLeft = parseFloat(
        getComputedStyle(block).getPropertyValue('left')
    );

    if (blockLeft < 50) {
        score++;
        console.log(`Score: ${score}`);
    }
}, 10);

document.getElementById("score").innerHTML = "Score: " + score;

//Mobile
window.addEventListener("touchstart", () => {
    cat.classList.add("jumpClass");

    setTimeout(() => {
        cat.classList.remove("jumpClass");
    }, 300);
});

