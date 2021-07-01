const inputFontSizeEl = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputFontSizeEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  inputText.style.fontSize = `${event.currentTarget.value}px`;
}
