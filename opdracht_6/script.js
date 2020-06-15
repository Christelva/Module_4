
const buttonBigFive = document.querySelectorAll('.big-five-button')
buttonBigFive.forEach((btn) => {
btn.addEventListener("click", (event) => {
const getAnimalName = btn.innerHTML;
const createLi = document.createElement("li");
const spottedAnimal = document.getElementById("spotted-animals-list");
spottedAnimal.appendChild(createLi);
createLi.innerHTML = getAnimalName;

  });
});

const buttonRemoveFirst = document.getElementById("remove-first-item-button");
buttonRemoveFirst.addEventListener("click", (event) => {
const parent = document.getElementById("spotted-animals-list");
let duck = parent.querySelector(".spotted-animals-list-item")
let remove = parent.removeChild(parent.firstChild );
let removeDuck = parent.removeChild(duck);
})


const buttonRemoveAll = document.getElementById("remove-all-button");
buttonRemoveAll.addEventListener("click", (event) => {
let selectChild = document.querySelector("#spotted-animals-list")
let removeAll = selectChild.innerHTML= "";
})

