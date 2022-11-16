// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let purchaseError = document.getElementById("error");

console.log(purchaseError);

function errorMessage() {
 purchaseError.textContent = "something went wrong, please try again";
}

