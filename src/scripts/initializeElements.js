function createElement(elementType, classes, parent, textContent) {
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
  const headerTitle = createElement(
    "p",
    ["title"],
    headerDiv,
    "The Legerdemain Lounge"
  );

  // Create Nav Elements w/ Classes
  const navDiv = createElement("div", ["nav"], containerDiv);
  const navTabTray = createElement("div", ["tab-tray"], navDiv);
  const homeTab = createElement("div", ["tab", "home"], navTabTray);
  const homeTabText = createElement("p", [], homeTab, "Home");
  const menuTab = createElement("div", ["tab", "menu"], navTabTray);
  const menuTabText = createElement("p", [], menuTab, "Menu");
  const contactTab = createElement("div", ["tab", "contact"], navTabTray);
  const contactTabText = createElement("p", [], contactTab, "Contact");

  // Create Content Elements

  // Create Footer Elements
  createElement("div", ["footer"], containerDiv);
}
