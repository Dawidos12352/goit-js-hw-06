const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector("ul.gallery");


const galleryImages = images.forEach(e => {
  gallery.insertAdjacentHTML("afterbegin", `<li class="image">
  <img src=${e.url} alt=${e.alt} width="600px" />
  </li> `)
});

gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.justifyContent = "center";
gallery.style.alignItems = "center";
gallery.style.listStyle = "none";
gallery.style.gap = "50px";

const galleryPicture = document.querySelectorAll("li.image > img");

galleryPicture.forEach( e => {
  e.style.borderStyle = "solid";
  e.style.borderWidth = "10px";
  e.style.borderColor = "black";
  e.classList.add = "picture";
  e.style.borderRadius = "40%";
});