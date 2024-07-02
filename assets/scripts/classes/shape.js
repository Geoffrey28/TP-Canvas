class Shape {

    #color;
    #posX;
    #posY;

    constructor(color, posX, posY) {
        this.#color = color;
        this.#posX = posX;
        this.#posY = posY;
    }

    get color() {
        return this.#color;
    }

    get posX() {
        return this.#posX;
    }

    get posY() {
        return this.#posY;
    }
}

export default Shape;