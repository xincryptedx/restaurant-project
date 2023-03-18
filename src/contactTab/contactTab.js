import { createElement } from "../scripts/initializeElements";
import BackgroundImage from "../content/squareParchment.svg";
import TextContent from "./textContent.json";

export default function createContactDiv() {
  const element = createElement("div", ["contact"]);

  const leylinesDiv = createElement("div", ["leylines"], element);
  createElement("p", ["title"], leylinesDiv, TextContent.leylines.title); // Don't try to join single lined text
  createElement(
    "p",
    ["text"],
    leylinesDiv,
    TextContent.leylines.text.join(" ")
  ); // Multiline text needs joined
  const aboutBgImg = createElement("img", ["background"], leylinesDiv);
  aboutBgImg.src = BackgroundImage;

  return element;
}
