// ======= Heart Button Functionality =======
const favButtons = document.querySelectorAll(".fav-btn");
const heartCountEl = document.getElementById("heart-count");
let heartCount = 0;

favButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const img = button.querySelector("img");

    if (button.classList.contains("active")) {
      heartCount++;
      img.src = "assets/heart-filled.png";
    } else {
      heartCount--;
      img.src = "assets/heart.png";
    }

    heartCountEl.textContent = heartCount;
  });
});

// ======= Call Button Functionality & Call History =======
const callButtons = document.querySelectorAll(".call-btn");
const coinCountEl = document.getElementById("coin-count");
let coins = parseInt(coinCountEl.textContent);

const historyList = document.querySelector(".history-list");
const clearBtn = document.querySelector(".clear-btn");

// Function to add call to history with 12-hour format
function addToHistory(serviceName, serviceNumber) {
  const li = document.createElement("li");

  // Current time
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  const time = `${hours}:${minutes}:${seconds} ${ampm}`;

  li.innerHTML = `<span class="history-text">${serviceName} - ${serviceNumber}</span> <span class="history-time">${time}</span>`;
  historyList.prepend(li);
}

// Clear history
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

// Call button click
callButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceName = card.querySelector("h3").textContent;
    const serviceNumber = card.querySelector("h2").textContent;

    if (coins < 20) {
      showAlert("Not enough coins to make a call!", false);
      return;
    }

    coins -= 20;
    coinCountEl.textContent = coins;

    showAlert(`Calling ${serviceName} (${serviceNumber})...`);

    addToHistory(serviceName, serviceNumber);
  });
});

// ======= Copy Button Functionality =======
const copyButtons = document.querySelectorAll(".copy-btn");
const copyCountEl = document.getElementById("copy-count");
let copyCount = parseInt(copyCountEl.textContent);

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const number = card.querySelector("h2").textContent;

    navigator.clipboard
      .writeText(number)
      .then(() => {
        showAlert(`Copied: ${number}`);
        // Increment copy count in navbar
        copyCount++;
        copyCountEl.textContent = `${copyCount} Copy`; // keep the "Copy" text
      })
      .catch((err) => {
        showAlert("Failed to copy!", false);
        console.error(err);
      });
  });
});

// ======= Custom Alert Function =======
function showAlert(message, success = true) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "alert";
  alertDiv.style.backgroundColor = success ? "#4caf50" : "#f44336";
  alertDiv.textContent = message;
  document.body.appendChild(alertDiv);

  // fade in
  setTimeout(() => {
    alertDiv.style.opacity = 1;
  }, 10);

  // fade out and remove
  setTimeout(() => {
    alertDiv.style.opacity = 0;
    setTimeout(() => {
      alertDiv.remove();
    }, 300);
  }, 2000);
}

button.addEventListener("click", () => {
  button.classList.toggle("active");
  const img = button.querySelector("img");

  if (button.classList.contains("active")) {
    img.src = "assets/heart-filled.png"; // filled heart
  } else {
    img.src = "assets/heart.png"; // outline heart
  }
});
