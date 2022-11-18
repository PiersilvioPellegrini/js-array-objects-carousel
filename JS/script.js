//  VARIABILI GLOBALI E ARRAY

// variabilie globali
const containerImg = document.querySelector(".img");
const Title = document.querySelector(".title");
const Text = document.querySelector(".text");
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");

let currentimage = 0;

// array di elementi immagini
const images = [
  {
    image: "IMG/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "IMG/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "IMG/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "IMG/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "IMG/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// creazione degli elementi html con src array
images.forEach(function (element) {
  createImg(element);
});

//evento sul bootone next
btnNext.addEventListener("click", function () {
  console.log("click next");
  const oldEl = containerImg.querySelector(".active");
  oldEl.classList.remove("active");
    currentimage++;
    const newEl = containerImg.querySelectorAll(images[currentimage].image);
    newEl.classList.add("active");
    Title.innerHTML = images[currentimage].title;
    Text.innerHTML = images[currentimage].text; 
});

//evento sul bottone prev
btnPrev.addEventListener("click", function () {
  console.log("click prev");
});

//  FUNZIONI

function createImg(element) {
  const img = document.createElement("img");
  img.src = element.image;

  const title = document.createElement("h2");
  title.textContent = element.title;

  const text = document.createElement("p");
  text.textContent = element.text;

  containerImg.append(img);
  Title.appendChild(title);
  Text.appendChild(text);

  console.log(img);
  console.log(title);
  console.log(text);

//   if (images[i] === currentimage) {
//     img.classList.add("active");
//   }
}
