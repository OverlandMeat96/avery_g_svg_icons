// this is a self-invoking anonymous function
// also called an (function() {
// also called a module (it's a pattern)

(() => {
  console.log("Dark Souls Icons!");

// find the elements in the document
let toggleButton = document.querySelector(".info"),
    allSVGS = document.querySelectorAll(".svg");

// this function should change the header log
function changeText() {
  toggleButton.textContent = "Weapons:          1. Moonlight Greatsword: This sword, one of the rare dragon weapons, came from the tail of Seath the Scaleless, the pale white dragon who betrayed his own. Seath is the grandfather of sorcery, and this sword is imbued with his magic, which shall be unleashed as a wave of moonlight.                         2. Drake Sword: This Sword, one of the rare dragon weapons, is formed by a drake's tail. Drakes are seen as undeveloped imitators of the dragons, but they are likely their distant kin. The sword is imbued with a mystical power, to be released when held with both hands.                  3. Black Knight Halberd: Halberd of the black knights who wander Lordran. Used to face chaos demons. The large motion that puts the weight of the body into the attack reflects the great size of their adversaries long ago.";
}

// this funtion should log the ID for the badge
function logSVG() {
  console.log(this.id);
}

toggleButton.addEventListener("click", changeText);

allSVGS.forEach(item => item.addEventListener("click", logSVG));

})();
