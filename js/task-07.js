const fontSizeContr = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeContr.addEventListener("input", () => {
  const fontSize = fontSizeContr.value + "px";
  text.style.fontSize = fontSize;
});
