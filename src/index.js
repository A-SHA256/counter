
// Main container
const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

// Display increasing and decreasing number
const displayCounter = document.createElement('div');
displayCounter.classList.add('display');
displayCounter.innerText = '0';
container.append(displayCounter);


// Buttons
const btns = document.createElement('div');
btns.classList.add('display');
container.append(btns);

// Button for descreasing number
const decreaseCounter = document.createElement('button');
decreaseCounter.innerText = '-';
decreaseCounter.classList.add('plus-button');
btns.append(decreaseCounter);

// Return display value to zero
const displayZero = document.createElement('button');
displayZero.innerText = '0';
displayZero.classList.add('reset');
btns.append(displayZero);

//Button for increasing number
const increaseCounter = document.createElement('button');
increaseCounter.innerText = '+';
increaseCounter.classList.add('minus-button');
btns.append(increaseCounter);


let counter = 0;

increaseCounter.addEventListener('click', () => {
    counter += 1;
    displayCounter.innerText= counter;
    return;
})

decreaseCounter.addEventListener('click', () => {
    counter -= 1;
    displayCounter.innerText= counter;
    return;
})

displayZero.addEventListener('click', () => {
    counter = 0;
    displayCounter.innerText= counter;
    return;
})