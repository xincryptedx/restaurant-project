import { createElement } from "../scripts/initializeElements";
import TextContent from "./textContent.json";

export default function createHomeDiv() {
  const element = createElement("div", ["home"]);

  const aboutDiv = createElement("div", ["about"], element);
  createElement("p", ["title"], aboutDiv, TextContent.about.title); // Don't try to join single lined text
  createElement("p", ["text"], aboutDiv, TextContent.about.text.join(" ")); // Multiline text needs joined

  const hoursDiv = createElement("div", ["hours"], element);
  createElement("p", ["title"], hoursDiv, TextContent.hours.title);
  createElement("p", ["text"], hoursDiv, TextContent.hours.text);
  createElement("p", ["sub-text"], hoursDiv, TextContent.hours.subText);

  const locationsDiv = createElement("div", ["locations"], element);
  createElement("p", ["title"], locationsDiv, TextContent.locations.title);
  TextContent.locations.text.forEach((line) => {
    createElement("p", ["text"], locationsDiv, line);
  });

  const reviewsDiv = createElement("div", ["reviews"], element);
  createElement("p", ["title"], reviewsDiv, TextContent.reviews.title);
  TextContent.reviews.text.forEach((line) => {
    createElement("p", ["text"], reviewsDiv, line);
  });

  return element;
}
