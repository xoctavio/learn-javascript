// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.querySelector("#container");

function renderImages(arr) {
    for (let i = 0; i < arr.length; i++) {
        container.innerHTML += `
        <img class="team-img" src=${arr[i]}>
        `;
    };
}

renderImages(imgs);