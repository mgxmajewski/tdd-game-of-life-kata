// const {Space} = require('./Cell.js')
const {Grid} = require('./Grid.js')

class GameOfLife {
    constructor(columns, rows) {
        this.columns = columns
        this.rows = rows
        this.grid = new Grid(columns, rows)
    }

    get cellGrid(){
        return this.grid
    }

    set initiateLife(initialLife){
        for(let cell = 0; cell < initialLife.length; cell++){
            const x = initialLife[cell][0]
            const y = initialLife[cell][1]
            const spaceToRevive = this.cellGrid.accessCell(x,y)
            spaceToRevive.giveLife()
        }
    }

    set updatedGrid(updatedGrid){
        this.grid = updatedGrid
    }

    updateGrid(){
        const tempGrid = new Grid(this.columns, this.rows)
        const cellsToRevive = []
        for (let x = 0; x < this.columns; x++){
            for(let y = 0; y < this.rows; y++){
                const cellAnalysed = this.grid.accessCell(x,y)
                const cellAnalysisResult = this.grid.analiseNeighbourCells(cellAnalysed)
                if (cellAnalysisResult === 3){
                    cellsToRevive.push([x,y])
                } else if ((cellAnalysisResult === 3 || cellAnalysisResult === 2) && cellAnalysed.isAlive){
                    cellsToRevive.push([x,y])
                }
            }
        }
        this.updatedGrid = tempGrid
        this.initiateLife = cellsToRevive
    }
}

module.exports = {GameOfLife}
