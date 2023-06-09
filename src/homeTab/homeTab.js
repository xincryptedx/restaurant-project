import { createElement } from "../scripts/initializeElements";
import TextContent from "./textContent.json";
import BackgroundImage from "../content/squareParchment.svg";

export default function createHomeDiv() {
  const element = createElement("div", ["home"]);

  const aboutDiv = createElement("div", ["about"], element);
  createElement("p", ["title"], aboutDiv, TextContent.about.title); // Don't try to join single lined text
  createElement("p", ["text"], aboutDiv, TextContent.about.text.join(" ")); // Multiline text needs joined
  const aboutBgImg = createElement("img", ["background"], aboutDiv);
  aboutBgImg.src = BackgroundImage;

  const hoursDiv = createElement("div", ["hours"], element);
  createElement("p", ["title"], hoursDiv, TextContent.hours.title);
  createElement("p", ["text"], hoursDiv, TextContent.hours.text);
  createElement("p", ["sub-text"], hoursDiv, TextContent.hours.subText);
  const hoursBgImg = createElement("img", ["background"], hoursDiv);
  hoursBgImg.src = BackgroundImage;

  const locationsDiv = createElement("div", ["locations"], element);
  createElement("p", ["title"], locationsDiv, TextContent.locations.title);
  const locationsWrapper = createElement("div", ["wrapper"], locationsDiv);
  TextContent.locations.text.forEach((line) => {
    createElement("p", ["text-entry"], locationsWrapper, line);
  });
  const locationsBgImg = createElement("img", ["background"], locationsDiv);
  locationsBgImg.src = BackgroundImage;

  const reviewsDiv = createElement("div", ["reviews"], element);
  createElement("p", ["title"], reviewsDiv, TextContent.reviews.title);
  const reviewsWrapper = createElement("div", ["wrapper"], reviewsDiv);
  TextContent.reviews.text.forEach((line) => {
    createElement("p", ["text-entry"], reviewsWrapper, line);
  });
  const reviewsBgImg = createElement("img", ["background"], reviewsDiv);
  reviewsBgImg.src = BackgroundImage;

  return element;
}
