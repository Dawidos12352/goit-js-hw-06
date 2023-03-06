function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const colorName = document.querySelector("span.color");
const button = document.querySelector("button.change-color");

button.addEventListener( "click", event => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = `${getRandomHexColor()}`;
});