// This Kata is about calculating the next generation of Conway’s game of life,
// given any starting position

// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.
const {Space} = require('./Space.js')

class Grid {
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns
        this.spaces = this.createSpace();
    }

    createSpace() {
        const spaces = [];
        for (let x = 0; x < this.columns; x++) {
            let column = [];
            for (let y = 0; y < this.rows; y++) {
                const space = 'x';
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }

    get size() {
        return `rows: ${this.rows}, columns: ${this.columns}`
    }

    get gridView() {
        return this.spaces
    }
}

module.exports = {Grid}
