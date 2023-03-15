export default function createInitialElements() {
  // Create Container Elements
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  // Create Header Elements w/ Classes
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const headerTitle = document.createElement("p");
  headerTitle.classList.add("title");
  // Append Header Children
  headerDiv.appendChild(headerTitle);

  // Create Nav Elements w/ Classes
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav");
  const navTabTray = document.createElement("div");
  navTabTray.classList.add("tab-tray");
  const homeTab = document.createElement("div");
  homeTab.classList.add("tab", "home");
  const menuTab = document.createElement("div");
  menuTab.classList.add("tab", "menu");
  const contactTab = document.createElement("div");
  contactTab.classList.add("tab", "contact");
  const homeTabText = document.createElement("p");
  homeTabText.textContent = "Home";
  const menuTabText = document.createElement("p");
  menuTabText.textContent = "Menu";
  const contactTabText = document.createElement("p");
  contactTabText.textContent = "Contact";
  // Append Nav Children
  navDiv.appendChild(navTabTray);
  navTabTray.appendChild(homeTab);
  navTabTray.appendChild(menuTab);
  navTabTray.appendChild(contactTab);
  homeTab.appendChild(homeTabText);
  menuTab.appendChild(menuTabText);
  contactTab.appendChild(contactTabText);

  // Append Container Children
  containerDiv.appendChild(headerDiv);
  containerDiv.appendChild(navDiv);

  // Append to Body
  document.body.appendChild(containerDiv);
}
