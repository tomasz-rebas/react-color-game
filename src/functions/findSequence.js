export default function findSequence (grid, rowRootIndex, columnRootIndex) {

    const colorIndex = grid[rowRootIndex][columnRootIndex];
    let identicalNeighbours = [[rowRootIndex, columnRootIndex]];

    identicalNeighbours.forEach(coordinates => {

        // const isTopNeighbourIdentical = grid [coordinates[0] - 1] [coordinates[1]] === colorIndex;
        // const isRightNeighbourIdentical = grid [coordinates[0]] [coordinates[1] + 1] === colorIndex;
        // const isBottomNeighbourIdentical = grid [coordinates[0] + 1] [coordinates[1]] === colorIndex;
        // const isLeftNeighbourIdentical = grid [coordinates[0]] [coordinates[1] - 1] === colorIndex;

        const isNotOnTopEdge = coordinates[0] > 0;
        const isNotOnRightEdge = coordinates[1] < grid[0].length - 1;
        const isNotOnBottomEdge = coordinates[0] < grid.length - 1;
        const isNotOnLeftEdge = coordinates[1] > 0;

        if (isNotOnTopEdge) {
            // isTopNeighbourIdentical
            if (grid[coordinates[0] - 1][coordinates[1]] === colorIndex) {
                const newElement = [coordinates[0] - 1, coordinates[1]];
                if (!identicalNeighbours.includes(newElement)) {
                    identicalNeighbours.push(newElement);
                }
            }
        }

        if (isNotOnRightEdge) {
            // isRightNeighbourIdentical
            if (grid[coordinates[0]][coordinates[1] + 1] === colorIndex) {
                const newElement = [coordinates[0], coordinates[1] + 1];
                if (!identicalNeighbours.includes(newElement)) {
                    identicalNeighbours.push(newElement);
                }
            }
        }

        if (isNotOnBottomEdge) {
            // isBottomNeighbourIdentical
            if (grid[coordinates[0] + 1][coordinates[1]] === colorIndex) {
                const newElement = [coordinates[0] + 1, coordinates[1]];
                if (!identicalNeighbours.includes(newElement)) {
                    identicalNeighbours.push(newElement);
                }
            }
        }

        if (isNotOnLeftEdge) {
            // isLeftNeighbourIdentical
            if (grid[coordinates[0]][coordinates[1] - 1] === colorIndex) {
                const newElement = [coordinates[0], coordinates[1] - 1];
                if (!identicalNeighbours.includes(newElement)) {
                    identicalNeighbours.push(newElement);
                }
            }
        }
    });

    console.log(identicalNeighbours);








    // const isTopNeighbourIdentical = 
    //     rowIndex === rowRootIndex - 1 && 
    //     columnIndex === columnRootIndex && 
    //     value === colorIndex;

    // const isRightNeighbourIdentical = 
    //     rowIndex === rowRootIndex && 
    //     columnIndex === columnRootIndex + 1 && 
    //     value === colorIndex;

    // const isBottomNeighbourIdentical = 
    //     rowIndex === rowRootIndex + 1 && 
    //     columnIndex === columnRootIndex && 
    //     value === colorIndex;

    // const isLeftNeighbourIdentical = 
    //     rowIndex === rowRootIndex && 
    //     columnIndex === columnRootIndex - 1 && 
    //     value === colorIndex;

    // if (isTopNeighbourIdentical) {
    //     score++;
    //     return -1;
    // }
    // if (isRightNeighbourIdentical) {
    //     score++;
    //     return -1;
    // }
    // if (isBottomNeighbourIdentical) {
    //     score++;
    //     return -1;
    // }
    // if (isLeftNeighbourIdentical) {
    //     score++;
    //     return -1;
    // }

    return {
        modifiedGrid: grid,
        score: 0
    }
}