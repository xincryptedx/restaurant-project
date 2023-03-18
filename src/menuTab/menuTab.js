import { createElement } from "../scripts/initializeElements";
import TextContent from "./textContent.json";
import BackgroundImage from "../content/squareParchment.svg";

function createMenu(category, parent) {
  const section = createElement("div", ["section", category], parent);
  createElement("p", ["title", category], section, TextContent[category].title);
  const wrapper = createElement("div", ["wrapper", category], parent);

  Object.keys(TextContent[category]).forEach((key) => {
    if (key !== "title") {
      const entry = createElement("div", ["entry", category], wrapper);
      createElement(
        "p",
        ["title", category],
        entry,
        TextContent[category][key].name
      );
      createElement(
        "p",
        ["description", category],
        entry,
        TextContent[category][key].description
      );
      createElement(
        "p",
        ["price", category],
        entry,
        TextContent[category][key].price
      );
    }
  });
  const bgImg = createElement("img", ["background"], wrapper);
  bgImg.src = BackgroundImage;
}

export default function createMenuDiv() {
  const element = createElement("div", ["menu"]);

  createMenu("appetizers", element);
  createMenu("entrees", element);
  createMenu("beverages", element);
  createMenu("desserts", element);

  return element;
}
