//   Напиши скрипт, который выполнит следующие операции.

//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
//элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const categoriesEl = document.querySelector("#categories");
console.log(categoriesEl);

const categoriesItemEl = document.querySelectorAll(".item");
console.log(categoriesItemEl);

categoriesItemEl.forEach((category) => {
  console.log("=========================");
  console.log("Категория:", category.querySelector("h2").textContent);
  console.log("Количество элементов:", category.querySelectorAll("li").length);
});
