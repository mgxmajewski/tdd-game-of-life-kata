const {Grid} = require('./game-of-life.js')

describe('Game of life', () => {

    test('should return number of rows and columns', () => {
        // Given
        const GridToTest =  new Grid(4, 8)
        let result = GridToTest.size
        expect(result).toEqual('rows: 4, columns: 8');
    });
})
