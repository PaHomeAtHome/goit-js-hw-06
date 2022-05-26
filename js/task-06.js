const inputEl = document.querySelector(`#validation-input`);
const lengthEl = document.querySelector(`[data-length]`)
const lengthValue = lengthEl.dataset.length;

inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    if (inputEl.value.length == lengthValue) {
        inputEl.classList.add(`valid`);
        inputEl.classList.remove(`invalid`);
        return;
    }
    inputEl.classList.add(`invalid`)
    inputEl.classList.remove(`valid`);
    return;
}
