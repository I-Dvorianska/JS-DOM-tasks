const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

function createListElements(array) {
  const ingredientListTag = document.querySelector("ul");

  array.map((element) => {
    const ingredient = document.createElement("li");

    ingredient.textContent = element;
    ingredientListTag.appendChild(ingredient);
  });
}
createListElements(ingredients);
