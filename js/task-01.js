const categoriesEl = document.querySelector("#categories");
console.log(categoriesEl);

const categoriesItemEl = document.querySelectorAll(".item");
console.log(categoriesItemEl);

categoriesItemEl.forEach((category) => {
  console.log("=========================");
  console.log("Категория:", category.querySelector("h2").textContent);
  console.log("Количество элементов:", category.querySelectorAll("li").length);
});
