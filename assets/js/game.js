import { keys } from "./keys.js";
import { words } from "./words.js";

const keyboard = document.querySelector(".keyboard");
const theword = document.querySelector(".hiddenWord");
const nextbtn = document.querySelector(".nextbutton");

let currIndex = 0; // current index


/* dynamically create new DOM button */
const createButton = (name) => {
  const button = document.createElement("button");
  button.dataset.key = name;
  button.textContent = name;

  button.onclick = () => typeLetter(name);
  keyboard.append(button);
};

keys.map((key) => {
  createButton(key);
});
