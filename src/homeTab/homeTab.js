import { createElement } from "../scripts/initializeElements";

export default function createHomeDiv() {
  const element = createElement("div", ["home"]);

  // Create Children Elements
  createElement("div", ["about"], element);
  createElement("div", ["hours"], element);
  createElement("div", ["locations"], element);
  createElement("div", ["reviews"], element);

  return element;
}
