const addInputEl = document.querySelector("#validation-input");
const dataLengthEl = Number(addInputEl.getAttribute("data-length"));
const inputValid = addInputEl.addEventListener("focus", onFormInput);

function onFormInput(event) {
  const addInputValue = event.currentTarget.value;

  if (addInputValue.length === dataLengthEl) {
    addInputEl.classList.add("valid");
    addInputEl.classList.remove("invalid");
  } else {
    addInputEl.classList.remove("valid");
    addInputEl.classList.add("invalid");
  }
}
