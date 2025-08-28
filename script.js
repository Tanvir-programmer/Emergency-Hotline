const cardsContainer = document.querySelector(".grid.grid-cols-3");

const heartCountElement = document.getElementById("heart-count");

let heartCount = 0;

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-heart")) {
    heartCount++;
    heartCountElement.textContent = heartCount;
  }
});
// coin count

const availableCoin = parseInt(document.getElementById("coin-count").innerText);
// call button functionallity
// card-1
document.getElementById("callBtn-1").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-1").innerText;
  const number = document.getElementById("number-1").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-2
document.getElementById("callBtn-2").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-2").innerText;
  const number = document.getElementById("number-2").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-3
document.getElementById("callBtn-3").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-3").innerText;
  const number = document.getElementById("number-3").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-4
document.getElementById("callBtn-4").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-4").innerText;
  const number = document.getElementById("number-4").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-5
document.getElementById("callBtn-5").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-5").innerText;
  const number = document.getElementById("number-5").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-6
document.getElementById("callBtn-6").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-6").innerText;
  const number = document.getElementById("number-6").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-7
document.getElementById("callBtn-7").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-7").innerText;
  const number = document.getElementById("number-7").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-8
document.getElementById("callBtn-8").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-8").innerText;
  const number = document.getElementById("number-8").innerText;
  alert(`Calling ${tag} ${number}`);
});
// card-2
document.getElementById("callBtn-9").addEventListener("click", function () {
  let availableCoin = parseInt(document.getElementById("coin-count").innerText);
  if (availableCoin < 20) {
    alert("Don't have enough balance to make this call");
    return;
  }
  const newAvailableCoin = availableCoin - 20;
  document.getElementById("coin-count").innerText = newAvailableCoin;
  const tag = document.getElementById("tag-9").innerText;
  const number = document.getElementById("number-9").innerText;
  alert(`Calling ${tag} ${number}`);
});
