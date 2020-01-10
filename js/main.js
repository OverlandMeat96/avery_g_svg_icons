// this is a self-invoking anonymous function
// also called an (function() {
// also called a module (it's a pattern)

(() => {
  console.log("hello from JS!");

// find the elements in the document
let toggleButton = document.querySelector(".switch-text"),
  myHeading = document.querySelector('h1'),
  svgImg = document.querySelector('#badge');

// this function should change the header log

function changeText() {
  toggleButton.textContent = "What is up? I am script!";
}

// this funtion should log the ID for the badge
function logSVG() {
  console.log(this.id);
}

toggleButton.addEventListener("click", changeText);
svgImg.addEventListener("mouseover", logSVG);

//document.querySelector('h1').textContent = "What is up? I am script!";
})();
