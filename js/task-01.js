const categories = document.querySelectorAll("#categories .item");
console.log(`Numbers of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);

  const categoriesList = category.lastElementChild;
  console.log(`Elements: ${categoriesList.children.length}`);
});
