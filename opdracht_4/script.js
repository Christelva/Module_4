const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]
  
const findSpiderMan =  () => superheroes.find(item => item.name === "Spiderman");
console.log("A.",findSpiderMan(superheroes)) 

const arrayNumbers = [1, 2, 3];
const doubleArrayValues = arrayNumbers.map(n => n*2);
//The argument to map is the function that it uses to transform the elements in the //first array into the elements in the second array.
console.log("B.",doubleArrayValues);

const firstArray = [1,4,3,6,9,7,11];
const secondArray = [1,2,1,2,1,2]
const containsNumberBiggerThan10 = (x) => x.some(n => n > 10);

console.log("C.",containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
console.log("C.",containsNumberBiggerThan10([1,2,1,2,1,2]));

const isItalyInTheGreat7 = (x) => x.includes('Italy');
console.log("D.",isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));




const array3 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]
const isBelow100 = (x) => array3.every( x => x < 100);
console.log(isBelow100);
// result should be: false