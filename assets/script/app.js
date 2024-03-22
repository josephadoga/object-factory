import Shape from './Shape.js';
'use strict';

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
  
function select(selector) {
    return document.querySelector(selector);
}

const inputShape = select('.shape');
const inputColour = select('.colour');
const selectButton = select('.create');
const gridBox = select('.grid-box');
const messageBox = select('.message');
const div = select('div');

figureArray = []''

function createShape() {
    const shape = inputShape.value;
    const colour = inputColour.value;

    const figure = new Shape(shape, colour);

    if (shape && colour) {
        // gridBox.innerHTML += `<div class="figure-square"></div>`;
        // gridBox.style.backgroundColor = colour;

        const newDiv = document.createElement('div');
        newDiv.className = `figure-${shape}`;
        newDiv.style.backgroundColor = colour;
        gridBox.appendChild(newDiv);
    }

    // gridBox.innerHTML += `<div class="figure-square"></div>`;
    // figureSquare.style.backgroundColor = colour;

    // const newDiv = document.createElement('div');
    // newDiv.className = 'figure-square';
    // newDiv.style.backgroundColor = colour;
    // gridBox.appendChild(newDiv);
}

listen('click', selectButton, () => {
    createShape();
    messageBox.innerText = '';
});

listen('click', div, () => {
    createShape();
    messageBox.innerText = '';
});

