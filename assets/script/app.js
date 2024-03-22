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
const messageBox = select('.message p');

const figureArray = [];

function addDiv(shape, colour) {
    const newDiv = document.createElement('div');
    newDiv.className = `figure-${shape}`;
    newDiv.style.backgroundColor = colour;
    gridBox.appendChild(newDiv);

    return newDiv;
}
 
function createShape() {
    const shape = inputShape.value;
    const colour = inputColour.value;
    const selectedInputColour = inputColour.options[inputColour.selectedIndex];

    const figure = new Shape(shape, selectedInputColour.textContent);
    figureArray.push(figure);
    let info = figure.getInfo();

    if (shape && colour) {
        messageBox.innerText = '';
        let newDiv = addDiv(shape, colour);

        listen('click', newDiv, () => {
            messageBox.innerText = `Unit: ${figureArray.indexOf(figure) + 1} | ${info}`;
        });
    } else {
        messageBox.innerHTML = `Please select a Shape and Colour to start <span>!!!<span>`;
    }
}

function checkFullCapacity(){
    if (figureArray.length === 20) {
        messageBox.innerText = 'Its full! Reset!';
        selectButton.value = 'Reset';
        selectButton.style.backgroundColor = '#f00';

        listen('click', selectButton, () => {
            gridBox.innerHTML = ``;
            location.reload();
        });
    }
}

listen('click', selectButton, () => {
    createShape();
    checkFullCapacity();
});



