// this is a self-invoking anonymous function
// also called an (function() {
// also called a module (it's a pattern)

(() => {
  console.log("Hello from JS!");

// find the elements in the document
let allSVGS = document.querySelectorAll(".svg");

// this function should change the header log
function changeText() {
  toggleButton.textContent = "What is up? I am script!";
}

// this funtion should log the ID for the badge
function logSVG() {
  console.log(this.id);
}

allSVGS.forEach(item => item.addEventListener("click", logSVG));

})();
