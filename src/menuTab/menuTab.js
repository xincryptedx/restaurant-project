import { createElement } from "../scripts/initializeElements";
import TextContent from "./textContent.json";

function createMenu(category, parent) {
  const section = createElement("div", ["section", category], parent);
  createElement("p", ["title", category], section, TextContent[category].title);
  const wrapper = createElement("div", ["wrapper", category], parent);

  Object.keys(TextContent.appetizers).forEach((key) => {
    if (key !== "title") {
      const entry = createElement("div", ["entry", category], wrapper);
      createElement(
        "p",
        ["title", category],
        entry,
        TextContent.appetizers[key].name
      );
      createElement(
        "p",
        ["description", category],
        entry,
        TextContent.appetizers[key].description
      );
      createElement(
        "p",
        ["price", category],
        entry,
        TextContent.appetizers[key].price
      );
    }
  });
}

export default function createMenuDiv() {
  const element = createElement("div", ["menu"]);

  createMenu("appetizers", element);
  createMenu("entrees", element);
  createMenu("beverages", element);
  createMenu("desserts", element);

  return element;
}
