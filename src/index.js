import "./styles/main.scss";

function component() {
  console.log("working");
  const element = document.createElement("div");
  //Lodash imported
  element.innerHTML = `<div class="firstClass">
    Hello World!
  </div>`;

  return element;
}

document.body.appendChild(component());
