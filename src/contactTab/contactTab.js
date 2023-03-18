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
  const leylinesBgImg = createElement("img", ["background"], leylinesDiv);
  leylinesBgImg.src = BackgroundImage;

  const messageDiv = createElement("div", ["message"], element);
  createElement("p", ["title"], messageDiv, TextContent.message.title);
  const messageForm = createElement("form", [], messageDiv);
  const subjectLabel = createElement(
    "label",
    ["subject"],
    messageForm,
    "Subject:"
  );
  const subjectInput = createElement("input", ["subject"], messageForm);
  subjectInput.setAttribute("type", "text");
  subjectInput.setAttribute("id", "subject-input");

  subjectLabel.setAttribute("for", "subject-input");
  const messageBgImg = createElement("img", ["background"], messageDiv);
  messageBgImg.src = BackgroundImage;

  return element;
}
