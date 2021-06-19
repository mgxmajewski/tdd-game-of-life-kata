// This Kata is about calculating the next generation of Conway’s game of life,
// given any starting position

// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.

class Grid {
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns
    }

    get size() {
        return `rows: ${this.rows}, columns: ${this.columns}`
    }
}

module.exports = {Grid}
