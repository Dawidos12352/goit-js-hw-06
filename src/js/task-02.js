const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngredients = document.querySelector("ul#ingredients");

const listItems = ingredients.map( event =>{
    const listItem = document.createElement("li");
    listItem.textContent = event;
    listItem.classList.add("item");
    return listItem;
});

listOfIngredients.append(... listItems);
console.log(listOfIngredients);