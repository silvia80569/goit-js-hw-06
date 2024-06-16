function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const boxesContainer = document.getElementById("boxes");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

let counterValue = 0;

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => destroyBoxes());

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
