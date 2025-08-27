// Select all heart buttons on the cards
const favButtons = document.querySelectorAll('.fav-btn');

// Select the heart count in the Navbar
const heartCountEl = document.getElementById('heart-count');

// Initialize heart count
let heartCount = 0;

// Loop through all heart buttons
favButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active state
    button.classList.toggle('active');

    // Get the heart image inside the button
    const img = button.querySelector('img');

    if (button.classList.contains('active')) {
      heartCount++; 
      img.src = 'assets/heart-filled.png'; // Change to filled heart
    } else {
      heartCount--; 
      img.src = 'assets/heart.png'; // Back to outline heart
    }

    // Update Navbar heart count
    heartCountEl.textContent = heartCount;
  });
});
