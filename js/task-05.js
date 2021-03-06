//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна
//отображаться строка 'незнакомец'.

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function onDataInput(event) {
  if (inputEl.value.length >= 1) {
    return (outputEl.textContent = event.currentTarget.value);
  }
  return (outputEl.textContent = "незнакомец");
}

inputEl.addEventListener("input", onDataInput);
