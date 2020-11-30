export default function findSequence (grid, rowRootIndex, columnRootIndex) {

    const colorIndex = grid[rowRootIndex][columnRootIndex];
    let identicalNeighbours = [[rowRootIndex, columnRootIndex]];
    let isLookingIdenticalNeighbours = true;

    function isNeighbourAlreadyAdded(inputArray) {
        let didFindElement = false;
        identicalNeighbours.forEach(element => {
            if (element[0] === inputArray[0] && element[1] === inputArray[1]) {
                didFindElement = true;
            }
        });

        if (didFindElement) {
            return true;
        } else {
            return false;
        }
    }

    // console.log(isNeighbourAlreadyAdded([rowRootIndex, columnRootIndex]));

    while (isLookingIdenticalNeighbours) {

        console.log(identicalNeighbours);

        let didFindAnyIdenticalNeighbours = false;

        identicalNeighbours.forEach(coordinates => {

            const isNotOnTopEdge = coordinates[0] > 0;
            const isNotOnRightEdge = coordinates[1] < grid[0].length - 1;
            const isNotOnBottomEdge = coordinates[0] < grid.length - 1;
            const isNotOnLeftEdge = coordinates[1] > 0;
    
            if (isNotOnTopEdge) {
                // isTopNeighbourIdentical
                if (grid[coordinates[0] - 1][coordinates[1]] === colorIndex) {
                    const newElement = [coordinates[0] - 1, coordinates[1]];
                    if (!isNeighbourAlreadyAdded(newElement)) {
                        identicalNeighbours.push(newElement);
                        didFindAnyIdenticalNeighbours = true;
                    }
                }
            }
    
            if (isNotOnRightEdge) {
                // isRightNeighbourIdentical
                if (grid[coordinates[0]][coordinates[1] + 1] === colorIndex) {
                    const newElement = [coordinates[0], coordinates[1] + 1];
                    if (!isNeighbourAlreadyAdded(newElement)) {
                        identicalNeighbours.push(newElement);
                        didFindAnyIdenticalNeighbours = true;
                    }
                }
            }
    
            if (isNotOnBottomEdge) {
                // isBottomNeighbourIdentical
                if (grid[coordinates[0] + 1][coordinates[1]] === colorIndex) {
                    const newElement = [coordinates[0] + 1, coordinates[1]];
                    if (!isNeighbourAlreadyAdded(newElement)) {
                        identicalNeighbours.push(newElement);
                        didFindAnyIdenticalNeighbours = true;
                    }
                }
            }
    
            if (isNotOnLeftEdge) {
                // isLeftNeighbourIdentical
                if (grid[coordinates[0]][coordinates[1] - 1] === colorIndex) {
                    const newElement = [coordinates[0], coordinates[1] - 1];
                    if (!isNeighbourAlreadyAdded(newElement)) {
                        identicalNeighbours.push(newElement);
                        didFindAnyIdenticalNeighbours = true;
                    }
                }
            }
        });

        if (!didFindAnyIdenticalNeighbours) {
            isLookingIdenticalNeighbours = false;
        }
    }

    //console.log(identicalNeighbours);

    return {
        modifiedGrid: grid,
        score: 0
    }
}