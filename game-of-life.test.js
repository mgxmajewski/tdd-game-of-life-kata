const {Grid} = require('./game-of-life.js')
const {Space} = require('./Space.js')

describe('Game of life', () => {

    test('should return number of rows and columns', () => {
        // Given
        const GridToTest =  new Grid(4, 8)
        // When
        let result = GridToTest.size
        // Then
        expect(result).toEqual('rows: 4, columns: 8');
    });

    test('should return array of arrays with mocked spaces', () => {
        // Given
        const GridToTest =  new Grid(4, 8)
        // When
        let result = GridToTest.gridView
        // Then
        expect(result).toEqual([["~", "~", "~", "~"], ["~", "~", "~", "~"], ["~", "~", "~", "~"], ["~", "~", "~", "~"], ["~", "~", "~", "~"], ["~", "~", "~", "~"], ["~", "~", "~", "~"], ["~", "~", "~", "~"]])
    });

    test('should return id of Space object', () => {
        // Given
        const SpaceToTest =  new Space(4, 8)
        // When
        let result = SpaceToTest.position
        // Then
        expect(result).toEqual(`position-4-8`)
    });

    test('should return alive when checked', () => {
        // Given
        const SpaceToTest =  new Space(4, 8)
        // When
        SpaceToTest.giveLife()
        // Then
        let result = SpaceToTest.isAlive
        expect(result).toEqual(true)
    });

    test('should return false when cell first got alive then killed', () => {
        // Given
        const SpaceToTest =  new Space(4, 8)
        // When
        SpaceToTest.giveLife()
        SpaceToTest.killLife()
        // Then
        let result = SpaceToTest.isAlive
        expect(result).toEqual(false)
    });
})
