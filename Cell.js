class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alive = false;
        this.exist = true;
        this.id = `space-${x}-${y}`;
        this.cell = null;
    }

    giveLife() {
        this.alive = true;
    }

    killLife() {
        this.alive = false;
    }

    get isAlive() {
        return this.alive
    }

    get position() {
        return `position-${this.x}-${this.y}`
    }

    get xValue() {
        return this.x
    }

    get yValue() {
        return this.y
    }
}
module.exports = {Cell}
