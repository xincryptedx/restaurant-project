import "./style.css";
import Icon from "./dkc.webp";

const element = document.createElement("div");
const someText = document.createElement("p");

const myIcon = new Image();
myIcon.src = Icon;
someText.textContent = "Arthas, my son... No king rules forever.";

element.appendChild(myIcon);
element.appendChild(someText);

document.body.appendChild(element);
