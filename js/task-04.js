const valueEl = document.querySelector("#value");

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementBtnEl = document.querySelector(
  'button[data-action ="increment"]'
);

let counterValue = 0;

function onClickDecrementBtnEl() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onClickIncrementBtnEl() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", onClickDecrementBtnEl);
incrementBtnEl.addEventListener("click", onClickIncrementBtnEl);
