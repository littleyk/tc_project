// Get the "No" button element
const noButton = document.getElementById("no-button");

// Check if the button was successfully selected
if (noButton) {
  // Add a click event listener to the "No" button
  noButton.addEventListener("click", () => {
    alert('Oh no! You clicked "No". Are you sure?');
  });
} else {
  console.error('No button not found');
}

// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Check if the button was successfully selected
if (yesButton) {
  // Add a click event listener to create confetti
  yesButton.addEventListener("click", () => {
    console.log('Click event triggered on "Yes" button');
    var confettiElement = document.getElementById('confetti-canvas');
    var confettiSettings = { target: confettiElement, max: 729, size: 1, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 25, rotate: true, start_from_edge: true, respawn: true };

    yesButton.style.display = "none";
    noButton.style.display = "none";

    var gif = document.getElementById("gif");
    var header = document.getElementById("main");
    header.style.display = "none";
    gif.style.display = "none";

    // Change the style of the confetti canvas
    confettiElement.style.position = "absolute";
    confettiElement.style.top = "0";
    confettiElement.style.left = "0";
    confettiElement.style.width = "100%";
    confettiElement.style.height = "100%";
    confettiElement.style.zIndex = "1000";

    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    let p = document.createElement("p");
    p.innerText = "Congrats you made the right choice 🎉";
    p.style.fontSize = "2rem";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    p.style.position = "absolute";
    p.style.top = "50%";
    p.style.left = "50%";
    p.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(p);
  });
} else {
  console.error('Yes button not found');
}
