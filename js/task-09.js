function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
const colorEl = document.querySelector(`.color`);

changeColorButton.addEventListener(`click`, onClickChangeColor)

function onClickChangeColor() {
  const newColor = getRandomHexColor();
  
  bodyEl.style.backgroundColor = `${newColor}`;
  colorEl.textContent = newColor;
}