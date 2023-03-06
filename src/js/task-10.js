function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector(`button[data-create=""]`);
const btnDestroy = document.querySelector(`button[data-destroy=""]`);
const input = document.querySelector("input");
const boxes = document.querySelector("div#boxes");

btnCreate.addEventListener( "click", () => createBoxes(input.value));
btnDestroy.addEventListener("click", () => destroyBoxes());

const destroyBoxes = () => { boxes.textContent = "" }; 


function createBoxes(amount){

  let boxHeight = 30;
  let boxWidth = 30;

for (let i = 0; i < amount; i++) {

  const box = document.createElement("div");
  box.classList.add("box");
  box.style.height = `${boxHeight + (i * 10)}px`;
  box.style.width = `${boxWidth + (i * 10)}px`;
  box.style.backgroundColor = `${getRandomHexColor()}`;
  boxes.prepend(box);
}
};