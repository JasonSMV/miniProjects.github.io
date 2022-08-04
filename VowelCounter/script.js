"use strict";

const checkBtn = document.getElementById("checkBtn");
const textInput = document.getElementById("textInput");

checkBtn.addEventListener("click", checkVowels);

function checkVowels() {
  if (textInput.value.length <= 0) return;
  let counter = 0;
  for (let letter of textInput.value) {
    letter = letter.toLowerCase();
    switch (letter) {
      case "a":
        counter++;
        break;
      case "e":
        counter++;
        break;
      case "i":
        counter++;
        break;
      case "o":
        counter++;
        break;
      case "u":
        counter++;
        break;
    }
  }
  window.alert(`There are ${counter} vowels. `);
}
