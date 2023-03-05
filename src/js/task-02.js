const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngredients = document.querySelector("ul#ingredients");

const listItems = ingredients.map( e =>{
    const listItem = document.createElement("li");
    listItem.textContent = e;
    listItem.classList.add("item");
    return listItem;
});

listOfIngredients.append(... listItems);
console.log(listOfIngredients);