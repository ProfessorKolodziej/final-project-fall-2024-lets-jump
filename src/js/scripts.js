// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Stan

const welcomePage = document.querySelector(".page1");

console.log(welcomePage);

function disappear1() {
    welcomePage.classList.toggle("page2");
}

const choosePage = document.querySelector(".character-choose");

function appear1() {
    choosePage.classList.toggle("character-choose-change");
}

const animalPage = document.querySelector(".animals");

function appear2() {
    animalPage.classList.toggle("animals-change");
}

function disappear2() {
    welcomePage.style.display = "none";
}

document.addEventListener("click", disappear1);

document.addEventListener("click", appear1);

document.addEventListener("click", appear2);

document.addEventListener("click", disappear2);

// /Stan

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
        console.log('Game Over');
    }
}, 10);


