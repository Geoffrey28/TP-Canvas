import Rectangle from './classes/rectangle.js';
import Circle from './classes/circle.js';
import { getRandomNumber, getRandomColor } from './random.js';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// TEST MANUEL DES CLASSES
// const rectangle = new Rectangle('#912bb5', 40, 40, 200, 200);
// rectangle.draw(ctx);
// const circle = new Circle('#912bb5', 240, 240, 45);
// circle.draw(ctx);

// CREATION DE FORMES ALEATOIRES AU CLIC
canvas.addEventListener('click', (e) => {
    let shapeRandom = getRandomNumber();

    createShape(e.offsetX, e.offsetY);
    // if (shapeRandom % 2 == 0 ) {
    //     let rectangle = new Rectangle(getRandomColor(),
    //                                   e.offsetX,
    //                                   e.offsetY,
    //                                   getRandomNumber(),
    //                                   getRandomNumber());
    //     rectangle.draw(ctx);
    // } else {
    //     let circle = new Circle(getRandomColor(),
    //                             e.offsetX,
    //                             e.offsetY,
    //                             getRandomNumber());
    //     circle.draw(ctx);
    // }
});

// FORMULAIRE DE CREATION DE FORMES
const form = document.querySelector('#shapeForm');
const shapeChoice = document.querySelector('#shape');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
const color = document.querySelector('#color');

const widthContainer = document.querySelector('#width-container');
const heightContainer = document.querySelector('#height-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    createShape();
});

function createShape(posX, posY) {
    if (shapeChoice.value == 'rectangle') {
        let rectangle = new Rectangle(color.value,
                                      posX || getRandomNumber(),
                                      posY || getRandomNumber(),
                                      width.value || getRandomNumber(),
                                      height.value || getRandomNumber());
        rectangle.draw(ctx);
    } else if (shapeChoice.value == 'circle') {
        let circle = new Circle(color.value,
                                posX || getRandomNumber(),
                                posY || getRandomNumber(),
                                width.value || getRandomNumber());
        circle.draw(ctx);
    }
}

shapeChoice.addEventListener('change', () => {
    heightContainer.classList.toggle('invisible');
    if (shapeChoice.value == 'rectangle') {
        widthContainer.querySelector('label').textContent = 'Largeur : ';
    } else {
        widthContainer.querySelector('label').textContent = 'Rayon : ';
    }
})