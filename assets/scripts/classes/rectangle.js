import Shape from './shape.js';

class Rectangle extends Shape {

    #width;
    #height;

    constructor(color, posX, posY, width, height) {
        super(color, posX, posY);
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.#width, this.#height);
        ctx.fill();
    }
}

export default Rectangle;