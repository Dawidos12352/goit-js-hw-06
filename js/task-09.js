function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");
const body = document.querySelector("body");


button.addEventListener( "click",  event => {
body.style.backgroundColor = `${getRandomHexColor()}`;
colorName.textContent = `${getRandomHexColor()}`;
});