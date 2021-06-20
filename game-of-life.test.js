const {Grid} = require('./game-of-life.js')
const {Space} = require('./Space.js')

describe('Game of life', () => {

    test('should return number of rows and columns', () => {
        // Given
        const GridToTest =  new Grid(4, 8)
        let result = GridToTest.size
        expect(result).toEqual('rows: 4, columns: 8');
    });

    test('should return array of arrays with mocked spaces', () => {
        // Given
        const GridToTest =  new Grid(4, 8)
        let result = GridToTest.gridView
        expect(result).toEqual([["x", "x", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"]])
    });

    test('should return id of Space object', () => {
        // Given
        const SpaceToTest =  new Space(4, 8)
        let result = SpaceToTest.position
        expect(result).toEqual(`position-4-8`)
    });
})
