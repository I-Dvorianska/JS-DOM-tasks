const formInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

formInputRef.addEventListener("input", changeName);

function changeName(event) {
  if (nameOutputRef.textContent !== "") {
    nameOutputRef.textContent = event.currentTarget.value;
  }
  if (nameOutputRef.textContent === "") {
    nameOutputRef.textContent = "незнакомец";
  }
}
