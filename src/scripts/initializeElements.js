export default function createInitialElements() {
  // Create Container Elements
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  // Create Header Elements
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const headerTitle = document.createElement("p");
  headerTitle.classList.add("title");
  // Append Header Children
  headerDiv.appendChild(headerTitle);

  // Append Container Children
  containerDiv.appendChild(headerDiv);

  // Append to Body
  document.body.appendChild(containerDiv);
}
