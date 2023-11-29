const color = document.querySelector(".widget");
const changeColorBtn = document.querySelector(".change-color");
const changeColorText = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  changeColorText.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
