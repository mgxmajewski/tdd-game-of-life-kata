// This Kata is about calculating the next generation of Conway’s game of life,
// given any starting position

// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.
'use strict';

const {GameOfLife} = require('./GameOfLife.js')
const prompt = require('prompt-sync')();

const col = prompt('Columns: ');
const row = prompt('Rows: ');
const gen = prompt('Generations: ');

const game = new GameOfLife(col, row)
const pulsar = [
    [3,1],[4,1],[5,1],[9,1],[10,1],[11,1],
    [1,3],[6,3],[8,3],[13,3],
    [1,4],[6,4],[8,4],[13,4],
    [1,5],[6,5],[8,5],[13,5],
    [3,6],[4,6],[5,6],[9,6],[10,6],[11,6],
    [3,8],[4,8],[5,8],[9,8],[10,8],[11,8],
    [1,9],[6,9],[8,9],[13,9],
    [1,10],[6,10],[8,10],[13,10],
    [1,11],[6,11],[8,11],[13,11],
    [3,13],[4,13],[5,13],[9,13],[10,13],[11,13],
]
//This one has bug but keeps evolving
const KarelP15 =[
    [6,3],[11,3],
    [6,4],[7,4],[8,4],[9,4],[10,4],[11,4],
    [6,5],[11,5],
    [6,9],[7,9],[8,9],[9,9],[10,9],[11,9],
    [5,10],[12,10],
    [4,11],[13,11],
    [5,12],[12,12],
    [6,13],[7,13],[8,13],[13,13],[10,13],[11,13],
]

const mP15 =[
    [6,3],[11,3],
    [6,4],[7,4],[8,4],[9,4],[10,4],[11,4],
    [6,5],[11,5],
    [6,9],[7,9],[8,9],[9,9],[10,9],[11,9],
    [5,10],[12,10],
    [4,11],[13,11],
    [5,12],[12,12],
    [6,13],[7,13],[8,13],[9,13],[10,13],[11,13],
]

game.initiateLife = pulsar

let i = 0;
do {
    task(i);
    i++;
} while (i < gen);
function task(i) {
    setTimeout(function() {
        console.clear()
        let grid = game.cellGrid.gridView
        const displayBoard = (board) => {
            let buffer = '';
            for (let i = 0; i < board.length; i++) {
                for (let x = 0; x < board[i].length; x++) {
                    buffer += board[i][x];
                }
                buffer += '\n';
            }
            console.log(buffer);
        }
        displayBoard(grid)
        game.updateGrid()
    }, 100 * i);
    // console.clear()
}
