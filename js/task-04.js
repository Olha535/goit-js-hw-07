//  Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

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
