import { createElement } from "../scripts/initializeElements";
import TextContent from "./textContent.json";

export default function createHomeDiv() {
  const element = createElement("div", ["home"]);

  createElement("div", ["about"], element);
  createElement("div", ["hours"], element);
  createElement("div", ["locations"], element);
  createElement("div", ["reviews"], element);

  return element;
}
