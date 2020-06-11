const addTheWordCool = function (array) {
}
console.log((["nice", "awesome", "tof"]).push("cool"));

const amountOfElementsInArray = function (array) {
  array = ['appels', 'peren', 'citroenen'];
  console.log(array.length); 

}
amountOfElementsInArray();

const selectBelgiumFromBenelux = function (array){
  benelux = ["Belgie", "Nederland", "Luxemburg"];
  console.log(benelux[0]);
}
selectBelgiumFromBenelux();

const lastElementInArray = function(){
  array = ["Haas", "Cavia", "Kip", "Schildpad"];
  return array[array.length-1];  
}

console.log(lastElementInArray());

const presidents = ["Trump", "Obama", "Bush", "Clinton"];
const impeachTrumpSlice = function(){
  return presidents.slice(1);
} 
const impeachTrumpSplice = function(){
  return presidents.splice(1,4);

}
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice()); // ["Obama", "Bush", "Clinton"]

const stringArray = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
const stringsTogether = function() {
  return stringArray.join();
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

const combineArrays = function (a,b){
  console.log(a.concat(b));
}
combineArrays([1,2,3], [4,5,6]) 