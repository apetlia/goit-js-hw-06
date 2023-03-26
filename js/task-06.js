const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const isLengthCorrect = +inputRef.dataset.length === inputRef.value.length;

  if (isLengthCorrect) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
