const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, onChange)

function onChange(event) {

    textEl.style.fontSize = `${inputEl.value}px`;
}

