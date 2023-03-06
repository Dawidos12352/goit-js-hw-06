// first attempt at executing a task without using a loop, result is correct


/*
const numberOfCategories = document.querySelectorAll('#categories>li.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

console.log(`Category: ${document.body.querySelectorAll("h2")[0].innerText}`);
console.log(`Elements: ${document.body.querySelectorAll("ul")[1].childElementCount}`);

console.log(`Category: ${document.body.querySelectorAll("h2")[1].innerText}`);
console.log(`Elements: ${document.body.querySelectorAll("ul")[2].childElementCount}`);

console.log(`Category: ${document.body.querySelectorAll("h2")[2].innerText}`);
console.log(`Elements: ${document.body.querySelectorAll("ul")[3].childElementCount}`);

*/

const numberOfCategories = document.querySelectorAll('#categories > li.item');
console.log(`Number of categories: ${numberOfCategories.length}`);
numberOfCategories.forEach( event => {
    console.log(`Category: ${event.firstElementChild.textContent}`);
    console.log(`Elements: ${event.lastElementChild.children.length}`);
});