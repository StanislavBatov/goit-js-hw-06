const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liElements = ingredients.map(ingredient => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  return liElement;
})

ingredientsList.append(...liElements);
