import { createElement } from "../scripts/initializeElements";

export default function createMenuDiv() {
  const element = createElement("div", ["menu"]);

  createElement("div", ["section", "title", "appetizers"], element);
  createElement("div", ["wrapper", "appetizers"], element);
  // Create items based on json

  createElement("div", ["section", "title", "entrees"], element);
  createElement("div", ["wrapper", "entrees"], element);
  // Create items based on json

  createElement("div", ["section", "title", "beverages"], element);
  createElement("div", ["wrapper", "beverages"], element);
  // Create items based on json

  createElement("div", ["section", "title", "desserts"], element);
  createElement("div", ["wrapper", "desserts"], element);
  // Create items based on json

  return element;
}
