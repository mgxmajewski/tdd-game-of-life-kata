// const {Space} = require('./Space.js')
const {Grid} = require('./Grid.js')

class GameOfLife {
    constructor(columns, rows) {
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
}

module.exports = {GameOfLife}
