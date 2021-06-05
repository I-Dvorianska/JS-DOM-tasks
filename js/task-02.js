const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientListTag = document.querySelector("ul");

const productList = ingredients.map((element) => {
  return `<li> ${element} </li>`;
});

ingredientListTag.insertAdjacentHTML("beforeend", productList.join(""));
