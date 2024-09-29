let counterValue = 0;

const counterDisplay = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");

function updateCounter() {
  counterDisplay.innerHTML = counterValue;
  
  // Apply CSS class based on whether the number is even or odd
  if (counterValue % 2 === 0) {
    counterDisplay.classList.add("even");
    counterDisplay.classList.remove("odd");
  } else {
    counterDisplay.classList.add("odd");
    counterDisplay.classList.remove("even");
  }
}

// Decrease counter value
decreaseBtn.addEventListener("click", function() {
  counterValue--;
  updateCounter();
});

// Increase counter value
increaseBtn.addEventListener("click", function() {
  counterValue++;
  updateCounter();
});

// Initial counter update
updateCounter();
