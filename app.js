// This Kata is about calculating the next generation of Conway’s game of life,
// given any starting position

// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.
const {GameOfLife} = require('./GameOfLife.js')
const prompt = require('prompt');


// const columnsInput = 0;
// const rowsInput = 0;
// const numberOfGenerations = 0;

prompt.start();

prompt.get(['columnsInput', 'rowsInput', 'numberOfGenerations'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('columnsInput : ' + result.columnsInput);
    console.log('rowsInput : ' + result.rowsInput);
    console.log('numberOfGenerations : ' + result.numberOfGenerations);
});

function onErr(err) {
    console.log(err);
    return 1;
}


