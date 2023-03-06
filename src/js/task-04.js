const btnDecrement = document.querySelectorAll("button")[0];
console.log(btnDecrement);
const btnIncrement = document.querySelectorAll("button")[1];
console.log(btnDecrement);

let counterValue = 0;

const counter = document.querySelector("span#value");

btnDecrement.addEventListener("click", () => counter.textContent = counterValue -= 1);
btnIncrement.addEventListener("click", () => counter.textContent = counterValue += 1);