import "./style.css";
import InitializeElements from "./scripts/initializeElements";
import HomeTab from "./scripts/homeTab";

InitializeElements();

const contentDiv = document.querySelector(".content");

const generatedDiv = HomeTab();
contentDiv.appendChild(generatedDiv);
