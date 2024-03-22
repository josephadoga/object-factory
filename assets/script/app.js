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

function createDiv(shape, colour) {
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
        let newDiv = createDiv(shape, colour);

        listen('click', newDiv, () => {
            messageBox.innerText = `Unit: ${figureArray.indexOf(figure) + 1} ${info}`;
        });
    } else if(shape === '' || colour === '') {
        messageBox.innerText = 'Please select a Shape and Colour to start !!!';
    }
}

function resetButton() {
    selectButton.value = 'Create';
    selectButton.style.backgroundColor = 'var(--app-blue)';

    listen('click', selectButton, () => {
        createShape();
        check();
    });
}

function resetArray() {
    figureArray.length = 0;
}

function check(){
    if (figureArray.length === 20) {
        messageBox.innerText = 'Its full! Reset!';
        selectButton.value = 'Reset';
        selectButton.style.backgroundColor = '#f00';

        listen('click', selectButton, () => {
            resetButton();
            resetArray();
            gridBox.innerHTML = ``;
        });
    }
}

listen('click', selectButton, () => {
    createShape();
    check();
});



