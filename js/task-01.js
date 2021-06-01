const categoryEl = document.querySelectorAll(".item");
console.log(`В списке ${categoryEl.length} категории.`);

function categoryInfo(categoryEl) {
  categoryEl.forEach((element) => {
    const categoryTitle = element.querySelector("h2");
    console.log(`Категория: ${categoryTitle.textContent}`);

    const categoryList = element.querySelectorAll("li");
    console.log(`Количество элементов: ${categoryList.length}`);
  });
}
categoryInfo(categoryEl);
