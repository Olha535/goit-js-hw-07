const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(
  ...ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.textContent = ingredient;
    return ingredientsItemEl;
  })
);
