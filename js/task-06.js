const inputValidtion = document.getElementById("validation-input");

inputValidtion.addEventListener("blur", function () {
  const requiredLength = parseInt(this.getAttribute("data-length"));
  const inputValue = this.value.trim();

  if (inputValue.length === requiredLength) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
});
