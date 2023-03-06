const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

const listOfIngredients = ingredients.map( event => {
  const li = document.createElement("li");
  li.textContent = event;
  li.classList.add("item");
  return li
});

list.append(...listOfIngredients);
console.log(list);