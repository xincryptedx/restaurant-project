function createElement(elementType, classes, parent) {
  const element = document.createElement(elementType);

  if (classes) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (parent) {
    parent.appendChild(element);
  }

  return element;
}

export default function createInitialElements() {
  // Create Container Elements
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  // Create Header Elements w/ Classes
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const headerTitle = document.createElement("p");
  headerTitle.classList.add("title");
  // Append Header Children
  headerDiv.appendChild(headerTitle);

  // Create Nav Elements w/ Classes
  const navDiv = createElement("div", ["nav"], containerDiv);
  const navTabTray = createElement("div", ["tab-tray"], navDiv);
  const homeTab = createElement("div", ["tab", "home"], navTabTray);
  const homeTabText = createElement("p", [], homeTab);
  const menuTab = createElement("div", ["tab", "menu"], navTabTray);
  const menuTabText = createElement("p", [], menuTab);
  const contactTab = createElement("div", ["tab", "contact"], navTabTray);
  const contactTabText = createElement("p", [], contactTab);

  // Create Content Elements

  // Create Footer Elements
  createElement("div", ["footer"], containerDiv);

  // Append Container Children
  containerDiv.appendChild(headerDiv);

  // Append to Body
  document.body.appendChild(containerDiv);
}
