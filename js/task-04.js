const counterEl = document.querySelector(`#counter`);
const decrementButtonEl = counterEl.querySelector(`[data-action="decrement"]`);
const incrementButtonEl = counterEl.querySelector(`[data-action="increment"]`);
const counterValueEl = counterEl.querySelector(`#value`);

let counterValue = 0;

function addDecrement() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

function addIncrement() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

decrementButtonEl.addEventListener(`click`, addDecrement);
incrementButtonEl.addEventListener(`click`, addIncrement);