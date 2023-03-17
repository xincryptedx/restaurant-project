import { createElement } from "../scripts/initializeElements";
import TextContent from "./textContent.json";

export default function createMenuDiv() {
  const element = createElement("div", ["menu"]);

  createElement(
    "div",
    ["section", "title", "appetizers"],
    element,
    TextContent.appetizers.title
  );
  const appetizersWrapper = createElement(
    "div",
    ["wrapper", "appetizers"],
    element
  );
  Object.keys(TextContent.appetizers).forEach((key) => {
    if (key !== "title") {
      createElement(
        "div",
        ["entry", "appetizers"],
        appetizersWrapper,
        TextContent.appetizers[key].value
      );
    }
  });

  createElement(
    "div",
    ["section", "title", "entrees"],
    element,
    TextContent.entrees.title
  );
  createElement("div", ["wrapper", "entrees"], element);
  // Create items based on json

  createElement(
    "div",
    ["section", "title", "beverages"],
    element,
    TextContent.beverages.title
  );
  createElement("div", ["wrapper", "beverages"], element);
  // Create items based on json

  createElement(
    "div",
    ["section", "title", "desserts"],
    element,
    TextContent.desserts.title
  );
  createElement("div", ["wrapper", "desserts"], element);
  // Create items based on json

  return element;
}
