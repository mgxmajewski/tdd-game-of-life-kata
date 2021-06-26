const {Cell} = require('./Cell.js')

class Grid {
    constructor(columns, rows) {
        this.columns = columns
        this.rows = rows
        this.cells = this.createCells();
    }

    createCells() {
        const cells = [];
        for (let x = 0; x < this.columns; x++) {
            let rows = [];
            for (let y = 0; y < this.rows; y++) {
                const cell = new Cell(x,y);
                rows.push(cell);
            }
            cells.push(rows);
        }
        return cells;
    }

    analiseNeighbourCells(cell){
        let row = cell.yValue
        let col = cell.xValue
        let result = 0
        const rowBox = [row - 1, row, row + 1];
        const colBox = [col - 1, col, col + 1];
        for (let x = 0; x <= 2 ; x++){
            // Loops through (vertical) box_col - begins with -1 because matrix include preceding row
            for (let y = 0; y <= 2; y++){
                // Declare analyzed cells position relative to box
                let x_box = colBox[y];
                let y_box = rowBox[x];
                // Adds condition to exclude cells outside Grid which are "forced" by 3x3 box
                if ((x_box >= 0 && x_box < this.columns) && (y_box >= 0 && y_box < this.rows)) {
                    const neighbourCell = this.accessCell(x_box, y_box)
                    // console.log(neighbourCell)
                    if(neighbourCell.isAlive&&neighbourCell!==cell){
                        result++
                    }
                }
            }
        }
        return result
    }

    get size() {
        return `columns: ${this.columns}, rows: ${this.rows}`
    }

    accessCell(x,y){
        return this.cells[x][y]
    }

    get gridView() {
        const gridView = [];
        for (let y = 0; y < this.rows; y++){
            const rows = [];
            for(let x = 0; x < this.columns; x++){
                const spaceVisual = '_'
                const lifeVisual = '#'
                if(this.cells[x][y].isAlive){
                    rows.push(lifeVisual);
                } else {
                    rows.push(spaceVisual);
                }
            }
            gridView.push(rows);
        }
        return gridView
    }
}

module.exports = {Grid}
