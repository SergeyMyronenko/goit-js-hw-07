const inputBox = document.querySelector("#controls");
const input = document.querySelector("#controls input");

const createBtn = document.querySelector("#controls button[data-create]");

const destroyBtn = document.querySelector("#controls button[data-destroy]");

const divBox = document.querySelector("#boxes");
divBox.style.marginTop = "10px";
divBox.style.display = "flex";
divBox.style.flexWrap = "wrap";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  divBox.innerHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const newElement = document.createElement("div");

    newElement.classList.add("container");
    newElement.style.width = `${size}px`;
    newElement.style.height = `${size}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    divBox.append(newElement);
    size += 10;
  }
}

createBtn.addEventListener("click", (event) => {
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter numbers from 1 to 100");
  }
});

function destroyBoxes() {
  divBox.innerHTML = "";
}

destroyBtn.addEventListener("click", (event) => {
  destroyBoxes();
});
