const cardsContainer = document.querySelector(".grid.grid-cols-3");

const heartCountElement = document.getElementById("heart-count");

let heartCount = 0;

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-heart")) {
    heartCount++;
    heartCountElement.textContent = heartCount;
  }
});

// call button functionallity

const callBtn = document
  .getElementById("callBtn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const availableCoin = document.getElementById("coin-count").innerText;
    const availableCoiNumber = parseInt(availableCoin);
    const finalCount = availableCoin - 20;
    console.log(finalCount);
  });
