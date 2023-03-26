const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsRef = document.querySelector("#ingredients");

const listOfLi = ingredients.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");

  return li;
});

ingredientsRef.append(...listOfLi);
