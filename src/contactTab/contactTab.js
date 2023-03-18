import { createElement } from "../scripts/initializeElements";
import BackgroundImage from "../content/squareParchment.svg";
import TextContent from "./textContent.json";

export default function createContactDiv() {
  const element = createElement("div", ["contact"]);

  const leylinesDiv = createElement("div", ["leylines"], element);
  createElement("p", ["title"], leylinesDiv, TextContent.leylines.title);
  const leylinesWrapper = createElement("div", ["wrapper"], leylinesDiv);
  TextContent.leylines.text.forEach((line) => {
    createElement("p", ["text"], leylinesWrapper, line);
  });
  const aboutBgImg = createElement("img", ["background"], leylinesDiv);
  aboutBgImg.src = BackgroundImage;

  return element;
}
