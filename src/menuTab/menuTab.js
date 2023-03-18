import { createElement } from "../scripts/initializeElements";
import TextContent from "./textContent.json";

function createMenu(category, wraper) {
  Object.keys(TextContent.appetizers).forEach((key) => {
    if (key !== "title") {
      const entry = createElement("div", ["entry", category], wraper);
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
  createMenu("appetizers", appetizersWrapper);

  createElement(
    "div",
    ["section", "title", "entrees"],
    element,
    TextContent.entrees.title
  );
  const entreesWrapper = createElement("div", ["wrapper", "entrees"], element);
  createMenu("entrees", entreesWrapper);

  createElement(
    "div",
    ["section", "title", "beverages"],
    element,
    TextContent.beverages.title
  );
  const beveragesWrapper = createElement(
    "div",
    ["wrapper", "beverages"],
    element
  );
  createMenu("beverages", beveragesWrapper);

  createElement(
    "div",
    ["section", "title", "desserts"],
    element,
    TextContent.desserts.title
  );
  const dessertsWrapper = createElement(
    "div",
    ["wrapper", "desserts"],
    element
  );
  createMenu("desserts", dessertsWrapper);

  return element;
}
