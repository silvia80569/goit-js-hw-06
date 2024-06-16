const nameInput = document.getElementById("name-input");
const nameOuput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();

  if (inputValue === "") {
    nameOuput.textContent = "Anonymous";
  } else {
    nameOuput.textContent = inputValue;
  }
});
