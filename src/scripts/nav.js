import HomeTab from "./homeTab";

export default function navController() {
  const navTabs = document.querySelectorAll(".nav .tab");
  const contentDiv = document.querySelector(".content");
  let generatedDiv;

  function removeContent() {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  }

  function switchTab(tab) {
    if (tab === "home") {
      generatedDiv = HomeTab();
      removeContent();
      contentDiv.appendChild(generatedDiv);
    }
  }

  navTabs.forEach((tab) => {
    const classes = Array.from(tab.classList);
    const activeClass = classes.find((className) => className !== "tab");
    tab.addEventListener("click", () => switchTab(activeClass));
  });
}
