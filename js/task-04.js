const counterValue = {
  value: 0,
  incremet() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const counterValueUI = document.querySelector("#value");
counterValueUI.textContent = counterValue.value;

const incrementBtn = document.querySelector("[data-action=increment]");
incrementBtn.addEventListener("click", () => {
  counterValue.incremet();
  counterValueUI.textContent = counterValue.value;
});

const decrementBtn = document.querySelector("[data-action=decrement]");
decrementBtn.addEventListener("click", () => {
  counterValue.decrement();
  counterValueUI.textContent = counterValue.value;
});
