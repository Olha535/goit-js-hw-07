const inputEl = document.querySelector("#validation-input");

function onInputElChange() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  }
  if (inputEl.value.length === 0) {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
    return;
  }
  inputEl.classList.add("invalid");
  inputEl.classList.remove("valid");
}

inputEl.addEventListener("blur", onInputElChange);
