const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");

console.log("Number of categories:", items.length);

items.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");
  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements.length);
});
