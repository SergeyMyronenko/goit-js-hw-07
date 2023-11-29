const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = textInput.value.trim();

  inputValue !== ""
    ? (textOutput.textContent = event.currentTarget.value)
    : (textOutput.textContent = "Anonymous");
});
