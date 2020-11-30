export default function replaceSquares (grid, colorCount) {

    let newGrid = grid;
    let searchingForEmptySquares = true;

    while (searchingForEmptySquares) {
        let isEmptySquareDetected = false;
        newGrid.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value === -1) {
                    isEmptySquareDetected = true;
                    // if it's top row, generate new color
                    if (i === 0) {
                        newGrid[i][j] = Math.floor(Math.random() * colorCount);
                    } else {
                        // replace with the value from the previous row
                        const temp = newGrid[i][j];
                        newGrid[i][j] = newGrid[i - 1][j];
                        newGrid[i - 1][j] = temp;
                    }
                }
            });
        });
        if (!isEmptySquareDetected) {
            searchingForEmptySquares = false;
        }
    }

    return newGrid.map(element => element);
}