// this is a self-invoking anonymous function
// also called an (function() {
// also called a module (it's a pattern)

(() => {
  console.log("hello from JS!");

// find the elements in the document
let toggleButton = document.querySelector(".switch-text"),
  myHeading = document.querySelector('h1'),
  //svgImg = document.querySelector('#badge'),
  allSVGS = document.querySelectorAll(".svg");

// this function should change the header log
function changeText() {
  toggleButton.textContent = "What is up? I am script!";
}

// this funtion should log the ID for the badge
function logSVG() {
  console.log(this.id);
}

// things a user can do to make stuff happen on the page
toggleButton.addEventListener("click", changeText);

//svgImg.addEventListener("click", logSVG);
//svgImg2.addEventListener("click", logSVG);

allSVGS.forEach(item => item.addEventListener("click", logSVG));

//document.querySelector('h1').textContent = "What is up? I am script!";
})();
