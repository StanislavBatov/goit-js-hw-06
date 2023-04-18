const categoriesList = document.querySelector('#categories');
const categories = categoriesList.children;

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  const categoryName = category.children[0].textContent;
  const categoryElements = category.children[1].children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}







