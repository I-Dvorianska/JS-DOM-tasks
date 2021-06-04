const inputRef = document.querySelector("#validation-input");
const inputAttribute = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", verifyValidationOfInput);

function verifyValidationOfInput(event) {
  const attributeValue = Number(inputAttribute);

  if (event.currentTarget.value.length === attributeValue) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}
