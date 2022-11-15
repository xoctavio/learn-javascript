let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function lapTotal() {
 // let variable only exists in the scope of the function - it is block-scoped
 let totalTime = lap1 + lap2 + lap3;
 console.log(totalTime);
}

lapTotal();