export const overwriteAllTiles = (values) => {
    return {
        type: 'OVERWRITE_ALL_TILES',
        payload: values
    }
}

export const findSequence = (coordinates) => {
    return {
        type: 'FIND_SEQUENCE',
        payload: coordinates
    }
}

export const replaceEmptyTiles = (colorIndexes) => {
    return {
        type: 'REPLACE_EMPTY_TILES',
        payload: colorIndexes
    }
}