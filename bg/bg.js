let input = document.getElementById("color");
let input2 = document.getElementById("bRadius");
let image = document.querySelector("img");

// Function to change background color when user types
function colorChange(z) {
    console.log(z);
    // Update background color on keyup event (or as you type)
    document.body.style.background = input.value;
}

// Function to change image border radius when user types
function RadiusChange(z) {
    console.log(z);
    // Update image border radius on keyup event (or as you type)
    image.style.borderRadius = `${input2.value}px`;
}