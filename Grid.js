const {Space} = require('./Space.js')

class Grid {
    constructor(columns, rows) {
        this.columns = columns
        this.rows = rows
        this.spaces = this.createSpace();
    }

    createSpace() {
        const spaces = [];
        for (let x = 0; x < this.columns; x++) {
            let rows = [];
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x,y);
                rows.push(space);
            }
            spaces.push(rows);
        }
        return spaces;
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
                let x_box = colBox[x];
                let y_box = rowBox[y];
                // Adds condition to exclude cells outside Grid which are "forced" by 3x3 box
                if ((x_box >= 0 && x_box < this.rows) && (y_box >= 0 && y_box < this.columns)) {
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
        return this.spaces[x][y]
    }

    get gridView() {
        const gridView = [];
        for (let y = 0; y < this.rows; y++){
            const rows = [];
            for(let x = 0; x < this.columns; x++){
                const spaceVisual = '~'
                const lifeVisual = '#'
                if(this.spaces[x][y].isAlive){
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
