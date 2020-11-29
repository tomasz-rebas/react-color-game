export default function findSequence (grid, rowRootIndex, columnRootIndex) {

    const colorIndex = grid[rowRootIndex][columnRootIndex];

    // let isTopElementIdentical = false;
    // let isRightElementIdentical = false;
    // let isBottomElementIdentical = false;
    // let isLeftElementIdentical = false;

    return grid.map((row, rowIndex) => {
        return row.map((value, columnIndex) => {
            if (
                rowIndex === rowRootIndex - 1 && 
                columnIndex === columnRootIndex &&
                value === colorIndex
            ) {
                //isTopElementIdentical = true;
                return -1;
            }
            else if (
                rowIndex === rowRootIndex && 
                columnIndex === columnRootIndex + 1 &&
                value === colorIndex
            ) {
                //isRightElementIdentical = true;
                return -1;
            }
            else if (
                rowIndex === rowRootIndex + 1 && 
                columnIndex === columnRootIndex &&
                value === colorIndex
            ) {
                //isBottomElementIdentical = true;
                return -1;
            }
            else if (
                rowIndex === rowRootIndex && 
                columnIndex === columnRootIndex - 1 &&
                value === colorIndex
            ) {
                //isLeftElementIdentical = true;
                return -1;
            }
            else if (
                rowIndex === rowRootIndex && 
                columnIndex === columnRootIndex
            ) {
                return -1
            }
            else {
                return value;
            }
        })
    });

    // if (isTopElementIdentical) {
    //     return findSequence(modifiedGrid, rowRootIndex - 1, columnRootIndex, colorIndex)
    // }
    // if (isRightElementIdentical) {
    //     return findSequence(modifiedGrid, rowRootIndex, columnRootIndex + 1, colorIndex)
    // }
    // if (isBottomElementIdentical) {
    //     return findSequence(modifiedGrid, rowRootIndex + 1, columnRootIndex, colorIndex)
    // }
    // if (isLeftElementIdentical) {
    //     return findSequence(modifiedGrid, rowRootIndex, columnRootIndex - 1, colorIndex)
    // }
    // return modifiedGrid;
}