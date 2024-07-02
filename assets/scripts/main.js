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

    if (shapeRandom % 2 == 0 ) {
        let rectangle = new Rectangle(getRandomColor(), e.offsetX, e.offsetY, getRandomNumber(), getRandomNumber());
        rectangle.draw(ctx);
    } else {
        let circle = new Circle(getRandomColor(), e.offsetX, e.offsetY, getRandomNumber());
        circle.draw(ctx);
    }
});