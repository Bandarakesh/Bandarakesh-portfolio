// JavaScript code for any dynamic behavior in your portfolio
// E.g., form validation, event handling, etc.

console.log('Portfolio loaded!');
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const toggle = document.getElementById('darkModeToggle');
const label = document.getElementById('modeLabel');

// Click sound effect
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
  clickSound.play();
  
  if (this.checked) {
    label.textContent = "Dark Mode: On";
  } else {
    label.textContent = "Dark Mode: Off";
  }
});

