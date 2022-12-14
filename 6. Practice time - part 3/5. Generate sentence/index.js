// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

// solution 1
// function generateSentence(desc, arr) {
//  return `The ${arr.length} ${desc} are ${arr}`;
// }
// const bestDesserts = `best desserts`;
// let desserts = ["brownies", "cookies"];

// solution 2
function generateSentence(desc, arr) {
 let string = `The ${arr.length} ${desc} are: `;
 for (let i = 0; i < arr.length; i++) {
  if (i === (arr.length - 1)) {
   string +=`and ${arr[i]}.`;
  } else {
   string +=`${arr[i]}, `;
  }
 }
 return string;
}

const bestDesserts = `best desserts`;
let desserts = ["petit gateau", "chocolate chip and sea salt cookies", "cheesecake from that one deli near abbot kinney (canter's?)", "pecan pie", "everything else"];

let sentence = generateSentence(bestDesserts, desserts);

console.log(sentence);