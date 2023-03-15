import "./style.css";
import Icon from "./dkc.webp";

const element = document.createElement("div");

const myIcon = new Image();
myIcon.src = Icon;

element.appendChild(myIcon);

document.body.appendChild(element);
