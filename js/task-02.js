const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");

const ingredientsItems = ingredients.map( event => {
  const listItem = document.createElement("li");
  listItem.textContent = event;
  listItem.classList = "item";
  return listItem;
});

ingredientsList.append(...ingredientsItems);

console.log(ingredientsItems);