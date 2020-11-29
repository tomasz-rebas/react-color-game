export default function findSequence (grid, row, column) {

    let modifiedGrid = grid;
    const colorIndex = modifiedGrid[row][column];

    modifiedGrid[row][column] = -1;

    if (modifiedGrid[row - 1][column] === colorIndex) {
        modifiedGrid[row - 1][column] = -1;
    }
    if (modifiedGrid[row][column + 1] === colorIndex) {
        modifiedGrid[row][column + 1] = -1;
    }
    if (modifiedGrid[row + 1][column] === colorIndex) {
        modifiedGrid[row + 1][column] = -1;
    }
    if (modifiedGrid[row][column - 1] === colorIndex) {
        modifiedGrid[row][column - 1] = -1;
    }

    return modifiedGrid;
}