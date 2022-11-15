// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el"); // passing in argument

console.log(countEl);

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);
}

// functions and methods are essentially the same