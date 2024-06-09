const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterEl = document.querySelector('.counter');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

resetButtonEl.addEventListener('click', function(){
    //reset the value of counter
    counterValueEl.textContent = 0;

    //reset background color
    counterEl.classList.remove('counter--limit');

    //reset counter title
    counterTitleEl.textContent = 'Fancy Counter';

    //enable increase and decrease button
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    //unfocus (blur) reset button
    resetButtonEl.blur();

});

function increamentCounter(){
    //get current value of counter
    const currentValue = counterValueEl.textContent;

    //convert value to number
    const currentValueAsNumber = +currentValue;

    //increment by 1
    let newValue = currentValueAsNumber + 1;

    //check if new value is greater than 5
    if (newValue > 5) {
        //if it is, force it to be 5 instead
        newValue = 5;

        // given visual indicator that limit has been reached
        counterEl.classList.add('counter--limit');

        // update cou ter title to say limit has been reached
        counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for > 5';

        // disable increase and decrease button
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;

    }

    //set counter element with new value
    counterValueEl.textContent = newValue;

    //unfocus (blur) button
    increaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', increamentCounter);

document.addEventListener('keydown', increamentCounter);

decreaseButtonEl.addEventListener('click', function(){
    //get current value of counter
    const   currentValue = counterValueEl.textContent;

    //convert value to number
    const currentValueAsNumber = +currentValue;

    //decrement by 1
    const newValue = currentValueAsNumber - 1;

    // check if new value is less than 0
    if(newValue < 0){
        newValue = 0;
    }

    //set counter element with new value
    counterValueEl.textContent = newValue;

    //unfocus (blur) button
    decreaseButtonEl.blur();
});

