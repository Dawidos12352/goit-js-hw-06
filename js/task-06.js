const input = document.querySelector("input#validation-input");

input.addEventListener("blur", event => {
    if (event.currentTarget.value.length !== 6) 
    event.currentTarget.setAttribute("class", "invalid");

    else event.currentTarget.setAttribute("class", "valid");
});