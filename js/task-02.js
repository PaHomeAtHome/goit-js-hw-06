const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById(`ingredients`)

const makeItems = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.classList.add(`item`);
    itemEl.textContent = item;

    return itemEl;
  })
}

const createdItems = makeItems(ingredients);
ingredientsList.append(...createdItems)
