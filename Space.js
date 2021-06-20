class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.cell = null;
    }

    get position(){
        return `position-${this.x}-${this.y}`
    }
}

module.exports = {Space}
