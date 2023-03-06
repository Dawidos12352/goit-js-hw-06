const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

/* when there is no text it does not return "anonymous"

input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
  });
  */

  input.addEventListener("input", (event) => {
if(!event.currentTarget.value)
 output.textContent = "Anonymus"
else
output.textContent = event.currentTarget.value;
});