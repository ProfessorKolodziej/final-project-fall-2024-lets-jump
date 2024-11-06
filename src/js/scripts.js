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

const toggleButton = document.querySelector(".page1");

toggleButton.addEventListener("click", disappear1);

toggleButton.addEventListener("click", appear1);

toggleButton.addEventListener("click", appear2);

toggleButton.addEventListener("click", disappear2);

// /Stan