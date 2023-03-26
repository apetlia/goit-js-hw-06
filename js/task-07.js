const inputRef = document.querySelector("#font-size-control");
inputRef.addEventListener("input", changeFontSize);

const textRef = document.getElementById("text");

textRef.style.fontSize = inputRef.value + "px";

function changeFontSize(event) {
  let fontSize = event.currentTarget.value;
  textRef.style.fontSize = fontSize + "px";
}
