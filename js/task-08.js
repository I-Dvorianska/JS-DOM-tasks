// const colorPickerOptions = [
//   { label: "salmon", color: "rgb(255, 87, 51)" },
//   { label: "teal", color: "rgb(0, 128, 128)" },
//   { label: "green", color: "rgb(125, 206, 160)" },
//   { label: "yellow", color: "rgb(244, 208, 63)" },
// ];

const controlPanelEl = document.querySelector("#controls");
const controlInputEl = controlPanelEl.firstElementChild;
const renderBtnEl = controlInputEl.nextElementSibling;
const destroyBtnEl = controlPanelEl.lastElementChild;
const colectionBoxesEl = document.querySelector("#boxes");
const colors = [];
let inputValue = 0;

function getAmount(event) {
  inputValue = event.currentTarget.value;
  return Number(inputValue);
}

controlInputEl.addEventListener("input", getAmount);
renderBtnEl.addEventListener("click", ttt);

destroyBtnEl.addEventListener("click", deleteCollection);

function ttt() {
  return createBoxes(inputValue);
}

function createBoxes(amount) {
  let increment = 0;

  for (let i = 0; i < amount; i += 1) {
    const colorItem = document.createElement("div");

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    colorItem.style.backgroundColor = color;

    colorItem.style.margin = "20px";
    colorItem.style.width = `${30 + increment}px`;
    colorItem.style.height = `${30 + increment}px`;
    colors.push(colorItem);
    increment += 10;
  }
  colectionBoxesEl.append(...colors);
}

function deleteCollection() {
  colectionBoxesEl.innerHTML = "";
  controlInputEl.value = "";
}
