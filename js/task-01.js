const numberOfCategories = document.querySelectorAll("ul#categories > li");
console.log(`Number of categories: ${numberOfCategories.length}`);

const subCategories = numberOfCategories.forEach( event => {
    console.log(`Category: ${event.firstElementChild.textContent}`);
    console.log(`Elements: ${event.lastElementChild.childElementCount}`);
});

//without loop
/*

console.log(`Category: ${document.querySelectorAll("li.item")[0].firstElementChild.textContent}`);
console.log(`Elements: ${document.querySelectorAll("li.item")[0].lastElementChild.childElementCount}`);

console.log(`Category: ${document.querySelectorAll("li.item")[1].firstElementChild.textContent}`);
console.log(`Elements: ${document.querySelectorAll("li.item")[1].lastElementChild.childElementCount}`);

console.log(`Category: ${document.querySelectorAll("li.item")[2].firstElementChild.textContent}`);
console.log(`Elements: ${document.querySelectorAll("li.item")[2].lastElementChild.childElementCount}`);
*/