const inputEl = document.querySelector("#validation-input");

function onInputElChange() {
  if (inputEl.value.length >= inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (
    inputEl.value.length >= 1 &&
    inputEl.value.length < inputEl.dataset.length
  ) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("blur", onInputElChange);
