const inputEl = document.querySelector(`#name-input`);
const nameOutputEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInput);

function onInput(event) {
    
        if (inputEl.value.length === 0) {
            return nameOutputEl.textContent = `Anonymous`;
    }
    
    return nameOutputEl.textContent = inputEl.value;      
}



