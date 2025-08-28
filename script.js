const cardsContainer = document.querySelector(".grid.grid-cols-3");

const heartCountElement = document.getElementById("heart-count");
const copyCountElement = document.getElementById("copy-count");

let heartCount = 0;
let copyCount = 0;

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-heart")) {
    heartCount++;
    heartCountElement.textContent = heartCount;
  }
  if (event.target.classList.contains("btn-copy")) {
    alert("Copied");
    copyCount++;
    copyCountElement.textContent = copyCount;
  }
});

// coin count

const availableCoin = parseInt(document.getElementById("coin-count").innerText);
// call button functionality
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
  const title = document
    .querySelector("#number-1")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-2")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-3")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-4")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-5")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-6")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-7")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-8")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
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
  const title = document
    .querySelector("#number-9")
    .closest(".card")
    .querySelector("h2").innerText;
  alert(`Calling ${tag} ${number}`);
  addTransaction(title, number);
});
// Add transaction to the transaction list
function addTransaction(title, number) {
  const transactionList = document.getElementById("transaction-list");
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const entry = document.createElement("div");
  entry.className = "border-b py-2";
  entry.innerHTML = `
    <div class="font-semibold">${title}</div>
    <div class="flex justify-between items-center">
      <div>Number: <b>${number}</b></div>
      <div class="text-xs text-gray-500">${timeString}</div>
    </div>
  `;
  transactionList.prepend(entry);
}

// Clear all transactions when clear button is clicked
document.getElementById("clear-btn").addEventListener("click", function () {
  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = "";
});
