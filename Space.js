class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alive = false;
        this.exist = true;
        this.id = `space-${x}-${y}`;
        this.cell = null;
    }

    giveLife(){
        this.alive = true;
    }

    get isAlive(){
        return this.alive
    }

    get position(){
        return `position-${this.x}-${this.y}`
    }
}

module.exports = {Space}
