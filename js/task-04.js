let counterValue = 0;

const valueElement = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
});
