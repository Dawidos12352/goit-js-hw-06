function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector(`button[data-create=""]`);
const btnDestroy = document.querySelector(`button[data-destroy=""]`);
const input = document.querySelector("input");
const boxes = document.querySelector("div#boxes");

btnCreate.addEventListener("click", () => createBoxes(input.value));
btnDestroy.addEventListener("click", () => destroyBoxes());

function createBoxes(number){
  let boxWidth = 30;
  let boxHeight = 30;

  for( let i = 0; i < number; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${i * 10 + boxWidth}px`;
    box.style.height = `${i * 10 + boxHeight}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.prepend(box);
  };
};

function destroyBoxes() {
  boxes.textContent = "";
};
