let firstCard = 10;
let secondCard = 6;
let sum = firstCard + secondCard + 6;

if (sum < 21) {
 console.log(`draw new card? 💀`);
} else if (sum === 21) {
 console.log(`u win! 👻`);
} else {
 console.log(`oof wrecked 🪦`);
}