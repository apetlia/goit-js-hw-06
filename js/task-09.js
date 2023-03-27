function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click", onButtonClick);

function onButtonClick() {
  const colorHex = getRandomHexColor();
  colorSpanRef.textContent = colorHex;
  document.body.style.backgroundColor = colorHex;
}
