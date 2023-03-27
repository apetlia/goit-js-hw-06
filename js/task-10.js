function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("#controls input");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const boxesDivRef = document.getElementById("boxes");

btnDestroyRef.addEventListener("click", destroyBoxes);
btnCreateRef.addEventListener("click", onButtonClick);

function destroyBoxes() {
  boxesDivRef.innerHTML = "";
}

function createBoxes(amount) {
  const initialSize = 30;
  const listOfNewBoxesElement = [];

  for (let i = 0; i < amount; i += 1) {
    const size = initialSize + i * 10;

    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();

    listOfNewBoxesElement.push(box);
  }

  boxesDivRef.append(...listOfNewBoxesElement);
}

function onButtonClick(event) {
  const amountBoxes = Number(inputRef.value);
  createBoxes(amountBoxes);
}
