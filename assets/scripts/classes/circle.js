import Shape from './shape.js';

class Circle extends Shape {

    #radius;

    constructor(color, posX, posY, radius) {
        super(color, posX, posY);
        this.#radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.posX, this.posY, this.#radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

export default Circle;