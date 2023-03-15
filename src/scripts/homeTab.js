import { createElement } from "./initializeElements";

export default function createHomeTab() {
  const element = createElement("div", ["home"]);

  // Create Children Elements
  createElement("div", ["about"], element);
  createElement("div", ["hours"], element);
  createElement("div", ["locations"], element);
  createElement("div", ["reviews"], element);

  return element;
}
