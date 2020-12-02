// score

export const addToScore = (value) => {
    return {
        type: 'ADD_TO_SCORE',
        payload: value
    }
}

export const resetScore = () => {
    return {
        type: 'RESET_SCORE'
    }
}

// grid

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

// pointerEvents

export const disableButtons = () => {
    return {
        type: 'DISABLE_BUTTONS'
    }
}

export const enableButtons = () => {
    return {
        type: 'ENABLE_BUTTONS'
    }
}