let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function pick() {
 let random = Math.floor(Math.random() * 3);
 return hands[random];
}

console.log(pick());