
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
let parent = document.getElementById("spotted-animals-list");
let child = parent.querySelector(".spotted-animals-list-item")
let removed = parent.removeChild(child);
console.log(removed);
})

const buttonRemoveAll = document.getElementById("remove-all-button");
buttonRemoveAll.addEventListener("click", (event) =>{
let selectParent = document.getElementsByTagName("div");
let removeAll = selectParent.innerHTML = "";
console.log(removeAll);
})
