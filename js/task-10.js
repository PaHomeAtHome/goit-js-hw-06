function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector(`#controls`);
const createButton = document.querySelector(`[data-create]`);
const destroyButton = document.querySelector(`[data-destroy]`);
const boxesEl = document.querySelector(`#boxes`);
const inputClass = controlsEl.children[0].classList.add(`input`);
const inputEl = document.querySelector(`.input`);

createButton.addEventListener(`click`, createBoxes)
destroyButton.addEventListener(`click`, destroyBoxes)
inputEl.addEventListener(`input`, checkAmount)

function checkAmount(event) {
  if (parseInt(inputEl.value) > 100) {
    return alert("100 boxes max")
  }

  if (parseInt(inputEl.value) <= 0) {
    return alert("1 box min")
  }
}

function createBoxes(event) {

  if (parseInt(inputEl.value) > 100) {
    return alert("100 boxes max")
  }

  if (parseInt(inputEl.value) <= 0) {
    return alert("1 box min")
  }
  
  boxesEl.innerHTML = ``;

  const amount = parseInt(inputEl.value);

  const divs = []

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement(`div`)
    const color = getRandomHexColor();

    div.style.width = `calc(30px + ${(i * 10)}px)`;
    div.style.height = `calc(30px + ${(i * 10)}px)`;
    div.style.backgroundColor = `${color}`
    div.style.margin = `5px`

    divs.push(div);
  }

  return boxesEl.append(...divs)
}

function destroyBoxes(event) {
  
  return boxesEl.innerHTML = ``;

  }


