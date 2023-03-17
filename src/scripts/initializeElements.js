import HeaderImage from "../header/landscapeParchment.svg";
import Attribution from "../footer/attribution.json";

export function createElement(elementType, classes, parent, textContent) {
  const element = document.createElement(elementType);

  if (classes) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

export default function createInitialElements() {
  // Create Container Elements
  const containerDiv = createElement("div", ["container"], document.body);

  // Create Header Elements w/ Classes
  const headerDiv = createElement("div", ["header"], containerDiv);
  createElement("p", ["title"], headerDiv, "The Legerdemain Lounge");
  const headerBgImage = createElement("img", ["background"], headerDiv);
  headerBgImage.src = HeaderImage;

  // Create Nav Elements w/ Classes
  const navDiv = createElement("div", ["nav"], containerDiv);
  const navTabTray = createElement("div", ["tab-tray"], navDiv);
  const homeTab = createElement("div", ["tab", "home"], navTabTray);
  createElement("p", [], homeTab, "Home");
  const menuTab = createElement("div", ["tab", "menu"], navTabTray);
  createElement("p", [], menuTab, "Menu");
  const contactTab = createElement("div", ["tab", "contact"], navTabTray);
  createElement("p", [], contactTab, "Contact");

  // Create Content Elements
  createElement("div", ["content"], containerDiv);

  // Create Footer Elements
  const footerDiv = createElement("div", ["footer"], containerDiv);
  const authorP = createElement("p", ["author"], footerDiv);
  authorP.innerHTML =
    "Created by <a href='https://github.com/xincryptedx'>xIncryptedx</a>";
}
