const rangeInputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

rangeInputRef.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  const inputValue = event.currentTarget.value;
  textRef.style.fontSize = inputValue + "px";
}
