const gridReducer = (state = [], action) => {

    switch (action.type) {

        case 'OVERWRITE_ALL_TILES': {
            const values = action.payload;
            let currentValueIndex = -1;
            return state.map(row => {
                return row.map(() => {
                    currentValueIndex++;
                    return values[currentValueIndex];
                });
            });
        }

        case 'FIND_SEQUENCE': {

            const grid = state;
            const rowRootIndex = action.payload.rowRootIndex;
            const columnRootIndex = action.payload.columnRootIndex

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
            
            while (isLookingIdenticalNeighbours) {
            
                let didFindAnyIdenticalNeighbours = false;
            
                identicalNeighbours.forEach(coordinates => {
            
                    const isNotOnTopEdge = coordinates[0] > 0;
                    const isNotOnRightEdge = coordinates[1] < grid[0].length - 1;
                    const isNotOnBottomEdge = coordinates[0] < grid.length - 1;
                    const isNotOnLeftEdge = coordinates[1] > 0;
                
                    if (isNotOnTopEdge) {
                        // Is the top neighbour identical?
                        if (grid[coordinates[0] - 1][coordinates[1]] === colorIndex) {
                            const newElement = [coordinates[0] - 1, coordinates[1]];
                            if (!isNeighbourAlreadyAdded(newElement)) {
                                identicalNeighbours.push(newElement);
                                didFindAnyIdenticalNeighbours = true;
                            }
                        }
                    }
                
                    if (isNotOnRightEdge) {
                        // Is the right neighbour identical?
                        if (grid[coordinates[0]][coordinates[1] + 1] === colorIndex) {
                            const newElement = [coordinates[0], coordinates[1] + 1];
                            if (!isNeighbourAlreadyAdded(newElement)) {
                                identicalNeighbours.push(newElement);
                                didFindAnyIdenticalNeighbours = true;
                            }
                        }
                    }
                
                    if (isNotOnBottomEdge) {
                        // Is the bottom neighbour identical?
                        if (grid[coordinates[0] + 1][coordinates[1]] === colorIndex) {
                            const newElement = [coordinates[0] + 1, coordinates[1]];
                            if (!isNeighbourAlreadyAdded(newElement)) {
                                identicalNeighbours.push(newElement);
                                didFindAnyIdenticalNeighbours = true;
                            }
                        }
                    }
                
                    if (isNotOnLeftEdge) {
                        // Is the left neighbour identical?
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
            
            let modifiedGrid = grid;
            let score = 0;
            
            if (identicalNeighbours.length > 1) {
                identicalNeighbours.forEach(coordinates => {
                    modifiedGrid[coordinates[0]][coordinates[1]] = -1
                });
                score = identicalNeighbours.length;
            }
            
            if (score > 1) {
                return modifiedGrid.map(element => element);
            } else {
                return state;
            }
        }

        case 'REPLACE_EMPTY_TILES': {

            const colorIndexes = action.payload;
            let currentColorIndex = 0;

            let newGrid = state;
            let searchingForEmptyTiles = true;

            while (searchingForEmptyTiles) {
                let isEmptyTileDetected = false;
                for (let i = 0; i < newGrid.length; i++) {
                    for (let j = 0; j < newGrid[i].length; j++) {
                        if (newGrid[i][j] === -1) {
                            isEmptyTileDetected = true;
                            // if it's top row, generate new color
                            if (i === 0) {
                                newGrid[i][j] = colorIndexes[currentColorIndex];
                                currentColorIndex++;
                            } else {
                                // replace with the value from the previous row
                                const temp = newGrid[i][j];
                                newGrid[i][j] = newGrid[i - 1][j];
                                newGrid[i - 1][j] = temp;
                            }
                        }
                    }
                }
                if (!isEmptyTileDetected) {
                    searchingForEmptyTiles = false;
                }
            }
        
            return newGrid.map(element => element);
        }
            
        default:
            return state;
    }
}

export default gridReducer;