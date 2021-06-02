let counterSpan = document.querySelector("#value");
const counterEl = document.querySelector("#counter");
const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;

let counterValue = 0;

decrementBtn.addEventListener("click", decrementValueClick);
incrementBtn.addEventListener("click", incrementValueClick);

function decrementValueClick() {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
}

function incrementValueClick() {
  counterValue += 1;
  counterSpan.textContent = counterValue;
}
