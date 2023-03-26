const categoriesRef = document.querySelector("#categories");
const categoriesItems = categoriesRef.children;

console.log(`Number of categories: ${categoriesItems.length}`);

for (let i = 0; i < categoriesItems.length; i += 1) {
  const item = categoriesItems[i];
  const category = item.firstElementChild.textContent;
  const categoryCount = item.lastElementChild.childElementCount;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${categoryCount}`);
}
