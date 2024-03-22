class Shape {
    #name;
    #colour;

    constructor(name, colour) {
        this.#name = name;
        this.#colour = colour;
    }

    set name(name) { this.#name = name; }
    get name() { return this.#name; }

    set colour(colour) { this.#colour = colour; }
    get colour() { return this.#colour; }

    getInfo() {
        return `${this.#name} | ${this.#colour}`;
    }
}

export default Shape;