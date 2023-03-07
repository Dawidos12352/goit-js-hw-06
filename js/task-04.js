const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
const counter = document.querySelector("span#value");

let counterValue = 0;

btnDecrement.addEventListener("click", () => counter.textContent = counterValue -= 1);
btnIncrement.addEventListener("click", () => counter.textContent = counterValue += 1);